import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Books component works!</p> `,
  styles: ``,
})
export class BooksComponent {}
