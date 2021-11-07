import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Book, registerBook } from '../../api/apigateway';

const RegisterBookView: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [isbn, setIsbn] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const registerAndShowBook = useCallback(async () => {
    if (isbn.length !== 13 || title.length === 0) {
      return;
    }
    setBook(await registerBook({ isbn, title }));
  }, [isbn, title]);

  return (
    <div>
      <Box>
        <Typography>PostBookView</Typography>
      </Box>
      <Box>
        <TextField id="isbn-textfield" label="ISBN" variant="standard" onChange={(ev) => setIsbn(ev.target.value)}>
          {isbn}
        </TextField>
      </Box>
      <Box>
        <TextField id="title-textfield" label="Title" variant="standard" onChange={(ev) => setTitle(ev.target.value)}>
          {isbn}
        </TextField>
      </Box>
      <Box>
        <Button onClick={registerAndShowBook}>Register Book</Button>
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

export default RegisterBookView;
