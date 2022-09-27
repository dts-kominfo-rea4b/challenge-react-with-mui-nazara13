// Kalian bisa menambahkan CSS di src/components/Header.module.css
// atau langsung tambahkan dengan sx={{}}
import { Typography } from '@mui/material';
import React from 'react';
import style from './mycss.css';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className={style.titleContainer}>
      <Typography variant="h3" gutterBottom> Call a Friend </Typography>
      <Typography variant="h6" gutterBottom className={style.subtitle}> Your friendly contact app </Typography>
    </div>
  );
};

export default Header;
