import {CardPosition} from "./card-position";
import {Predictions} from "./predictions";

export interface TarotCard {
  id: string;
  name: string;
  arcana: string;
  index: number;
  description: string;
  image: string;
  keywords: CardPosition<string>
  predictions: CardPosition<Predictions>
}
