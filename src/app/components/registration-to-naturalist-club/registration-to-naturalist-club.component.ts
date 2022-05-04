import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-registration-to-naturalist-club",
  templateUrl: "./registration-to-naturalist-club.component.html",
  styleUrls: ["./registration-to-naturalist-club.component.css"],
})
export class RegistrationToNaturalistClubComponent implements OnInit {
  public naturalistClubForm: FormGroup;
  constructor() {
    this.naturalistClubForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      klase: new FormControl(null, [Validators.required, this.checkKlase]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.naturalistClubForm.value);
    this.naturalistClubForm.reset();
  }

  checkKlase(control: FormControl): {[s: string]: boolean} | null {
    if (control.value >= "6" && control.value <= "12") {
      return null;
    } else {
      return {kalseInCorect: true};
    }
  }
}
