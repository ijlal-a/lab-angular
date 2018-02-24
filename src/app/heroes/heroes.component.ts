import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

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
  selectedHero: Hero;

  // list of heros
  heroes: Hero[];

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

/**
  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
*/

/**
The new version waits for the Observable to emit the array of heroes— which could happen now
 or several minutes from now. Then subscribe passes the emitted array to the callback, which
 sets the component's heroes property.
*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) {
    /**
    The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
    When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
    */
   }

  ngOnInit() {
    /**
    The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component.
    It's a good place to put initialization logic.
    */
    this.getHeroes();

  }

}
