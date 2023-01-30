import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs } from '@mui/material'
import SearchInput from '../components/SearchInput';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useState } from 'react';

function DrawerComp(props) {

    // Create an openDrawer state variable and set it to false by default
    const [openDrawer, setOpenDrawer] = useState(false)
    const [selectedMenuVal, setSelectedMenuVal] = useState(0)

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => {setOpenDrawer(false)}}>

                <Tabs sx={{ fontWeight: "500", textAlign: "left"}} textColor="inherit" indicatorColor='primary' value={selectedMenuVal} onChange={(e, value)=>{ setSelectedMenuVal(value)}} orientation="vertical">
                    {
                        props.menu.map((page, index) => (
                            <Tab label={page} key={index} onClick={() => { props.sendDataToParent(index); setOpenDrawer(false) }} />        
                        ))
                    }                                    
                </Tabs> 
                {/* <List>
                    {
                        props.menu.map((page, index) => (
                            <ListItemButton onClick={()=>{setOpenDrawer(false)}} key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>    
                        ))
                    }
                </List> */}
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
