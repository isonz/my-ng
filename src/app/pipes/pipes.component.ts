import { Component } from '@angular/core';

@Component({
  selector: 'app-pip',
  templateUrl: './pipes.component.html'
})
export class PipesComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
