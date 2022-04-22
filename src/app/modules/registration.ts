export class Registration {
  public id: String = "";
  constructor(
    public name: String,
    public surname: String,
    public year: number,
    public gender: String,
    public email: String,
    public phone: String,
    public class_name: String
  ) {}
}
