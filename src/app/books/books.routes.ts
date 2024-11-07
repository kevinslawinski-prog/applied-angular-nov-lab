import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './pages/books-list.component';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'list',
        component: BooksListComponent,
      },
    ],
  },
];
