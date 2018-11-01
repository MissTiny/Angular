import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:getched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) {}
}
