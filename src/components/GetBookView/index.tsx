import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Book, fetchBook } from '../../api/apigateway';

const GetBookView: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [isbn, setIsbn] = useState<string>('');

  const fetchAndShowBook = useCallback(async () => {
    if (isbn.length !== 13) {
      return;
    }
    setBook(await fetchBook(isbn));
  }, [isbn]);

  return (
    <div>
      <Box>
        <Typography>GetBookView</Typography>
      </Box>
      <Box>
        <TextField id="isbn-textfield" label="ISBN" variant="standard" onChange={(ev) => setIsbn(ev.target.value)}>
          {isbn}
        </TextField>
      </Box>
      <Box>
        <Button onClick={fetchAndShowBook}>Get Book</Button>
      </Box>
      {book && (
        <Box>
          <Typography>{book.title}</Typography>
          <Typography>{book.isbn}</Typography>
        </Box>
      )}
    </div>
  );
};

export default GetBookView;
