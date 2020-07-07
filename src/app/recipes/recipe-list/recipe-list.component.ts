import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/2/IG0509_panzanella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1529943365287.jpeg'),
    new Recipe('A Test Recipe', 'This is a test description', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/4/2/IG0509_panzanella_s4x3.jpg.rend.hgtvcom.826.620.suffix/1529943365287.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
