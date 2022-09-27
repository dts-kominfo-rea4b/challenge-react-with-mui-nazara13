// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ( props ) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [name, setName] = useState("Nama");
  const [email, setEmail] = useState("namaemail@gmail.com");
  const [phone, setPhone] = useState("081218121812");
  const [photo, setPhoto] = useState("https://placekitten.com/g/200/300");

  const _onChange = (e) => {
    e.preventDefault();
    let newContact = { name, email, phone, photo };

    props.handleSubmit(newContact);
  }

  return (
    <div>
      <form onSubmit={ _onChange }>
        <Card sx={{ minWidth: 275, backgroundColor: "#F3F1EB", textAlign: "left" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField label="Name" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Phone" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <TextField label="Email" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Photo" required id="filled-size-normal" variant="filled" sx={{ marginBottom: "1em" }} value={photo} onChange={(e) => setPhoto(e.target.value)} />
          </CardContent>
          <Button type="submit" onClick={_onChange} color="success" sx={{ marginLeft: 1, marginBottom: 1 }}>
            ADD NEW
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default ContactForm;