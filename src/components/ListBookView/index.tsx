import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Book, listBooks } from '../../api/apigateway';

const ListBookView: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    listBooks().then(setBooks);
  }, []);

  return (
    <div>
      <Box>
        <Typography>ListBookView</Typography>
      </Box>
      {books &&
        books.map((book) => (
          <Box key={`book_${book.isbn}`}>
            <Typography>{book.title}</Typography>
            <Typography>{book.isbn}</Typography>
          </Box>
        ))}
    </div>
  );
};

export default ListBookView;
