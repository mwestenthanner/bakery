import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-teaser-item',
  templateUrl: './teaser-item.component.html',
  styleUrls: ['./teaser-item.component.css']
})
export class TeaserItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {

  }

}
