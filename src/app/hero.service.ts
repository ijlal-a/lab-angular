import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero} from './hero';
import { HEROES} from './mock-heroes';
import { MessageService } from  './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }
/**
  getHeroes():Hero[]{
    return HEROES;
  }
*/
getHeroes():Observable<Hero[]>{
  this.messageService.add('HeroService: fetched heroes');
// of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  return of(HEROES);
}

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
