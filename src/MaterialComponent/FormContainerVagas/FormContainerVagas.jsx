import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CurrencyInput from 'react-currency-input-field';
import './FormContainerVagas.css'
import { TextareaAutosize } from '@mui/material';



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

            <div style={{ marginTop: '100px', fontSize: '25px' }}>
                <h3>Sobre a empresa</h3>
            </div>
            <div className='inputs-sobre-empresa'>

                <TextField required id="outlined-text" placeholder='Nome da empresa' label="Nome da empresa" type="text" />


                <TextField required id="outlined-text" placeholder='E-mail da empresa' label="E-mail da empresa" type="text" />

                <TextField required id="outlined-text" placeholder='Site da empresa' label="Site da empresa" type="text" />
            </div>

            <div style={{ fontSize: '25px' }}>
                <h3>Sobre a vaga</h3>
            </div>
            <div className='inputs-sobre-vaga'>

                <TextField required id="outlined-text" placeholder='Url da vaga' label="Url da vaga" type="text" />

                <FormControl style={{ gap: '0.9em' }} sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Modo da vaga</InputLabel>
                    <Select
                    required
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>Nenhuma</em>
                        </MenuItem>
                        <MenuItem >100% remoto</MenuItem>
                        <MenuItem >Híbrida</MenuItem>
                        <MenuItem >Presencial</MenuItem>
                    </Select>

                    <div className='div-valor'>

                        <span>Salário</span>
                        <CurrencyInput
                            required
                            name="salary"
                            placeholder="R$ 0,00"
                            decimalsLimit={2}
                            prefix="R$ "
                            className='input-valor-salario'
                        />
                    </div>
                    <TextareaAutosize
                    aria-label="minimum height"
                    required
                    minRows={6}
                    placeholder="Descrição da vaga"
                    style={{ width: '100%', padding: '10px', height: '10px', outline: 'none', border: '1px solid #c4c4c4;' }} 
                />
                </FormControl>

                
                

                


            </div>

        </Box>
    );
}
