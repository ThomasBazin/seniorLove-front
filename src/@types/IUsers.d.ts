export interface IUsers {
  id: number;
  name: string;
  gender: string;
  picture: string;
  alt: string;
  birth_date: Date;
  age: number;
  description: string;
  gender: string;
  email: string;
  password: string;
  hobbies: IHobby[];
  events: IEvent[];
}
