// import './App.css';

// import './App.css';


import contactsJSON from './data/contacts.json';
import { Grid } from "@mui/material";
import Header from "./components/Header";
import ContactForm from './components/ContactForm';
import { useState } from 'react';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const handleSubmit = (addContact) => {
    setContacts([...contacts, addContact]);
  }

  return (
    <div className="App">
      <Header />
      <Grid container spacing={25}>
        <Grid item xs={5}>
          <ContactForm handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={7}>
          {
            contacts.map((contact, index) =>(
              <Contact key={index} data={contact} />
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
