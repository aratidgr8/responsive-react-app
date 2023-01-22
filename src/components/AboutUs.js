import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from '../common/constants';
import { Typography } from '@mui/material';

function AboutUs() {
    return (
        <div style={{ height: 400, width: '80%', margin: "0 auto" }}>
        <Typography sx={{fontSize: "1.5rem", fontWeight: "bold", margin: "20px 0"}}>
            Game Of Thrones Characters & Tittles
        </Typography>    
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    )
}

export default AboutUs
