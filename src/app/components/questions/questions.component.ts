import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { questions } from 'src/app/steps';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ft-questions',
  standalone: true,
  imports: [
    NgForOf,
    QuestionComponent,
    MatButtonModule,
    RouterLink,
  ],
  template: `
    <ng-container *ngFor="let question of questions">
      <ft-question [question]="question"></ft-question>
    </ng-container>
    <br />
    <button mat-raised-button type="button" routerLink="/feedback/thanks">
      Submit
    </button>
  `,
  styles: [
  ]
})
export class QuestionsComponent {
  questions: any[] = questions;
}
