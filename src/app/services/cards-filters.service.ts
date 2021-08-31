import {Injectable} from '@angular/core';
import {TarotCard} from "../interfaces/tarot-card";
import {Arcana} from "../interfaces/arcana";

@Injectable({
  providedIn: 'root'
})
export class CardsFiltersService {

  constructor() { }

  private filter(cards: TarotCard[], arcana: Arcana) {
    return cards.filter(card => card.arcana === arcana);
  }

  public filterMajorArcana(card: TarotCard[]) {
    return this.filter(card, Arcana.MAJOR);
  }

  public filterCups(cards: TarotCard[]) {
    return this.filter(cards, Arcana.CUPS);
  }

}
