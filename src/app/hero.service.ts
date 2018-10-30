import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable <Hero[]> {
    return of (HEROES);
  }
  constructor() {}
}
