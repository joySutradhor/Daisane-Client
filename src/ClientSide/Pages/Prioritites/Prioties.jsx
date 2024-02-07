// import person from '../../../assets/images/priorities/person.png'
// import SubFooter from '../../Shared/SubFooter';
import './Priorities.css'

// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import { useState } from "react";
import PriotiesHero from './PriotiesHero';
import PriotitesAccordian from './PriotitesAccordian';


// eslint-disable-next-line react/prop-types
const Priorities = () => {
    // const [expanded, setExpanded] = useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // };


    return (
        <div >
            <PriotiesHero></PriotiesHero>
            <PriotitesAccordian></PriotitesAccordian>


            {/* <div className='mb-[250px]  px-[150px]'>
                <div className='flex'>
                    <div>
                        <img className='w-[626px] h-[890px]' src={person} alt="" />
                    </div>
              
                    <div className='w-[898px] ml-[96px]'>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"



                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Affordable Housing
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Housing is not just a commodity; it is a fundamental human right that lies at the core of a healthy and secure life, offering stability, dignity, and a profound sense of belonging.

                                        As someone who has experienced displacement as a refugee, I know too well the importance of stable housing.

                                        Whether we rent or own our homes, the importance of a secure and affordable place to live cannot be overstated. It is the foundation upon which we build our lives, raise our families, and actively contribute to our community.

                                        Despite the historic $1 billion investment spanning the entire housing spectrum, the largest appropriation in the state's history, many families in our community encounter significant hurdles in securing housing that aligns with their needs, budget, facilitates equity-building through homeownership, and fosters a strong sense of safety.

                                        As your State Representative, I will:

                                        • Advocate for an increase in state bonding dollars to augment the overall housing investment across the state.

                                        • Collaborate with renters to ensure equitable treatment by landlords and enforce existing legal protections.

                                        • Foster more public-private partnerships to facilitate the development of additional affordable housing, coupled with the implementation of new rent control measures in Saint Cloud.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className='text-white accordion-title' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>Invest in Education</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                        laoreet.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Early Childhood Education
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Supporting Small Businesses
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Climate Justice
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel6bh-content"
                                    id="panel6bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Healthcare
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel7bh-content"
                                    id="panel7bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Reproductive Rights
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    sx={{ backgroundColor: '#12225D', height: '136px' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel8bh-content"
                                    id="panel8bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Public Safety
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>

            </div> */}
            {/* <SubFooter></SubFooter> */}



        </div>
    );
};

export default Priorities;