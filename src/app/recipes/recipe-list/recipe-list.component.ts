import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe(' TEST RECIPE 1','desc ','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/portobellos-rotis-et-puree-a-la-ciboulette-935e574f.jpg') , 
    new Recipe (' TEST RECIPE 2','desc ','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/portobellos-rotis-et-puree-a-la-ciboulette-935e574f.jpg')
  ] ;
  
  constructor() { }

  ngOnInit() {
  }

}
