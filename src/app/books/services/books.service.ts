import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BooksDataApiResponse } from './types';

@Injectable()
export class BooksService {
  #http = inject(HttpClient);

  getBooks() {
    return this.#http
      .get<BooksDataApiResponse>('/api/books')
      .pipe(map((b) => b.data));
  }
}
