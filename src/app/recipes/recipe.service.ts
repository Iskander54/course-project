import { Recipe } from './recipe.model';
import { EventEmitter,Injectable }from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
   new Recipe('Tasty Schnitzel','just awesome','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
    [ new Ingredient ('Meat',1),
    new Ingredient ('french fries',20)
    ]),
    new Recipe('Big fat burger','Nothing else to add','https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',[
    new Ingredient ('Buns',2),
    new Ingredient ('Pork',2)])
  ];

  constructor(private slService: ShoppingListService){

  }

  setRecipes(recipes : Recipe[]){
this.recipes=recipes
this.recipesChanged.next(this.recipes.slice());

}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number ){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }

  addRecipe (recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());

  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());
  }

}
