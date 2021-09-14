import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  print: boolean = false;

  recipeTitle: string;
  detailRecipe: Recipe;
  ingredientsList: Array<[]>;

  isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  printButtonText: string = this.getPrintButtonText();

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.recipeTitle = params['title'];
        }
      )

    this.detailRecipe = this.recipeService.getRecipeDetails(this.recipeTitle);
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

    if (this.isMobile) {
      this.saveToPdf()
    } else {
      window.print();
    }

  }

  saveToPdf(): void {

    let data = document.getElementById("content");

    data.classList.add("printable");

    console.log(data);
    html2canvas(data, {useCORS : true}).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL("image/jpeg", 0.3);
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
      pdf.save(this.detailRecipe.title + '.pdf');
    });

    data.classList.remove("printable");
  }

}
