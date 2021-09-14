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

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    if (this.listFilter === '') {
      this.recipes = this.recipeService.getRecipes(5);
    } else {
      this.recipes = this.recipeService.filterRecipes(this.listFilter);
    }

  }

  ngOnChanges(changes): void {

    if (this.listFilter === '') {
      this.recipes = this.recipeService.getRecipes(5);
    } else {
      this.recipes = this.recipeService.filterRecipes(this.listFilter);
    }

  }

}
