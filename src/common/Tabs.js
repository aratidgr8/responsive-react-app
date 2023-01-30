import React from 'react';
import { Tab, Tabs } from '@mui/material'

function Tabs(props) {

    

    return (
        <Tabs sx={{ fontWeight: "500", minWidth: "500px"}} value={selectedMenuVal} onChange={(e, value)=>{ setSelectedMenuVal(value)}} textColor="inherit" indicatorColor='primary'>
            {
                pages.map((page, index) => (
                    <Tab label={page} key={index} onClick={() => { props.sendDataToParent(index) }} />        
                ))
            }                                    
        </Tabs> 
    )
}

export default Tabs;