import { Routes } from '@angular/router';
import {CardComponent} from "./card/card.component";
import {cardResolver} from "./resolvers/card.resolver";
import {CreationComponent} from "./creation/creation.component";
import {MyPageComponent} from "./my-page/my-page.component";

export const routes: Routes = [
  {
    path: 'accueil',
    component: CardComponent,
    resolve: { cat: cardResolver }
  },
  {
    path: 'creation',
    component: CreationComponent,
  },
  {
    path: 'mypage',
    component: MyPageComponent,
  }
];
