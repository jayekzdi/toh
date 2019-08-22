import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Katarina' , img:'katarina.jpg'},
      { id: 12, name: 'Amumu' , img:'amumu.jpg'},
      { id: 13, name: 'Akali', img:'akali.jpg' },
      { id: 14, name: 'Jinx', img:'jinx.jpg' },
      { id: 15, name: 'Garen' , img:'garen.jpg'},
      { id: 16, name: 'Master Yi' , img:'masteryi.jpg'},
      { id: 17, name: 'Gnar' , img:'gnar.jpg'},
      { id: 18, name: 'Draven' , img:'draven.jpg'},
      { id: 19, name: 'Darius' , img:'darius.jpg'},
      { id: 20, name: 'Ashe' , img:'ashe.jpg'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}