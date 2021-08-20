import { Component, OnInit } from '@angular/core';
import {TarotCardsService} from "../../services/tarot-cards.service";
import {TarotCard} from "../../interfaces/tarot-card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  tarotCards!: TarotCard[];

  constructor(private tarotCardsService: TarotCardsService) { }

  ngOnInit(): void {
    this.tarotCardsService.list().subscribe((cards: TarotCard[]) => {
      this.tarotCards = cards;
    })
  }

}
