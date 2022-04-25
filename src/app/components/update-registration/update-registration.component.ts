import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Registration} from "src/app/modules/registration";
import {RegistrationService} from "src/app/service/registration.service";

@Component({
  selector: "app-update-registration",
  templateUrl: "./update-registration.component.html",
  styleUrls: ["./update-registration.component.css"],
})
export class UpdateRegistrationComponent implements OnInit {
  public id: String;
  public registration: Registration = new Registration(
    "",
    "",
    0,
    "",
    "",
    "",
    ""
  );
  public isData = false;
  public isLoading: boolean = true;
  public isError: boolean = false;
  public cantSave: boolean = false;

  constructor(
    public registrationService: RegistrationService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.registrationService.getRegistrationUpdate(this.id).subscribe({
      next: (response) => {
        this.registration = response;
        this.isData = true;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      },
    });
  }

  onSubmit() {
    console.log(this.registration);
    this.registrationService.updateRegistration(this.registration).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.cantSave = true;
      },
    });
  }
}
