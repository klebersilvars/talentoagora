import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './FormContainerVagas.css'

export default function FormContainerVagas() {
    return (
        <Box
            component="form"
            className='box-inputs'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <div style={{ marginTop: '30px', fontSize: '25px' }}>
                <h3>Sobre a empresa</h3>
            </div>
            <div className='inputs'>

                <TextField id="outlined-text" placeholder='Nome da empresa' label="Nome da empresa" type="text" />


                <TextField id="outlined-text" placeholder='E-mail da empresa' label="E-mail da empresa" type="text" />

                <TextField id="outlined-text" placeholder='Site da empresa' label="Site da empresa" type="text" />
            </div>

            <div style={{fontSize: '25px' }}>
                <h3>Sobre a vaga</h3>
            </div>

        </Box>
    );
}
