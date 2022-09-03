import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ContactList from "components/ContactList";
import ContactForm from "components/ContactsForm/ContactsForm";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const styles = {
  contactTitle: {
    textAlign: 'center',
    marginBottom: 25,
  },
  // container: {
  //   display: 'flex',
  //   justifyContent: 'space-around',
  //   marginBottom: 15,
  // },
};

export default function Contacts() {
  
  return (
     <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sx">
        <h1 style={styles.contactTitle}>Welcom to phonebook👻</h1>
        <Grid container spacing={2}>
              <ContactForm />
          {/* <Grid item  md={6}>
            <Item>
            </Item>
          </Grid> */}
          <Grid item  md={6}>
            <Item>
              <ContactList />
            </Item>
          </Grid>
        </Grid>
            {/* {isLoadingContacts && <h2>Loading...</h2>} */} 
        </Container>
    </React.Fragment>
  //   <div>
  //     <div style={styles.container}>
  //     </div>
  //   </div>
  )
};
