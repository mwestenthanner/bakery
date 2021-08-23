import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe(
      'Linsenbolognese',
      'Das ist eine Beschreibung',
      'https://thealmondeater.com/wp-content/uploads/2019/12/Lentil-Bolognese-Recipe-1-3.jpg',
      'https://thealmondeater.com/wp-content/uploads/2019/12/Lentil-Bolognese-Recipe-1-3.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Vegetarisch', 'Vegan', 'Pasta']
    ),

    new Recipe(
      'Schokoladenkuchen',
      'Das ist eine Beschreibung',
      'https://www.seasonsandsuppers.ca/wp-content/uploads/2020/04/chocolate-pound-cake-loaf-1200.jpg',
      'https://www.seasonsandsuppers.ca/wp-content/uploads/2020/04/chocolate-pound-cake-loaf-1200.jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Kuchen', 'Desserts']
    ),

    new Recipe(
      'Nudelsalat Caprese mit Pesto',
      'Das ist eine Beschreibung',
      'https://inquiringchef.com/wp-content/uploads/2020/06/Pesto-Pasta-Salad_square.jpg',
      'https://inquiringchef.com/wp-content/uploads/2020/06/Pesto-Pasta-Salad_square.jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Vegetarisch', 'Salate']
    ),

    new Recipe(
      'Tartelettes mit Joghurtcreme und Beeren',
      'Das ist eine Beschreibung',
      'https://images.ctfassets.net/nf38yhm0afx3/3peJ5RjDmo6umOumy22eMe/27d7b806660c3f63ae6dda1a04380ce1/R36_Vegane_Beeren-Tartelettes18.jpg?w=2000&fm=jpg',
      'https://images.ctfassets.net/nf38yhm0afx3/3peJ5RjDmo6umOumy22eMe/27d7b806660c3f63ae6dda1a04380ce1/R36_Vegane_Beeren-Tartelettes18.jpg?w=2000&fm=jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Kuchen']
    ),

    new Recipe(
      'Protein-Schokomousse aus Seidentofu',
      'Das ist eine Beschreibung',
      'https://klaraslife.com/wp-content/uploads/2020/02/schokoIMG_0129.jpg',
      'https://klaraslife.com/wp-content/uploads/2020/02/schokoIMG_0129.jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Vegan', 'Desserts']
    ),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
