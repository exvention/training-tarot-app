import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {TarotCard} from "../interfaces/tarot-card";

@Injectable({
  providedIn: 'root'
})
export class TarotCardsService {

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<TarotCard[]> {
    return this.httpClient.get<TarotCard[]>("api/cards");
  }

  public get(id: string): Observable<TarotCard> {
    return this.httpClient.get<TarotCard>(`api/cards/${id}`);
  }

}
