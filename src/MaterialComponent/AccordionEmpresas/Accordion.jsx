import * as React from 'react';
import './Accordion.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
    return (
        <div>
            <Accordion style={{width: '100%'}} className='accordion-container'>
                <AccordionSummary
                    style={{ backgroundColor: "#2EA49E" }}
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>Minha empresa pode publicar quantas vagas quiser?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize: "17px"}}>
                        Sim! A empresa pode divulgar quantas vagas achar necessária.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                style={{backgroundColor:"#2EA49E"}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>As vagas são publicadas gratuitamente?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        Sim, no <strong style={{color: "#59CAC3"}}>TalentoAgora</strong> você pode publicar vagas de graça!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                style={{backgroundColor:"#2EA49E"}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>Quais são os benefícios de usar a plataforma para publicar vagas?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        Nossa plataforma oferece ampla visibilidade para suas vagas, com diversos candidatos acessando a plataforma diariamente.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                style={{backgroundColor:"#2EA49E"}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>Como posso publicar uma vaga de emprego?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        Basta clicar no botão "Publicar vaga", preencher as informações obrigatórias que toda vaga deve conter e a vaga estará publicada, aguardando os candidatos :)
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                style={{backgroundColor:"#2EA49E"}}
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>Como posso definir os critérios de seleção para uma vaga?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        Na seção de publicação de vagas, você pode adicionar critérios específicos de seleção, como nível de experiência, habilidades necessárias e qualificações. Isso ajudará a filtrar os candidatos mais adequados.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
