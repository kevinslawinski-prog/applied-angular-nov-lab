export type BooksDataApiResponse = {
  data: Book[];
};

export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
};
