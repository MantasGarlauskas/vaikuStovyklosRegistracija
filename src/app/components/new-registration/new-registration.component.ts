import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Registration} from "src/app/modules/registration";
import {RegistrationService} from "src/app/service/registration.service";

@Component({
  selector: "app-new-registration",
  templateUrl: "./new-registration.component.html",
  styleUrls: ["./new-registration.component.css"],
})
export class NewRegistrationComponent implements OnInit {
  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    let fData = f.form.value;
    let registration = new Registration(
      fData.name,
      fData.surname,
      fData.year,
      fData.gender,
      fData.email,
      fData.phone,
      fData.class_name
    );
    console.log(registration);

    this.registrationService
      .addRegistration(registration)
      .subscribe((response) => {
        console.log("pridetas irasas: ");
        console.log(response);
      });
  }
}
