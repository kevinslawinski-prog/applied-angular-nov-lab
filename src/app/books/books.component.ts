import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BooksListComponent } from './pages/books-list.component';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BooksListComponent],
  template: ` <app-books-list [list]="books() || []" /> `,
  styles: ``,
})
export class BooksComponent {
  #http = inject(HttpClient);
  books = toSignal(
    this.#http
      .get<{
        data: {
          id: string;
          title: string;
          author: string;
          year: number;
        }[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
