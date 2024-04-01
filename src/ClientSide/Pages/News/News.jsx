
import fb from "/fb.png"
import x from "/x.png"
import linkedin from "/linkedin.png"

import hero from '/hero1.png';
// import './News.css';
// import Carousel from './NewsCarousel ';
// import NewsCarousel from './NewsCarousel';
import { Link } from 'react-router-dom';
import "./newsHero.css"
import Campaign from "./Campaign";
import NewsMain from "./NewsMain";


const News = () => {
    
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };

    return (
        <div >
           
            <div>
                <style>
                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                </style>
                <div className="relative 2xl:mb-[250px] xl:mb-[200px] mb-[60px] bg-[#12225D] xl:rounded-[44px] rounded-[15px]">
                    <div className="2xl:ml-[150px] xl:ml-[100px] ml-[25px] newsHeroLeft flex justify-between items-center ">
                        <div>
                            <h2 className="    2xl:text-[100px] xl:text-[60px] 2xl:leading-[90px] xl:mr-[133px] 2xl:mr-[176px] mr-[27px] text-white newsText md:text-[35px]" style={customFontStyle}>
                                News & Events
                            </h2>
                            <div className="xl:w-[289px] w-[80px] bg-[#D9D9D9] flex 2xl:mt-[327px]  xl:mt-[304px] mt-[74px] md:mt-0 xl:rounded-t-[24px] rounded-t-[10px] absolute bottom-[-2px] md:absolute md:bottom-0  newsSocail" >
                                <div className="flex xl:py-[22.5px] py-[5.64px] ">
                                    <Link to="https://www.facebook.com/ahdaisane?mibextid=LQQJ4d" target="_blank"><img className="xl:ml-[41px] ml-[14.36px]  mr-[10.3px] xl:mr-[39.13px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px]" src={fb} alt="" /></Link>
                                    <Link to="https://twitter.com/AbdiFor14A" target="_blank"><img className="xl:mr-[37.29px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[9.56px] " src={x} alt="x icon" /></Link>
                                    <Link to="https://www.linkedin.com/in/abdidaisane/" target="_blank"><img className="xl:mr-[48.04px] xl:h-[41.18px] xl:w-[41.18px] h-[10.56px] w-[10.56px] mr-[14.37px] " src={linkedin} alt="linkedin icon" /></Link>

                                </div>
                            </div>
                        </div>
                        <img className=" 2xl:w-[860px] 2xl:pt-[79px] xl:w-[657px] xl:pt-[63px]  md:w-[350px]  w-[193px]  object-cover xl:pr-[42px] 2xl:pr-[55px] newsImg " src={hero} alt="daisane hero image" />
                    </div>

                </div>
            </div>

            <Campaign></Campaign>
            <NewsMain></NewsMain>

        </div>
    );
};

export default News;