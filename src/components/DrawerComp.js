import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchInput from '../components/SearchInput';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useState } from 'react';

function DrawerComp(props) {

    // Create an openDrawer state variable and set it to false by default
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => {setOpenDrawer(false)}}>
                <List>
                    {
                        props.menu.map((page, index) => (
                            <ListItemButton onClick={()=>{setOpenDrawer(false)}} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>    
                        ))
                    }
                </List>
                 {/* Search  */}
                 <SearchInput />
            </Drawer>
            <IconButton sx={{color: "#fff", marginLeft: "auto"}} onClick={() => setOpenDrawer(!openDrawer) }>
                <MenuIcon></MenuIcon>
            </IconButton>
        </React.Fragment>
        
    )
}

export default DrawerComp
