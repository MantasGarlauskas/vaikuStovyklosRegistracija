export class NaturalistClubForm {
  constructor(
    public name: String,
    public surname: String,
    public email: String,
    public klase: number,
    public alergijos?: String[],
    public bureliai?: [{year: Number; name: String; type: String}]
  ) {}
}
