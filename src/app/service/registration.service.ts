import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {NaturalistClubForm} from "../modules/naturalistClubForm";
import {Registration} from "../modules/registration";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  private readonly url: String =
    "https://vaikuregistracijaistovykla-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) {}

  public addRegistration(registration: Registration) {
    return this.http.post<{name: string}>(
      this.url + "/registration.json",
      registration
    );
  }
  public getRegistration() {
    return this.http
      .get<{[name: string]: Registration}>(this.url + "/registration.json")
      .pipe(
        map((response) => {
          const regArray: Registration[] = [];
          for (let key in response) {
            regArray.push({...response[key], id: key});
          }
          return regArray;
        })
      );
  }
  public deleteRegistration(id: String) {
    return this.http.delete(this.url + "/registration/" + id + ".json");
  }

  public getRegistrationUpdate(id: String) {
    return this.http
      .get<Registration>(this.url + "/registration/" + id + ".json")
      .pipe(
        map((response) => {
          response.id = id;
          return response;
        })
      );
  }

  public updateRegistration(registration: Registration) {
    return this.http.patch(
      this.url + "/registration/" + registration.id + ".json",
      registration
    );
  }

  public addNaturalistClubForm(registration: NaturalistClubForm) {
    return this.http.post<{name: string}>(
      this.url + "/naturalistClubRegistration.json",
      registration
    );
  }
}
