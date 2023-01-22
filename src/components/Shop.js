import React from 'react';  
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { gotCharacters } from '../common/constants';

function Shop() {
  return (
    <>
        <Typography  sx={{fontSize: "1.5rem", fontWeight: "bold", margin: "20px auto", textAlign: "center"}}>
        Game Of Thrones Characters Image Gallery
        </Typography>
        <ImageList sx={{ width: "70%", height: 750, border: "1px solid #ddd", borderRadius: "5px", padding:"10px", margin: "10px auto", boxShadow: "0 0 10px #eee" }} cols={3} variant="woven" rowHeight={164}>
        {gotCharacters.map((char) => (
            <ImageListItem key={char.img}>
            <img
                src={`${char.img}?w=200&h=200&fit=crop&auto=format`}
                srcSet={`${char.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                alt={char.title}
                loading="lazy"                
            />
            </ImageListItem>
      ))}
    </ImageList>
    </>
    
  );
}

export default Shop