import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardInfoComponent} from "./components/card-info/card-info.component";

const routes: Routes = [
  {
    path: 'cards',
    component: CardListComponent
  },
  {
    path: 'cards/:id',
    component: CardInfoComponent
  },
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
