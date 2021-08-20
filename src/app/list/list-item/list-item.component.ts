import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() recipeElement: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
