
import fb from "/fb.png"
import x from "/x.png"
import linkedin from "/linkedin.png"
import heroThree from '/hero3.png';
import "./Endorsements.css"
import { Link } from "react-router-dom";

const Endorsements = () => {

    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };


    return (
        <div>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div className="2xl:mb-[250px] xl:mb-[200px] bg-[#12225D] rounded-[44px]">
                <div className="2xl:ml-[150px] xl:ml-[100px] flex ">
                    <div>
                        <h2 className="2xl:w-[554px] 2xl:pt-[327px] xl:pt-[304px] 2xl:text-[100px] xl:text-[60px] 2xl:leading-[90px] xl:mr-[171px] 2xl:mr-[176px] text-white endroText" style={customFontStyle}>
                            Endorsements
                        </h2>
                        <div className="xl:w-[289px] bg-[#D9D9D9] flex 2xl:mt-[327px] xl:mt-[304px]  rounded-t-[24px] endroSocail" >
                            <div className="flex py-[22.5px]  ">
                            <Link to="https://www.facebook.com/ahdaisane?mibextid=LQQJ4d" target="_blank"><img className="ml-[41px] mr-[39.13px] h-[41.18px] w-[41.18px]" src={fb} alt="" /></Link>
                                <img className="mr-[37.29px] h-[41.18px] w-[41.18px] " src={x} alt="" />
                                <img className="mr-[48.04px] h-[41.18px] w-[41.18px] " src={linkedin} alt="" />

                            </div>
                        </div>
                    </div>
                    <img className=" 2xl:w-[985px] xl:w-[837px]   object-cover pr-[55px] endroImg " src={heroThree} alt="daisane hero image" />
                </div>

            </div>
        </div>
    );
};

export default Endorsements;