import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from "react";
import WebsiteFooter from "../../component/websiteFooter";
import WebsiteHeader from "../../component/websiteHeader";
import "./styles.scss";
import Car from "../../asset/image/image 18.png";
import CarSeat from "../../asset/image/image 17.png";
import Logo from "../../asset/image/path4.png";
import { Carousel } from "antd";
function HomeScreen() {
  return (
    <div className="homeScreen-Box1">
      
      <div className="homeScreen-Box2">
     <div>
     
        
          
          <Carousel autoplay dotPosition="right" effect="fade">
          
            <div>
            
              <img className="homeScreen-carousalImg" src={Car} alt="" />
            </div>
            <div>
              <img className="homeScreen-carousalImg" src={CarSeat} alt="" />
            </div>
          </Carousel>
        
        <div className="homeScreen-Box3">
        <WebsiteHeader/>
          <div className="homeScreen-Box4">
          
            <img className="homeScrn-Logo" src={Logo} alt="" />
          </div>
          <div className="homeScreen-Txt1">Redefining Identity</div>
        </div>
        
      </div>
      </div>
      <WebsiteFooter />
    </div>
  );
}

export default HomeScreen;




import React ,{ useState } from "react";
import "./styles.scss";
import logos from "../../asset/image/Fabro_logo.png.png"
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FaShoppingCart } from 'react-icons/fa';
import {  Drawer } from 'antd';
import { SlMenu } from "react-icons/sl";

function WebsiteHeader(){
  const [open, setOpen] = useState(false);
  return(
 <> 
<div className="WebsiteHeader-Box1">
   <div className="WebsiteHeader-Box2">
   <img className="logo" src={ logos } alt="" /> 
   </div>
   <div className="WebsiteHeader-Box3">
      <div className=" WebsiteHeader-Box4">
        <button className="button">
      <Button className="search-button"   icon={<SearchOutlined />} />
        </button>
      
      </div>
      <div className="WebsiteHeader-Box5">
          <div className="WebsiteHeader-Box6">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>PRODUCTS</div>
            <div>CONTACT US</div>
            </div>
          <div className="WebsiteHeader-Box7" >
            <div> <FaShoppingCart /> </div>
            <div >Cart</div>
            
          </div>
          <div className="simenu" onClick={()=>setOpen(true) }>< SlMenu /></div>
      </div>
      
   </div>
</div>
<Drawer  title="Basic Drawer" placement="right" onClose={()=>setOpen(false)} open={open}>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PRODUCTS</p>
        <p>CONTACT US</p>
        <p> <FaShoppingCart /></p>
        <p>Cart </p>
      </Drawer>
</>
  );
}
export default WebsiteHeader;


.WebsiteHeader-Box1 {
  width: 100%;
  height: 80px;
z-index: 1000;
display: flex;
position: fixed;
top: 0;

}
.WebsiteHeader-Box2 {
  width: 40%;
  height: 100px;
  padding-left: 70px;
  padding-top:20px;
}
.WebsiteHeader-Box3 {
  width: 60%;
  height: 100px;
  padding-top: 20px;
  display: flex;
  @media screen and (max-width: 900px) {
    display: none;
  }
}
.WebsiteHeader-Box4{
  width: 100%;
  height: 100%;
  flex: 1.5;
  
}
.WebsiteHeader-Box5{
width: 100%;
height: 50px;

flex: 3;
display: flex;
font-size: 12px;
color: white;
gap: 7px;
padding: 10px 0 10px 0;

}
.WebsiteHeader-Box6{
  width:100%;
  height: 100px;
  display: flex;
  
  flex: 4;
  gap: 25px;
  padding: 0px 29px 0px 26px;
}
.WebsiteHeader-Box7{
  width: 100%;
  height: 100px;
  display: flex;
  padding: 0px 16px 0px 16px;
  flex: 1;
  gap: 9px;
  
}

.button{
width :100%;
padding-left: 200px;
border: 1px solid white;
border-radius: 90px;
background-color: transparent;

}
.search-button {
width:268px;
height:32px;
background: transparent;
border-radius: 10px;
border: 1px;

}
.search-button .anticon {
  padding: 0px 0px 0px 0px;
  color: white;
 }
.logo{
  width: 100px;
  height: 49px;

}

.simenu{
    font-size: 12px;
    color: white;
    gap: 5px;
    @media screen and (min-width: 0px) and (max-width: 900px) {
      
    }
}
  
  @media screen and (min-width: 900px)  {
.simenu{
  display: none;
}
  }
           
  import React from "react";
  import './style.css';
  function Navbar() {
   <div className="header">
      <div className="">
          hi
      </div>
      <div className="">
          <div className="">
              <div>Home</div>
              <div>Services</div>
              <div>Tracking</div>
              <div>Products</div>
              <div>Contact</div>
  
          </div>
          <div className="">
  
          </div>
          <div className="">
  
          </div>
  
      </div>
   </div>
  }
  export default Navbar;