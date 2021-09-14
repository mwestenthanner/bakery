import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  tags: any[];

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.tags = this.recipeService.getRecipeTags();
  }

}
