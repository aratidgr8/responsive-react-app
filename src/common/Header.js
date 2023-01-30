import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import SearchInput from '../components/SearchInput';
import DrawerComp from '../components/DrawerComp';
import { useTheme } from '@mui/material/styles';
import { mainMenu, hamburgerMenu } from '../common/constants';

//Header Component with responsive menu
function Header(props) {

    //Create a state hook, to store value of selected menu item
    const [selectedMenuVal, setSelectedMenuVal] = useState(0)
        
    //Boolean variable checks if screen size is smaller than medium 
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    //Create pages array
    const pages = mainMenu;

    return (
        <React.Fragment>
            <AppBar sx={{background: '#063970'}}>
                <Toolbar>
                    {/* Website Logo */}
                    <AbcIcon fontSize="large"></AbcIcon>

                    { 
                        isMatch ? (
                            <>
                                {/* Drawer Responsive */}
                                <DrawerComp menu={hamburgerMenu} sendDataToParent={props.sendDataToParent} />
                            </>
                        ) : (
                            <>
                                {/* Create a menu using Tabs component */}
                                <Tabs sx={{ fontWeight: "500", minWidth: "500px"}} value={selectedMenuVal} onChange={(e, value)=>{ setSelectedMenuVal(value)}} textColor="inherit" indicatorColor='primary'>
                                    {
                                        pages.map((page, index) => (
                                            <Tab label={page} key={index} onClick={() => { props.sendDataToParent(index) }} />        
                                        ))
                                    }                                    
                                </Tabs>                                           
                                {/* Create a wrapper grid aligned to right */ }
                                <Grid container justifyContent="flex-end">
                                    {/* Search  */}
                                    <SearchInput />
                                    {/* Login Button */}
                                    <Button variant='contained' sx={{marginLeft: "1.5ch"}}>Login</Button>
                                </Grid>
                            </>
                        )
                    }

                        
                </Toolbar>  
                    
            </AppBar>
        </React.Fragment>
    )
}

export default Header
