import {CardPosition} from "./card-position";
import {Predictions} from "./predictions";
import {Arcana} from "./arcana";

export interface TarotCard {
  id: string;
  name: string;
  arcana: Arcana;
  index: number;
  description: string;
  image: string;
  keywords: CardPosition<string>
  predictions: CardPosition<Predictions>
}
