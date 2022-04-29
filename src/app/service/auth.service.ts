import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {EventEmitter} from "@angular/core";
import {AuthResponseData} from "../modules/authResponseData";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isLoggedIn = false;
  public user?: AuthResponseData;
  private key = "AIzaSyD9l7beca5BGTAkwMfKFbrvYJervqU6AZQ";
  public userUpdated = new EventEmitter();

  constructor(private http: HttpClient) {}

  private authAPICall(url: string, email: String, password: String) {
    return this.http
      .post<AuthResponseData>(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((respose) => {
          this.isLoggedIn = true;
          this.user = respose;
          this.user.expires = new Date().getTime() + +respose.expiresIn * 1000;
          this.userUpdated.emit();
          localStorage.setItem("user", JSON.stringify(this.user));
        })
      );
  }

  public autoLogin() {
    const data = localStorage.getItem("user");
    if (data != null) {
      const user: AuthResponseData = JSON.parse(data);
      if (user.expires != null && user.expires > new Date().getTime()) {
        this.user = new AuthResponseData(
          user.kind,
          user.idToken,
          user.email,
          user.refreshToken,
          user.expiresIn,
          user.localId
        );
        this.isLoggedIn = true;
      }
    }
  }

  public register(email: String, password: String) {
    return this.authAPICall(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        this.key,
      email,
      password
    );
  }

  public login(email: String, password: String) {
    return this.authAPICall(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        this.key,
      email,
      password
    );
  }

  public changePass(password: String) {
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
          this.key,
        {
          idToken: this.user?.idToken,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((respose) => {
          this.isLoggedIn = true;
          this.user = respose;
          this.userUpdated.emit();
        })
      );
  }

  public logout() {
    this.isLoggedIn = false;
    this.user = undefined;
    this.userUpdated.emit();
    localStorage.removeItem("user");
    this.userUpdated.emit();
  }
}
