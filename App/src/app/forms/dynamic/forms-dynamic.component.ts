import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase }    from './question-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-forms-dynamic',
  templateUrl: './forms-dynamic.component.html',
  styleUrls: ['./forms-dynamic.component.scss'],
  providers:  [QuestionService]
})
export class FormsDynamicComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }


  ngOnInit() {
  }

}
