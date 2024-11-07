import { Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './pages/books-list.component';
import { BooksService } from './services/books.service';
import { BarnesAndNoble } from './services/books.store';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    providers: [BooksService, BarnesAndNoble],
    children: [
      {
        path: 'list',
        component: BooksListComponent,
      },
    ],
  },
];
