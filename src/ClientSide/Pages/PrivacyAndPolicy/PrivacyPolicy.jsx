/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };
    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    return (
        <div className="main-container px-[150px]">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div className="mb-[50px]">
                <h5 style={customFontStyle} className="text-[#12225D] text-[42px] font-bold mb-5">PRIVACY POLICY</h5>
                <h5 style={poppinsFontStyle} className="text-[14px] mb-[28px] text-[#000219]">At Abdi Daisane for State Representative, we prioritize the confidentiality and protection of the information you entrust with us online. While our website does have links to a few other sites, we don’t hold responsibility for their content or privacy guidelines. We advise you to familiarize yourself with the privacy statements of each site you visit. From time to time, we might modify our privacy guidelines in line with updates to our site.</h5>
            </div>

            <div className="mb-[20px]">
                <h5 style={customFontStyle} className="text-[#12225D] mb-[14px] text-[25px] font-bold">How do we handle the information you share?</h5>
                <h5 style={poppinsFontStyle} className="text-[#000219] mb-[14.4px] text-[14.4px]">Your e-mail will be utilized to send updates and news regarding Abdi Daisane for State Representative. Additionally, based on your zip code and state, we might send you notifications about upcoming events or initiatives nearby. The details you share might also be used to get in touch with you for various reasons, including asking for contributions. Upon registering or signing up, we may share your details with Democratic candidates and organizations with similar values, and they might reach out to you. Rest assured, your credit card details are off-limits for selling or exchanging with third parties. Any data related to text messaging consents won’t be distributed to third parties either.

                </h5>
            </div>

            <div className="mb-[20px]">
                <h5 style={customFontStyle} className="text-[#12225D] mb-[14px] text-[25px] font-bold">Concerning online donations:
                </h5>
                <h5 style={poppinsFontStyle} className="text-[#000219] mb-[14.4px] text-[14.4px]">Federal regulations mandate us to gather and disclose to the Federal Election Commission certain details, such as name, address, occupation, and employer, of donors who contribute more than $200 within an election period. This information is public but isn’t up for grabs for other entities’ fundraising purposes. More details can be found at the FEC website at <Link to='http://www.fec.gov' target="_blank">http://www.fec.gov</Link>.



                </h5>
            </div>
            <div className="mb-[20px]">
                <h5 style={customFontStyle} className="text-[#12225D] mb-[14px] text-[25px] font-bold">When you endorse one of our petitions:
                </h5>
                <h5 style={poppinsFontStyle} className="text-[#000219] mb-[14.4px] text-[14.4px]">Your name, city, state, and remarks are considered open information. Such details might be compiled and presented to key figures, minus the e-mail addresses. Your comments, along with your city and state, might also be shared with media and online audiences.
                </h5>
            </div>

            <div className="mb-[20px]">
                <h5 style={customFontStyle} className="text-[#12225D] mb-[14px] text-[25px] font-bold">Children's Information:

                </h5>
                <h5 style={poppinsFontStyle} className="text-[#000219] mb-[14.4px] text-[14.4px]">Child safety and privacy online are crucial to us, and in line with this, we adhere to the Children’s Online Privacy Protection Act of 1998 (COPPA). We make a conscious effort not to collect data from children below 13. Our platforms are designed to prevent the intentional gathering of data from children under this age. Concerned parents can reach out to us through e-mail.


                </h5>
            </div>
            <div className="mb-[20px]">
                <h5 style={customFontStyle} className="text-[#12225D] mb-[14px] text-[25px] font-bold">Opting out of E-mail Updates:


                </h5>
                <h5 style={poppinsFontStyle} className="text-[#000219] mb-[14.4px] text-[14.4px]">If you decide you no longer want our e-mails, kindly inform us via e-mail. We’ll act on such requests promptly. However, due to federal election mandates, we will keep a record of our contributors in a distinct, secure database. Should you have inquiries about our privacy measures, or if you want to rectify any information you’ve provided, or if you have concerns about this website, please get in touch.




                </h5>
            </div>
        </div>
    );
};

export default PrivacyPolicy;