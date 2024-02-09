// import { useState } from "react";
// import './Footer.css';
// import { Link } from "react-router-dom";
// // import './SubFooter.css';

// const SubFooter = () => {
//     // const email = 'daisaneformn@gmail.com';
//     const [userName, setUserName] = useState('');

//     const handleInputChange = (e) => {
//         setUserName(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // You can perform any action with the username here, e.g., send it to a server or store it in state
//         console.log('Username submitted:', userName);
//     };
//     return (
//         <div>
//             <div className="main-container flex items-center bg-[#122362] px-[150px] mb-[250px] rounded-3xl">
//                 <div className="py-[335px]">
//                     <h5 className="contribute text-white text-[40px] font-bold">Contribute to support Abdi Daisane</h5>
//                     <h5 className="make-donation text-white font-bold text-[100px]">Make a <br /> donation today!</h5>

//                 </div>
//                 <div className="py-[158px] ml-[180px]">
//                     {/* <div className="w-[443px] h-[93px] mb-[60px] bg-[#d9d9d9] flex justify-center items-center rounded-lg">
//                         <div className="btn-group text-white">
//                             <button className="text-white monthly font-bold text-xl">Monthly</button>
//                             <button className="one-time font-bold text-xl block " style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>One Time</button>
//                         </div>
//                     </div> */}
//                     <h5 className="select-amount text-white  font-extrabold text-2xl mb-9">Select amount (in us dollar)</h5>
//                     <div className="amount-button text-white text-xl font-bold mb-[35px]">
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=25" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 25</button></Link>
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=50" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 50</button></Link>
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=100" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 100</button></Link>
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=250" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 250</button></Link>
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=500" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 500</button></Link>
//                         <Link to="https://secure.actblue.com/donate/daisaneformn?amount=1000" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 1000</button></Link>

//                         <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank"> <button className="option border border-gray-50 py-5 px-9 rounded-xl ">others</button>
//                         </Link>
//                     </div>
//                     <div className="mb-[53px]">
//                         <div className="tacbox text-white text-[25px]">
//                             {/* <input id="checkbox" type="checkbox" /> */}

//                             {/* <label htmlFor="checkbox"> I understand and comply to the <a href="#">terms and conditions laid out</a>.</label> */}
//                             {/* <label htmlFor="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label> */}
//                         </div>
//                     </div>
//                     <div>
//                         {/* <h5 className="name  text-white font-bold text-[25px] mb-[25px]">Name</h5> */}
//                         <form onSubmit={handleSubmit}>
//                             <label>

//                                 {/* <input className="w-[707px] text-white outline-none  py-[38.5px] pl-[25px] h-[97px] border border-white mb-[60px] rounded rounded-lg bg-[#12225D]" placeholder="Enter your name" type="text  " value={userName} onChange={handleInputChange} /> */}
//                             </label>
//                             <br />
//                             {/* <button className="donate-button w-[269px] font-bold bg-[#D9D9D9] rounded rounded-3xl text-[#12225D] text-[25px] px-[45px] py-[30px]" type="submit">DONATE NOW</button> */}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubFooter;