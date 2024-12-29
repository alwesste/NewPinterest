import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Cat} from "../services/cat.interface";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    AsyncPipe
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  showButton: boolean[] = [];

  catUrls$ = this.activatedRoute.data.pipe(
    map(data => {
      const cats: Cat[] = data['cat'] || [];
      return cats.map(cat => cat.url);
    }),
  );

  ngOnInit() {

    this.catUrls$.subscribe((urls) => {
      console.log('Souscription - URLs récupérées :', urls);
    });
  }
}
