import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns} from './constants';

function AboutUs() {
    return (
        <div style={{ height: 400, width: '80%', margin: "0 auto" }}>
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
