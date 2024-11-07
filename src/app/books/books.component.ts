import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksListComponent } from './pages/books-list.component';
import { BarnesAndNoble } from './services/books.store';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BooksListComponent],
  template: ` <app-books-list [list]="store.entities()" /> `,
  styles: ``,
})
export class BooksComponent {
  store = inject(BarnesAndNoble);
}
