import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    style={{ backgroundColor: "#2EA49E" }}
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color: 'white', fontSize: '18px'}}>Qual é o propósito do TalentoAgora?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize: "17px"}}>
                        Serve para os estudantes/formados em programação conseguirem entrar no mercado de trabalho.
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
                    <Typography style={{color: 'white', fontSize: '18px'}}>Quais são os tipos de vagas disponíveis?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        No <strong style={{color: "#59CAC3"}}>TalentoAgora</strong>, terão vagas somente para estágios e para desenvolvedores júnior.
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
                    <Typography style={{color: 'white', fontSize: '18px'}}>Existem vagas remotas, híbridas ou presenciais?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        No <strong style={{color: "#59CAC3"}}>TalentoAgora</strong>, terão vagas com os três modelos de trabalho: presencial, remoto e híbrido :)
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
                    <Typography style={{color: 'white', fontSize: '18px'}}>Terá como eu ver os detalhes de uma vaga específica?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{fontSize:"17px"}}>
                        Sim! O candidato terá como ver os detalhes da vaga, como: salário, se é CLT ou PJ, entre outras coisas.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
