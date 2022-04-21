import {Directive} from "@angular/core";
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[BirthYearValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BirthYearValidatorDirective,
      multi: true,
    },
  ],
})
export class BirthYearValidatorDirective implements Validator {
  constructor() {}
  validate(control: FormControl): ValidationErrors | null {
    let age: number = new Date().getFullYear() - control.value;
    // let childYear: number = control.value;

    if (age <= 12 || age >= 18) {
      return {error: "Klaida"};
    }
    return null;
  }
}
