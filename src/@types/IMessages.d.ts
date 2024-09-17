export interface IMessages {
  id: number;
  message: string;
  receiver_id: number;
  sender: {
    id: number;
    name: string;
    picture: string;
  };
  sender_id: number;
}
