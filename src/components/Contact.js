// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { ListItemAvatar, List, ListItem, Box, , Typography, Avatar } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <div>
      <List sx={{ minWidth: 275, backgroundColor: "#DBF6F0", padding: "5px" }}>
        <ListItem sx={{ padding: "15px" }}>
          <ListItemAvatar>
            <Avatar src={data.photo} sx={{ width: 80, height: 80 }} />
          </ListItemAvatar>
          <Box sx={{ marginLeft: "20px" }}>
            <Typography> { data.name } </Typography>
            <Typography> { data.phone } </Typography>
            <Typography> { data.email } </Typography>
          </Box>
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;
