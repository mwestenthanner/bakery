import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listFilter: string = '';
  @Input() listSearch: string = '';
  @Input() listSort: string = '';

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipes = this.recipeService.getRecipes(0);

  }


}
