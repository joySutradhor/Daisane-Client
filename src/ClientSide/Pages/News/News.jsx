import line1 from '../../../assets/images/news/line1.png';
import person from '../../../assets/images/news/person.png';
import fb from "/fb.png"
import x from "/x.png"
import linkedin from "/linkedin.png"
import googlePlus from "/googlePlus.png"
import heroThree from '/hero3.png';
import './News.css';
// import Carousel from './NewsCarousel ';
import NewsCarousel from './NewsCarousel';

const News = () => {
    return (
        <div className=' mb-[250px]'>
            {/* endrosments */}

            <div>
                <div className="2xl:mb-[250px] bg-[#12225D] 2xl:rounded-[44px]">
                    <div className="2xl:ml-[150px] flex ">
                        <div>
                            <h2 className="2xl:w-[554px] 2xl:py-[327px] 2xl:leading-[90px] 2xl:mr-[176px] text-white">
                                News
                            </h2>
                            <div className="2xl:w-[453px] bg-[#D9D9D9] flex   2xl:rounded-t-[24px]" >
                                <div className="flex py-[22.5px] px-[86px]">
                                    <img className="mr-[39.13px]" src={fb} alt="" />
                                    <img className="mr-[37.29px]" src={x} alt="" />
                                    <img className="mr-[39.79px]" src={linkedin} alt="" />
                                    <img src={googlePlus} alt="" />
                                </div>
                            </div>
                        </div>
                        <img className=" 2xl:w-[961px] object-cover  " src={heroThree} alt="daisane hero image" />
                    </div>

                </div>
            </div>
            {/* /////////////////// */}



            <div className='px-[150px]'>
                <img src={line1} alt="" />
                <div className='py-[60px] flex'>
                    <div>
                        <img src={person} alt="" />
                    </div>
                    <div className='ml-[96px] text-black'>
                        <h5 className='title font-bold text-[40px] mb-[35px]'>Campaign kickoff for Abdi Daisane for Minnesota House 14A</h5>
                        <h5 className='address text-black text-[25px] mb-[8px]'><span className='font-bold'>Address:</span> Capital Event Center at 3123
                            Roosevelt Rd,
                            St. Cloud 56301.</h5>
                        <h5 className='address text-black text-[25px] mb-[8px]'><span className='font-bold'>Date:</span> Jan 5th,2024</h5>
                        <h5 className='address text-black text-[25px]'><span className='font-bold'>Time:</span> 6:00 Pm</h5>
                    </div>
                </div>
                <img className='mb-[250px]' src={line1} alt="" />

                <div>
                    <h5 className='news-title mb-[100px] text-[#12225D] font-bold text-[80px] flex justify-center'>News</h5>
                    <NewsCarousel></NewsCarousel>
                    {/* card */}
                    {/* <div className='flex'> */}
                    {/* card 1 */}
                    {/* <div className="card mr-[83px] w-[485px] h-[660px] bg-base-100 shadow-xl">
                            <figure><img className='mb-[35px] object-cover' src={person2} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                                <h5 className='title-3 mb-[54px] text-[#7B7882] font-normal text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                                <div className="card-actions justify-start">
                                    <div className="badge">READ MORE</div>

                                </div>
                            </div>
                        </div> */}

                    {/* card 2 */}
                    {/* <div className="card mr-[83px] w-[485px] h-[660px] bg-base-100 shadow-xl">
                        <figure><img className='mb-[35px] object-fill' src={person3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 mb-[54px] text-[#7B7882] text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start">
                                <div className="badge">READ MORE</div>

                            </div>
                        </div>
                    </div> */}
                    {/* card 3 */}
                    {/* <div className="card w-[485px] h-[660px] bg-base-100 shadow-xl">
                            <figure><img className='mb-[35px] h-[352px]' src={person4} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                                <h5 className='title-3 mb-[54px] text-[#7B7882] text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                                <div className="card-actions justify-start">
                                    <div className="badge">READ MORE</div>

                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>

        </div>
    );
};

export default News;