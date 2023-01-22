import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { type } from './constants';
import MenuItem from '@mui/material/MenuItem';
import { Button, Divider } from '@mui/material';


function ContactUs() {
    return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },      
        width: "50ch",
        border: "1px solid #eee",
        borderRadius: "5px",
        margin: "0 auto",
        padding:"20px",
        textAlign: "center"  
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          disabled
          id="outlined-disabled"
          label="Request ID"
          defaultValue="123"
        />
        <TextField
          required
          id="name-required"
          label="Name"
          placeholder="Name"
        />
        <TextField
          required
          id="email-required"
          label="Email"          
          placeholder="Email"
        />
        <TextField
          id="outlined-select-gender"
          select
          label="Query Type"
          defaultValue="quote"
          helperText="Please select your query"
        >
          {type.map((option) => (
            <MenuItem key={option.value} value={option.value} sx={{textAlign: 'left'}}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>        
        <TextField
          id="outlined-number"
          label="Number of days"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />  
        <Divider sx={{margin: "20px 0"}} />   
        <Button variant='contained' sx={{marginLeft: "1.5ch"}}>Submit</Button>           
      </div>
    </Box>  
        
    )
}

export default ContactUs
