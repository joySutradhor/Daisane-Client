
import camp from "/cmapaign.png"
import carousel2 from "/carousel2.png"
import carousel3 from "/carousel3.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./newsMain.css"

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function NewsMain() {
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <>
            <div className="lR newsCardLeftRight 2xl:mt-[250px] 2xl:mb-[250px] xl:mt-[200px] xl:mb-[200px] mb-[60px] mt-[60px] ">
                <div>
                    <h3 className="2xl:text-[80px] xl:text-[60px] 2xl:mb-[100px] xl:mb-[80px] mb-[25px] font-bold xl:leading-[80px] xl:text-center text-[#12225D]" style={customFontStyle}>NEWS</h3>
                </div>
                <div className="hidden lg:block">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <div className='xl:flex '>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg ">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={camp} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] cardMainText" style={customFontStyle}>Abdi Daisane: Entrepreneurial work for the community good</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h4>
                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop">
                                            <Link to="https://www.sctimes.com/story/money/business/2021/01/16/5-under-40-abdi-daisane-entrepreneurial-work-community-good/3895944001/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px]  2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel2} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] cardMainText" style={customFontStyle}>Eight Selected for the Minnesota Young American Leaders Program</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>(KNSI) — Eight young professionals from around the St. Cloud area have been selected for the 2023.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop">
                                            <Link to="https://knsiradio.com/2023/02/17/371772/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard  " src={carousel3} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:px-[15px] 2xl:pb-[25px] 2xl:px-[20px] cardMainText" style={customFontStyle}>Rural Minnesota facing child-care deserts as pandemic makes bad situation worse</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px]  2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara " style={poppinsFontStyle}>In recent months, Daisane’s Blooming Kids Child Care Center in St. Cloud has averaged about </h4>
                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop ">
                                           <Link to="https://m.startribune.com/rural-minnesota-facing-child-care-deserts-as-pandemic-makes-bad-situation-worse/600028922/" target="_blank"> <button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='xl:flex '>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg ">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={camp} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] cardMainText" style={customFontStyle}>Abdi Daisane: Entrepreneurial work for the community good</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h4>
                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop">
                                            <Link to="https://www.sctimes.com/story/money/business/2021/01/16/5-under-40-abdi-daisane-entrepreneurial-work-community-good/3895944001/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px]  2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel2} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] cardMainText" style={customFontStyle}>Eight Selected for the Minnesota Young American Leaders Program</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>(KNSI) — Eight young professionals from around the St. Cloud area have been selected for the 2023.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop">
                                            <Link to="https://knsiradio.com/2023/02/17/371772/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard  " src={carousel3} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:px-[15px] 2xl:pb-[25px] 2xl:px-[20px] cardMainText" style={customFontStyle}>Rural Minnesota facing child-care deserts as pandemic makes bad situation worse</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px]  2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara " style={poppinsFontStyle}>In recent months, Daisane’s Blooming Kids Child Care Center in St. Cloud has averaged about </h4>
                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] cardTop ">
                                           <Link to="https://m.startribune.com/rural-minnesota-facing-child-care-deserts-as-pandemic-makes-bad-situation-worse/600028922/" target="_blank"> <button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>

                {/* for mobile */}
                <div className="block lg:hidden sm:hidden">
                    <Swiper
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <style>
                                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                </style>

                                <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] mb-[60px] xl:mb-[57px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg ">
                                    <img className="2xl:w-[485px] xl:w-[380px] w-[310px] h-[249px]  xl:h-[276px] 2xl:h-[352px] object-cover mainCard newsCardImg rounded-[6px] " src={camp} alt="" />

                                    <h3 className="2xl:text-[25px] xl:text-[20px] text-[14px] leading-[17px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] pt-[15px] xl:pb-[15px] xl:pl-[15px] pl-[10px] 2xl:pb-[25px] 2xl:pl-[20px] pb-[15px] cardMainText" style={customFontStyle}>Abdi Daisane: Entrepreneurial work for the community good</h3>

                                    <h4 className="2xl:text-[25px] xl:text-[18px] text-[14px] leading-[13px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] px-[10px] text-[#7B7882] cardPara" style={poppinsFontStyle}>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h4>
                                    
                                    <div className="2xl:pb-[28px] xl:pb-[15px] pb-[13.26px] 2xl:pt-[47px] xl:pt-[30px] pt-[104px] cardTop">
                                        <Link to="https://www.sctimes.com/story/money/business/2021/01/16/5-under-40-abdi-daisane-entrepreneurial-work-community-good/3895944001/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px]  xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] mb-[2.72px] xl:ml-[15px] 2xl:ml-[20px] ml-[10px]  border-b-[1px] border-[#12225D] text-[8px] leading-[8px] ">READ MORE</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <style>
                                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                </style>

                                <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg ">
                                    <img className="2xl:w-[485px] xl:w-[380px] w-[310px] h-[249px]  xl:h-[276px] 2xl:h-[352px] object-cover mainCard newsCardImg rounded-[6px] " src={carousel2} alt="" />
                                    <h3 className="2xl:text-[25px] xl:text-[20px] text-[14px] leading-[17px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] pt-[15px] xl:pb-[15px] xl:pl-[15px] pl-[10px] 2xl:pb-[25px] 2xl:pl-[20px] pb-[15px] cardMainText" style={customFontStyle}>Eight Selected for the Minnesota Young American Leaders Program</h3>
                                    <h4 className="2xl:text-[25px] xl:text-[18px] text-[14px] leading-[13px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] px-[10px] text-[#7B7882] cardPara" style={poppinsFontStyle}>(KNSI) — Eight young professionals from around the St. Cloud area have been selected for the 2023</h4>
                                    <div className="2xl:pb-[28px] xl:pb-[15px] pb-[13.26px] 2xl:pt-[47px] xl:pt-[30px] pt-[104px] cardTop">
                                        <Link to="https://knsiradio.com/2023/02/17/371772/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px]  xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] mb-[2.72px] xl:ml-[15px] 2xl:ml-[20px] ml-[10px]  border-b-[1px] border-[#12225D] text-[8px] leading-[8px]">READ MORE</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <style>
                                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                </style>

                                <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg ">
                                    <img className="2xl:w-[485px] xl:w-[380px] w-[310px] h-[249px]  xl:h-[276px] 2xl:h-[352px] object-cover mainCard newsCardImg rounded-[6px]" src={carousel3} alt="" />
                                    <h3 className="2xl:text-[25px] xl:text-[20px] text-[14px] leading-[17px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] pt-[15px] xl:pb-[15px] xl:pl-[15px] pl-[10px] 2xl:pb-[25px] 2xl:pl-[20px] pb-[15px] cardMainText" style={customFontStyle}>Rural Minnesota facing child-care deserts as pandemic makes bad situation worse</h3>
                                    <h4 className="2xl:text-[25px] xl:text-[18px] text-[14px] leading-[13px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] px-[10px] text-[#7B7882] cardPara" style={poppinsFontStyle}>In recent months, Daisane’s Blooming Kids Child Care Center in St. Cloud has averaged about 30.</h4>
                                    <div className="2xl:pb-[28px] xl:pb-[15px] pb-[13.26px] 2xl:pt-[47px] xl:pt-[30px] pt-[104px] cardTop">
                                       <Link to="https://m.startribune.com/rural-minnesota-facing-child-care-deserts-as-pandemic-makes-bad-situation-worse/600028922/" target="_blank"> <button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px]  xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] mb-[2.72px] xl:ml-[15px] 2xl:ml-[20px] ml-[10px] border-b-[1px] border-[#12225D] text-[8px] leading-[8px]">READ MORE</button></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </div>




                {/* for tablet */}
                <div className="sm:block hidden  lg:hidden">
                    <Swiper
                        pagination={{
                            dynamicBullets: false,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                          <SwiperSlide>
                            <div className='md:flex '>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                
                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={camp} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Abdi Daisane: Entrepreneurial work for the community good</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://www.sctimes.com/story/money/business/2021/01/16/5-under-40-abdi-daisane-entrepreneurial-work-community-good/3895944001/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:px-[15px] lg:px-0">
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel2} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Eight Selected for the Minnesota Young American Leaders Program</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>(KNSI) — Eight young professionals from around the St. Cloud area have been selected for the 2023.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://knsiradio.com/2023/02/17/371772/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                     <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel3} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Rural Minnesota facing child-care deserts as pandemic makes bad situation worse</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>In recent months, Daisane’s Blooming Kids Child Care Center in St. Cloud has averaged about</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://m.startribune.com/rural-minnesota-facing-child-care-deserts-as-pandemic-makes-bad-situation-worse/600028922/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:flex '>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                
                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={camp} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Abdi Daisane: Entrepreneurial work for the community good</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://www.sctimes.com/story/money/business/2021/01/16/5-under-40-abdi-daisane-entrepreneurial-work-community-good/3895944001/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:px-[15px] lg:px-0">
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                    <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel2} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Eight Selected for the Minnesota Young American Leaders Program</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>(KNSI) — Eight young professionals from around the St. Cloud area have been selected for the 2023.</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://knsiradio.com/2023/02/17/371772/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <style>
                                        {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                                    </style>

                                     <div className="2xl:w-[485px] xl:w-[380px] newCardGap 2xl:mb-[70px] xl:mb-[57px] md:mb-[70px] 2xl:mr-[82px] xl:mr-[65px] cardGap cardGapRight  shadow-lg">
                                        <img className="2xl:w-[485px] xl:w-[380px] xl:h-[276px] 2xl:h-[352px] object-cover mainCard " src={carousel3} alt="" />
                                        <h3 className="2xl:text-[25px] xl:text-[20px] xl:leading-[28px] 2xl:leading-[28px] font-bold 2xl:pt-[35px] xl:pt-[20px] xl:pb-[15px] xl:pl-[15px] 2xl:pb-[25px] 2xl:pl-[20px] md:pt-[15px] md:pb-[15px] md:pl-[5px] cardMainText" style={customFontStyle}>Rural Minnesota facing child-care deserts as pandemic makes bad situation worse</h3>
                                        <h4 className="2xl:text-[25px] xl:text-[18px] xl:leading-[25px] 2xl:leading-[30px] font-normal text-justify  2xl:px-[20px] xl:px-[15px] text-[#7B7882] cardPara" style={poppinsFontStyle}>In recent months, Daisane’s Blooming Kids Child Care Center in St. Cloud has averaged about</h4>

                                        <div className="2xl:pb-[28px] xl:pb-[15px] 2xl:pt-[47px] xl:pt-[30px] md:pb-[15px]  cardTop">
                                            <Link to="https://m.startribune.com/rural-minnesota-facing-child-care-deserts-as-pandemic-makes-bad-situation-worse/600028922/" target="_blank"><button className="text-[#12225D] 2xl:text-[15px] xl:text-[12px] xl:leading-[15px] 2xl:leading-[22.5px] xl:mb-[5px] 2xl:mb-[8px] xl:ml-[15px] 2xl:ml-[20px] md:ml-[5px]  border-b-[1px] border-[#12225D]">READ MORE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        



                    </Swiper>
                </div>
            </div>

        </>
    );
}
