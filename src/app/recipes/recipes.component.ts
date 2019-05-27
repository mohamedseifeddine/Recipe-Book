import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes : Recipe[] = [
  new Recipe('TEST RECIPE ','desc ','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/portobellos-rotis-et-puree-a-la-ciboulette-935e574f.jpg')
] ;
  constructor() { }

  ngOnInit() {
  }

}
