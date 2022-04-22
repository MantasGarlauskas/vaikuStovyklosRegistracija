import {Component, OnInit} from "@angular/core";
import {Registration} from "src/app/modules/registration";
import {RegistrationService} from "src/app/service/registration.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public registrations: Registration[] = [];
  constructor(private registrationService: RegistrationService) {}

  private loadData() {
    this.registrationService.getRegistration().subscribe((response) => {
      this.registrations = response;
      console.log(this.registrations);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }
  deleteRegistration(id: String) {
    this.registrationService.deleteRegistration(id).subscribe((response) => {
      this.loadData();
    });
  }
}
