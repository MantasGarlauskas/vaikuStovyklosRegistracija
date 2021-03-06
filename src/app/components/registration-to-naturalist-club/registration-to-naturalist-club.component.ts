import {Component, OnInit} from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {RegistrationService} from "src/app/service/registration.service";

@Component({
  selector: "app-registration-to-naturalist-club",
  templateUrl: "./registration-to-naturalist-club.component.html",
  styleUrls: ["./registration-to-naturalist-club.component.css"],
})
export class RegistrationToNaturalistClubComponent implements OnInit {
  public naturalistClubForm: FormGroup;

  constructor(private registrationService: RegistrationService) {
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
      alergijos: new FormArray([]),
      bureliai: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.registrationService
      .addNaturalistClubForm(this.naturalistClubForm.value)
      .subscribe((response) => {
        console.log("duomenys pateikti");
        console.log(response);
      });
    this.naturalistClubForm.reset();
  }

  checkKlase(control: FormControl): {[s: string]: boolean} | null {
    if (control.value >= "6" && control.value <= "12") {
      return null;
    } else {
      return {kalseInCorect: true};
    }
  }
  addAlergy() {
    const input = new FormControl(null, Validators.required);

    (<FormArray>this.naturalistClubForm.get("alergijos")).push(input);
  }
  deleteAlergy() {
    (<FormArray>this.naturalistClubForm.get("alergijos")).removeAt(length - 1);
  }

  addBurelis() {
    const burelis = new FormGroup({
      year: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
    });
    (<FormArray>this.naturalistClubForm.get("bureliai")).push(burelis);
  }
  get getBureliai() {
    return (<FormArray>this.naturalistClubForm.get("bureliai")).controls;
  }

  get alergies() {
    return (<FormArray>this.naturalistClubForm.get("alergijos")).controls;
  }
  toFormGroup(el: AbstractControl): FormGroup {
    return <FormGroup>el;
  }
}
