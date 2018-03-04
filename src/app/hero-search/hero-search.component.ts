import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {HeroService} from '../hero.service'

import { Hero } from '../hero';


@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
})

export class HeroSearchComponent{
	heroes: Hero[];
    timmer:any;

    constructor(
    private heroService: HeroService,
    private router: Router) {}

    search(term: string): void {
    clearTimeout(this.timmer)  
     this.timmer = setTimeout(() => this.heroes = this.heroService.search(term),500)
  }

}