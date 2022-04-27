import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthResponseData} from "../modules/authResponseData";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  public register(email: String, password: String) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9l7beca5BGTAkwMfKFbrvYJervqU6AZQ",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
