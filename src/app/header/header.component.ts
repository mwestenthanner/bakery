import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tags: any[];

  hover: boolean = false;
  menu: boolean = false;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.tags = this.recipeService.getRecipeTags();
  }

}
