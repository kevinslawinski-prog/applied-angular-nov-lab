import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <ul>
      @for (book of books(); track book.id) {
        <li>
          <pre>{{ book | json }}</pre>
        </li>
      } @empty {
        <p>There are no books!</p>
      }
    </ul>
  `,
  styles: ``,
})
export class BooksComponent {
  #http = inject(HttpClient);
  books = toSignal(
    this.#http
      .get<{
        data: { id: string; title: string; author: string; year: number }[];
      }>('/api/books')
      .pipe(map((res) => res.data)),
  );
}
