import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {TarotCard} from "../interfaces/tarot-card";
import {TheFool} from "../data/the-fool";
import {TheMagician} from "../data/the-magician";

const THE_FOOL = new TheFool();
const THE_MAGICIAN = new TheMagician();

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const cards: TarotCard[] = [
      THE_FOOL,
      THE_MAGICIAN,
      THE_FOOL,
      THE_MAGICIAN,
      THE_FOOL,
      THE_MAGICIAN,
    ];
    return {cards};
  }
}
