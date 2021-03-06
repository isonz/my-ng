import { Component, OnInit } from '@angular/core';
import {Hero, heroes} from "../../hero";

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  
  heroes = heroes;
  hero = this.heroes[0];
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';
  trackById(index: number, hero: Hero): number { return hero.id; }


  constructor() { }

  ngOnInit() {
  }

}
