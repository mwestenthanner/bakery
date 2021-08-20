import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailRecipe = new Recipe(
    'Linsenbolognese',
    'https://thealmondeater.com/wp-content/uploads/2019/12/Lentil-Bolognese-Recipe-1-3.jpg',
    'https://thealmondeater.com/wp-content/uploads/2019/12/Lentil-Bolognese-Recipe-1-3.jpg',
    ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
    ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
    40,
    ['Vegetarisch', 'Vegan', 'Pasta']
  );

  ingredientsList = this.getIngredients(this.detailRecipe.ingredients);

  constructor() {
  }

  ngOnInit(): void {
  }

  getIngredients(list:string[]): Array<[]> {

    var ingr = [];

    list.forEach(element => {
      let splitted = element.split(' * ');
      ingr.push(splitted);
    });

    return ingr;

  }

}
