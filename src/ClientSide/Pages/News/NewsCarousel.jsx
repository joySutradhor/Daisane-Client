import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import person2 from '../../../assets/images/news/person2.png';
import person3 from '../../../assets/images/news/person3.png';
import person4 from '../../../assets/images/news/person4.png';


const NewsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h5>Hello from carousel</h5>
            <Carousel responsive={responsive}>
                <div>
                    {/* card 1 */}
                    <div className="card mr-[83px] w-[485px] h-[660px] bg-base-100 shadow-xl">
                        <figure><img className='mb-[35px] object-cover' src={person2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 mb-[54px] text-[#7B7882] font-normal text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start">
                                <div className="badge">READ MORE</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* card 2 */}
                    <div className="card mr-[83px] w-[485px] h-[660px] bg-base-100 shadow-xl">
                        <figure><img className='mb-[35px] object-fill' src={person3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 mb-[54px] text-[#7B7882] text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start">
                                <div className="badge">READ MORE</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* card 3 */}
                    <div className="card w-[485px] h-[660px] bg-base-100 shadow-xl">
                        <figure><img className='mb-[35px] h-[352px]' src={person4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h5 className='title-2 mb-[25px] font-bold text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 mb-[54px] text-[#7B7882] text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start">
                                <div className="badge">READ MORE</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>Item 4</div>
            </Carousel>;
        </div>
    );
};

export default NewsCarousel;