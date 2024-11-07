import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="overflow-x-auto">
      <h2>Book Database</h2>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          @for (book of list(); track book.id) {
            <tr class="hover">
              <td>{{ book.id }}</td>
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
export class BooksListComponent {
  list = input.required<
    {
      id: string;
      author: string;
      title: string;
      year: number;
    }[]
  >();
}
