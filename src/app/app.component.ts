import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@Component({
  selector: 'ft-root',
  standalone: true,
  template: `
    <ft-navbar></ft-navbar>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <ft-footer></ft-footer>
  `,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    StarRatingComponent
  ],
  styles: [
    `
    .content:has(ft-question) {
      display: block;
    }
    .content {
      align-items: center;
      display: flex;
      height: calc(100% - 128px);
      justify-content: center;
    }
    `
  ]
})
export class AppComponent {
}
