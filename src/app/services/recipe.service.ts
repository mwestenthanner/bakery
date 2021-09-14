import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {

  private recipes: Recipe[] = [

    new Recipe(
      'Linsenbolognese',
      'linsenbolognese',
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
      'schokoladenkuchen',
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
      'nudelsalat-caprese',
      'Das ist eine Beschreibung',
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      'https://inquiringchef.com/wp-content/uploads/2020/06/Pesto-Pasta-Salad_square.jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Vegetarisch', 'Salate']
    ),

    new Recipe(
      'Tartelettes mit Joghurtcreme und Beeren',
      'tartelettes-mit-beeren',
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
      'protein-schokomousse-aus-seidentofu',
      'Das ist eine Beschreibung',
      'https://klaraslife.com/wp-content/uploads/2020/02/schokoIMG_0129.jpg',
      'https://klaraslife.com/wp-content/uploads/2020/02/schokoIMG_0129.jpg',
      ['200 g * Mehl', '4 * Eier', '200 g * Zucker'],
      ['Backofen auf 175°C vorheizen. Eine Kastenform einfetten und bemehlen. Butter, braunen Zucker, Vanillezucker und Salz in einer großen Schüssel schaumig schlagen.', 'Ein Ei nach dem anderen dazugeben und die Milch unter Rühren in die Schüssel gießen. In einer weiteren Schüssel Mehl, Backpulver und Kakao vermischen.'],
      120,
      ['Vegan', 'Desserts']
    ),

    new Recipe(
      'Asia-Gemüse in Erdnusssauce',
      'asia-gemuese',
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
      'bananenpancakes',
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
      'bibimbap',
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
      'couscous-salat',
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
      'mexikopfanne',
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
      'pasta-paprikasauce',
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
      'sushi',
      'Das ist eine Beschreibung',
      'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg',
      'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg',
      ['40 g * Linsen', '1 * Zwiebel', '2 * Knoblauchzehen'],
      ['In einer hohen Pfanne die Zwiebel, den Knoblauch, die Karotten und den Sellerie bei mittlerer Temperatur anschwitzen. Das Tomatenmark hinzugeben und anrösten. ', 'Die Tomaten, die Brühe, die Linsen und die Kräuter außer Basilikum hinzugeben, mit einem Deckel bedecken und ca. 20 - 25 Minuten leise köcheln lassen. Eventuell noch etwas Flüssigkeit hinzugeben. Die Bolognese muss die Konsistenz der normalen Hackfleischsauce haben.'],
      40,
      ['Fisch', 'Asia']
    ),

  ]

  getRecipes(offset: number = 0) {
    return this.recipes.slice(offset);
  }

  getRecipeDetails(slug: string = '') {

    let detailRecipe = [];

    this.recipes.forEach(element => {

      if (element.url === slug) {
        detailRecipe.push(element);
      }

    });

    return detailRecipe[0];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

  filterRecipes(search: string = "", filter: string ="") {
    var filteredRecipes = [];

    if (search != "") {

      this.recipes.forEach(element => {

        if (element.title.includes(search)) {
          filteredRecipes.push(element);
        }

      });

    }

    if (filter != "") {

      this.recipes.forEach(element => {

        if (element.tags.indexOf(filter) > -1) {
          filteredRecipes.push(element);
        }

      });

    }

    return filteredRecipes;

  }

  sortRecipes() {

  }

}
