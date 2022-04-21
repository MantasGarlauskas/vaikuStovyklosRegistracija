import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {NewRegistrationComponent} from "./components/new-registration/new-registration.component";
import { BirthYearValidatorDirective } from './directives/birth-year-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NewRegistrationComponent,
    BirthYearValidatorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
