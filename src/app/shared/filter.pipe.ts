
import { Pipe, PipeTransform } from "@angular/core";
import { RecipeService } from "../services/recipe.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private recipeService: RecipeService) { }

  transform(value: any, filter: string, searchTerm: string, sort: string) {

    let result = value;

    result = this.filterRecipes(result, filter);
    result = this.searchRecipes(result, searchTerm);
    result = this.sortRecipes(result, sort);

    return result;
  }

  filterRecipes(recipes: any[], filter: string = '') {
    let filteredRecipes = [];

    if (filter != "") {

      recipes.forEach(element => {

        if (element.tags.indexOf(filter) > -1) {
          filteredRecipes.push(element);
        }

      });

    } else filteredRecipes = recipes;

    return filteredRecipes;

  }

  searchRecipes(recipes: any[], search: string = '') {
    let filteredRecipes = [];

    if (search != "") {

      recipes.forEach(element => {

        let recipeTitle = element.title.toLowerCase();

        if (recipeTitle.includes(search.toLowerCase())) {
         filteredRecipes.push(element);
        }

      });

    } else filteredRecipes = recipes;

    return filteredRecipes;

  }

  sortRecipes(recipes: any[], method: string = '') {
    return recipes;
  }

}
