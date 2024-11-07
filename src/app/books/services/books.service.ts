import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book, BooksDataApiResponse } from './types';

@Injectable()
export class BooksService {
  #http = inject(HttpClient);

  getBooks() {
    return this.#http.get<BooksDataApiResponse>('/api/books').pipe(
      map((r) => r.data),
      map((books) =>
        books.map((b) => {
          const book: Book = {
            id: b.id,
            author: b.author,
            title: b.title,
            year: b.year,
          };
          return book;
        }),
      ),
    );
  }
}
