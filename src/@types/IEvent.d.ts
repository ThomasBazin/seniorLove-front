import { IHobby } from './IHobby';

export interface IEvent {
  id: number;
  name: string;
  location: string;
  picture: string;
  description: string;
  date: string;
  hobbies: IHobby[];
}
