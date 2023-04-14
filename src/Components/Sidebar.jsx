// import React, { useState } from 'react'
import LOGO from "../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineReportProblem } from 'react-icons/md';
import { HiBell, HiDocumentReport, HiDocumentText, HiInformationCircle, HiOutlineUser, HiOutlineVideoCamera, HiUserAdd ,  } from 'react-icons/hi';

const Sidebar = ({children}) => {
    // const[isOpen ,setIsOpen] = useState(false);
    // const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<RxDashboard />
        },
        {
            path:"/WowUsers",
            name:"Wow Users",
            icon:<HiOutlineUser />
        },
        {
            path:"/VideoClips",
            name:"Video Clips",
            icon:<HiOutlineVideoCamera />
        },
        {
            path:"/ReportedContent",
            name:"Reported Content",
            icon:<MdOutlineReportProblem />
        },
        {
            path:"/Category",
            name:"Category",
            icon:<HiDocumentReport />
        },
        {
            path:"/InfoPage",
            name:"Info Page",
            icon:<HiInformationCircle />
        },
        {
            path:"/Faq",
            name:"FAQ",
            icon:<HiDocumentText />
        },
        {
            path:"/PushNotification",
            name:"Push Notification",
            icon:<HiBell />
        },
        {
            path:"/InternalUser",
            name:"Internal User",
            icon:<HiUserAdd />
        },
        {
            path:"/ExplicitContent",
            name:"Explicit Content",
            icon:<HiUserAdd />
        },
        {
            path:"/FeedbackMessages",
            name:"Feedback Messages",
            icon:<HiUserAdd />
        },
        {
            path:"/Kyx",
            name:"KYC",
            icon:<HiUserAdd />
        },
        {
            path:"/CoinWithdrawal",
            name:"Coin Withdrawal Request",
            icon:<HiUserAdd />
        },
        {
            path:"/CoinPurchased",
            name:"Coin Purchased",
            icon:<HiUserAdd />
        },
        {
            path:"/CoinTransfer",
            name:"Coin Transfer History",
            icon:<HiUserAdd />
        },
        {
            path:"/CoinEarning",
            name:"Coin Earning History",
            icon:<HiUserAdd />
        },
        {
            path:"/UsersDeleted",
            name:"Users Deleted",
            icon:<HiUserAdd />
        },
        {
            path:"/UsersFeedbacks",
            name:"Users Feedbacks",
            icon:<HiUserAdd />
        },
    ]
  return (
    <div className="container">
           <div  className="sidebar">
               <div className="top_section">
                   <img src={LOGO} alt='logo' className="logo" />
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
  )
}

export default Sidebar