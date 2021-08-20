import { Component, OnInit } from '@angular/core';
import {TarotCardsService} from "../../services/tarot-cards.service";
import {ActivatedRoute} from "@angular/router";
import {TarotCard} from "../../interfaces/tarot-card";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  card!: TarotCard;

  constructor(
    private route: ActivatedRoute,
    private tarotCardService: TarotCardsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.tarotCardService.get(id).subscribe((tarotCard: TarotCard) => {
      this.card = tarotCard;
    })
  }

}
