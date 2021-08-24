import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  print: boolean = false;

  detailRecipe: Recipe;
  ingredientsList: Array<[]>;

  isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  printButtonText: string = this.getPrintButtonText();

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.detailRecipe = this.recipeService.getRecipeDetails(2);
    this.ingredientsList = this.getIngredients(this.detailRecipe.ingredients);
  }

  getIngredients(list:string[]): Array<[]> {

    var ingr = [];

    list.forEach(element => {
      let splitted = element.split(' * ');
      ingr.push(splitted);
    });

    return ingr;

  }

  getPrintButtonText(): string {

    if (this.isMobile) {
      var buttonText = "Als PDF speichern";
    } else var buttonText = "Rezept drucken";

    return buttonText;
  }

  printRecipe(): void {

    if (!this.isMobile) {

        var pdf = new jsPDF();

        pdf.save(this.detailRecipe.title + '.pdf');

    } else {
      window.print();
    }

  }

}
