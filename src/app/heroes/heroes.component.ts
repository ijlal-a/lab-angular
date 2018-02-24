import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

/**
You always import the Component symbol from the Angular core library
and annotate the component class with @Component.
@Component is a decorator function that specifies the Angular metadata for the component.
*/

@Component({
  // — the component's CSS element selector. 'app-heroes', matches the name of
  // the HTML element that identifies this component within a parent component's template.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/* Always export the component class so you can import it elsewhere ... like in the AppModule. */
export class HeroesComponent implements OnInit {
// TODO: check member declaration of various types (object, array, other types)
  //hero = 'Doga';  // single property
  hero: Hero = { // object hero of type class Hero intialized with (1, 'Doga')
  id:1,
  name:'Doga'
  };



  constructor() { }

  ngOnInit() {
    /**
    The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component.
    It's a good place to put initialization logic.
    */
  }

}
