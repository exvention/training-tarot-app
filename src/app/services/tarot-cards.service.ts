import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {TarotCard} from "../interfaces/tarot-card";
import {map} from "rxjs/operators";
import {CardsFiltersService} from "./cards-filters.service";

@Injectable({
  providedIn: 'root'
})
export class TarotCardsService {

  constructor(
    private httpClient: HttpClient,
    private cardsFiltersService: CardsFiltersService,
  ) { }

  public list(): Observable<TarotCard[]> {
    return this.httpClient.get<TarotCard[]>("api/cards");
  }

  public get(id: string): Observable<TarotCard> {
    return this.httpClient.get<TarotCard>(`api/cards/${id}`);
  }

  listMajorArcana(): Observable<TarotCard[]> {
    return this.list().pipe(
      map((cards: TarotCard[]) => this.cardsFiltersService.filterMajorArcana(cards))
    )
  }

  listCups(): Observable<TarotCard[]> {
    return this.list().pipe(
      map((cards: TarotCard[]) => this.cardsFiltersService.filterCups(cards))
    )
  }

}
