import { withDevtools } from '@angular-architects/ngrx-toolkit';
import {
  patchState,
  signalStore,
  type,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Book } from './types';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { inject } from '@angular/core';
import { BooksService } from './books.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type BooksState = {
  books: Book[];
};

const initialState: BooksState = {
  books: [],
};

export const BarnesAndNoble = signalStore(
  withDevtools('Barnes & Noble'),
  withState<BooksState>(initialState),
  withEntities({
    entity: type<Book>(),
  }),
  withMethods((store) => {
    const service = inject(BooksService);
    return {
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            service.getBooks().pipe(
              tapResponse({
                next(value) {
                  patchState(store, setEntities(value));
                },
                error(error) {
                  console.log(error);
                },
              }),
            ),
          ),
        ),
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
