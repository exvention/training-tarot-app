import {TarotCard} from "../interfaces/tarot-card";
import {Arcana} from "../interfaces/arcana";
import {CardPosition} from "../interfaces/card-position";
import {Predictions} from "../interfaces/predictions";

export class NineOfCups implements TarotCard{
  arcana: Arcana = Arcana.CUPS;
  description: string = '';
  id: string = 'nine-of-cups';
  image: string = 'https://www.shitsuren-tarot.com/wp/wp-content/uploads/2017/06/9_c.png';
  index: number = 9;
  keywords: CardPosition<string> = {
    upright: 'Contentment, satisfaction, gratitude, wish come true.',
    reversed: 'Inner happiness, materialism, dissatisfaction, indulgence.'
  };
  name: string = 'Nine of Cups';
  predictions: CardPosition<Predictions> = {
    upright: {
      love: '',
      career: '',
      finances: '',
      health: '',
      spirituality: '',
    },
    reversed: {
      love: '',
      career: '',
      finances: '',
      health: '',
      spirituality: '',
    }
  };

}
