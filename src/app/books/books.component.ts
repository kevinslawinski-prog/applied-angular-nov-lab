import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="overflow-x-auto">
      <h2>Book Database</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          @for (book of books(); track book.id) {
            <tr class="hover">
              <th>{{ book.id }}</th>
              <td>{{ book.author }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.year }}</td>
            </tr>
          } @empty {
            <p>There are no books!</p>
          }
        </tbody>
      </table>
    </div>
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
