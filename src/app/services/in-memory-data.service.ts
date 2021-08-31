import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {TarotCard} from "../interfaces/tarot-card";
import {TheFool} from "../data/the-fool";
import {TheMagician} from "../data/the-magician";
import {NineOfCups} from "../data/nine-of-cups";

const THE_FOOL = new TheFool();
const THE_MAGICIAN = new TheMagician();

const NINE_OF_CUPS = new NineOfCups();

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cards: TarotCard[] = [
      // MAJOR ARCANA
      THE_FOOL,
      THE_MAGICIAN,
      THE_FOOL,
      THE_MAGICIAN,
      THE_FOOL,
      THE_MAGICIAN,

      // CUPS
      NINE_OF_CUPS,
      NINE_OF_CUPS,
      NINE_OF_CUPS,
      NINE_OF_CUPS,
    ];
    return {cards};
  }
}
