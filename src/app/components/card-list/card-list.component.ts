import {Component, OnInit} from '@angular/core';
import {TarotCardsService} from "../../services/tarot-cards.service";
import {TarotCard} from "../../interfaces/tarot-card";
import {Arcana} from "../../interfaces/arcana";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  majorArcana!: TarotCard[];
  cups!: TarotCard[];

  constructor(private tarotCardsService: TarotCardsService) { }

  ngOnInit(): void {
    this.tarotCardsService.listMajorArcana().subscribe((cards: TarotCard[]) => this.majorArcana = cards);
    this.tarotCardsService.listCups().subscribe((cards: TarotCard[]) => this.cups = cards);
  }

}
