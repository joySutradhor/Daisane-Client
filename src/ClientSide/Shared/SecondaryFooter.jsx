import { Link } from "react-router-dom";
import "./secondaryFooter.css"


const SecondaryFooter = () => {
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    return (
        <div className=" 2xl:mb-[250px] xl:mb-[200px] mb-[60px] bg-[#12225D] xl:rounded-[44px] rounded-[20px]">
            <style> {`
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap') `}
            </style>

            <div className="lR FooterSpace grid md:grid-cols-2 grid-cols-1 items-center 2xl:h-[600px] xl:h-[500px] h-[250px]">
                <div>
                    <h3 className="secondaraySubText  " style={poppinsFontStyle}>Contribute to support Abdi Daisane</h3>
                    <h4 className="secondarayHeadText" style={customFontStyle}>Make a donation today!</h4>
                </div>
                <div className="2xl:ml-[179px] xl:ml-[113px]">
                    <h4 className="secondarySideText" style={poppinsFontStyle}>Select amount (in US Dollar)</h4>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=25" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px] ">$ 25</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=50" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px]">$ 50</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=100" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px]">$ 100</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=250" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px]">$ 250</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=500" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px]">$ 500</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn?amount=1000" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px]">$ 1000</button></Link>
                    <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank"> <button className="secondaryBtn 2xl:mr-[15px] xl:mr-[10px] mr-[3px] xl:mt-[25px] mt-[10px]">others</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecondaryFooter;