import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './pages/books-list.component';
import { BooksService } from './services/books.service';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    providers: [BooksService],
    children: [
      {
        path: 'list',
        component: BooksListComponent,
      },
    ],
  },
];
