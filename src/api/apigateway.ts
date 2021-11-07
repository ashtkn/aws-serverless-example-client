export type Book = {
  isbn: string;
  title: string;
};

const API_SERVER_ENDPOINT = process.env.REACT_APP_API_SERVER_ENDPOINT || '';

type FetchBookResponse = {
  message: string;
  book?: Book;
};

export const fetchBook = async (isbn: string): Promise<Book | null> => {
  const params = new URLSearchParams({ isbn });
  const response = await fetch(`${API_SERVER_ENDPOINT}/book/get?${params.toString()}`);
  const { book }: FetchBookResponse = await response.json();
  return book || null;
};

type ListBookResponse = {
  message: string;
  books: Book[];
};

export const listBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_SERVER_ENDPOINT}/book/list`);
  const { books }: ListBookResponse = await response.json();
  return books;
};

type RegisterBookResponse = {
  message: string;
  book?: Book;
};

export const registerBook = async (book: Book): Promise<Book | null> => {
  const response = await fetch(`${API_SERVER_ENDPOINT}/book/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const { book: registeredBook }: RegisterBookResponse = await response.json();
  return registeredBook || null;
};
