import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(
    private heroService: HeroService
  ) {}
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  ngOnInit() {
    // debugger;
    // this.httpClient
    //   .get<Hero[]>('http://localhost:64200/api/heroes')
    //   .subscribe(x => console.log(x));
     this.getHeroes();
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(x => {
      this.heroes = x;
    });
  }
}
