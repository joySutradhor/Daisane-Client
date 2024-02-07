import { useState } from 'react';
import  pSide  from '/pSide.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const PriotitesAccordian = () => {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (accordionNumber) => {
        setOpenAccordion(accordionNumber === openAccordion ? 0 : accordionNumber);
    };

    return (
        <div className='lR xl:flex gap-x-[96px]'>
            <div>
                <img src={pSide} alt=""  />
            </div>
            <div className='w-[500px]'>
                <div className="border rounded my-2 ">
                    <div
                        className="flex items-center justify-between p-4 cursor-pointer bg-gray-200"
                        onClick={() => toggleAccordion(1)}
                    >
                        <h6 className="text-lg font-semibold">Accordion Title 1</h6>
                        <span className={`transform ${openAccordion === 1 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                           <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                        </span>
                    </div>
                    {openAccordion === 1 && (
                        <div className="p-4 bg-gray-100">
                            <p className="text-sm">Accordion Content 1 goes here.</p>
                        </div>
                    )}
                </div>

                <div className="border rounded my-2">
                    <div
                        className="flex items-center justify-between p-4 cursor-pointer bg-[#12225D]"
                        onClick={() => toggleAccordion(2)}
                    >
                        <h6 className="text-lg font-semibold">Accordion Title 2</h6>
                        <span className={`transform ${openAccordion === 2 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            &#9660;
                        </span>
                    </div>
                    {openAccordion === 2 && (
                        <div className="p-4 bg-gray-100">
                            <p className="text-sm">Accordion Content 2 goes here.</p>
                        </div>
                    )}
                </div>

                <div className="border rounded my-2">
                    <div
                        className="flex items-center justify-between p-4 cursor-pointer bg-gray-200"
                        onClick={() => toggleAccordion(3)}
                    >
                        <h6 className="text-lg font-semibold">Accordion Title 3</h6>
                        <span className={`transform ${openAccordion === 3 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            &#9660;
                        </span>
                    </div>
                    {openAccordion === 3 && (
                        <div className="p-4 bg-gray-100">
                            <p className="text-sm">Accordion Content 3 goes here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PriotitesAccordian;
