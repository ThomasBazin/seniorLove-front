export interface IUsersFull {
  id: number;
  name: string;
  birth_date: Date;
  age: number;
  description: string;
  gender: string;
  picture: string;
  email: string;
  events: [
    {
      id: number;
      name: string;
      location: string;
      picture: string;
      date: Date;
      time: Date;
      users_events: {
        created_at: Date;
        updated_at: Date;
        user_id: number;
        event_id: number;
      };
    },
  ];
  hobbies: []
}
