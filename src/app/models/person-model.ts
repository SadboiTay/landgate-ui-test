export class PersonModel {

  public firstName: string;
  public lastName: string;
  public age: number;
  public jobTitle: string;
  public id: number;

  constructor(dataIn: PersonModel) {
    // TODO: Implement a dataIn object that gets passed in as a JavaScript Object
    if (dataIn) {
      this.firstName = dataIn.firstName;
      this.lastName = dataIn.lastName;
      this.age = dataIn.age;
      this.jobTitle = dataIn.jobTitle;
      this.id = dataIn.id;
    }
  }
}
