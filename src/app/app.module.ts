import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {NewRegistrationComponent} from "./components/new-registration/new-registration.component";
import {BirthYearValidatorDirective} from "./directives/birth-year-validator.directive";
import {HttpClientModule} from "@angular/common/http";
import {UpdateRegistrationComponent} from "./components/update-registration/update-registration.component";
import {AuthComponent} from "./components/auth/auth.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {RegistrationToNaturalistClubComponent} from "./components/registration-to-naturalist-club/registration-to-naturalist-club.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NewRegistrationComponent,
    BirthYearValidatorDirective,
    UpdateRegistrationComponent,
    AuthComponent,
    FooterComponent,
    ChangePasswordComponent,
    RegistrationToNaturalistClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
