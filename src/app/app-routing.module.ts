import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {HomeComponent} from "./components/home/home.component";
import {NewRegistrationComponent} from "./components/new-registration/new-registration.component";
import {RegistrationToNaturalistClubComponent} from "./components/registration-to-naturalist-club/registration-to-naturalist-club.component";
import {UpdateRegistrationComponent} from "./components/update-registration/update-registration.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "new", component: NewRegistrationComponent},
  {path: "update/:id", component: UpdateRegistrationComponent},
  {path: "login", component: AuthComponent},
  {path: "changePass", component: ChangePasswordComponent},
  {
    path: "newNaturalistGroup",
    component: RegistrationToNaturalistClubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
