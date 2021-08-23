import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe(
      'Asia-Gemüse in Erdnusssauce',
      'Das ist eine Beschreibung',
      'https://www.wearesovegan.com/wp-content/uploads/2019/07/veganpeanutbutterstirfry-h1.jpg',
      'https://www.wearesovegan.com/wp-content/uploads/2019/07/veganpeanutbutterstirfry-h1.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Reis', 'Vegan', 'Asia']
    ),

    new Recipe(
      'Bananenpancakes mit Haferflocken',
      'Das ist eine Beschreibung',
      'https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/bananaoatmealpancakes-6.jpg',
      'https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/bananaoatmealpancakes-6.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Frühstück', 'Vegan']
    ),

    new Recipe(
      'Bibimbap',
      'Das ist eine Beschreibung',
      'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg',
      'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Asia']
    ),

    new Recipe(
      'Couscous-Salat',
      'Das ist eine Beschreibung',
      'https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg',
      'https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Vegan', 'Salate']
    ),

    new Recipe(
      'Mexikopfanne',
      'Das ist eine Beschreibung',
      'https://www.number-2-pencil.com/wp-content/uploads/2018/01/Instant-Pot-Chicken-Burrito-Bowl-2.jpg',
      'https://www.number-2-pencil.com/wp-content/uploads/2018/01/Instant-Pot-Chicken-Burrito-Bowl-2.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Reis']
    ),

    new Recipe(
      'Pasta mit gerösteter Paprikasauce',
      'Das ist eine Beschreibung',
      'https://biancazapatka.com/wp-content/uploads/2019/12/roasted-red-pepper-pasta-sauce-easy-creamy.jpg',
      'https://biancazapatka.com/wp-content/uploads/2019/12/roasted-red-pepper-pasta-sauce-easy-creamy.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Vegetarisch', 'Pasta']
    ),

    new Recipe(
      'Sushi',
      'Das ist eine Beschreibung',
      'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg',
      'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Fisch', 'Asia']
    ),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
