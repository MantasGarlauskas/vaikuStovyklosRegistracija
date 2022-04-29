import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthResponseData} from "src/app/modules/authResponseData";
import {AuthService} from "src/app/service/auth.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  public user?: AuthResponseData;
  public isLoginMode = true;
  public authSuccess?: Boolean;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(["/"]);
    }
    this.user = this.auth.user;
    this.isLoginMode = this.auth.isLoggedIn;
  }

  public onSubmit(form: NgForm) {
    const password: String = form.value.password;
    // const idToken: String = this.user?.idToken;
    this.auth.changePass(password).subscribe((response) => {
      console.log(response);
      this.router.navigate(["/"]);
    });
  }
}
