import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BooksListComponent } from './pages/books-list.component';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BooksListComponent],
  template: ` <app-books-list [list]="books() || []" /> `,
  styles: ``,
})
export class BooksComponent {
  booksService = inject(BooksService);
  books = toSignal(this.booksService.getBooks());
}
