


import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../header/components/navbar/navbar";
import Frame from "../../asset/frame.png";
import './style.css';
import MyForm from "../../header/form";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from "antd";

function HomeScreen(){
    const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    // Navigate to the form page
    navigate('/form');
  };
 return(
    <>
   <div className="homescreen-box1">
    <div className="homescreen-box2">
         <Navbar />
         <div className="homescreen-box3">
           <img className="homescreenimg" src={ Frame } alt="" /> 
          
           <div className="content-overlay">
            <h1 className="helo">Storage in  Dubai <br /> <span>Unlimited  storage  anywhere <br /> anytime at minimum cost.
</span></h1> 
           
          <MyForm />
          <div className="sc">
          <FaInstagram size={25} style={{ margin: '0 10px' }} /><br /> 
          <FaFacebook size={25}  style={{ margin: '0 10px' } } /><br />
          <FaTwitter size={25} style={{ margin: '0 10px' }} /><br />
          <FaLinkedin size={25} style={{ margin: '0 10px' }} /><br />
          </div>
           
          
          <div className="headerBox8">
          <Button type="text" ghost onClick={handleGetQuoteClick}>Get Quote</Button>     
        </div>
        </div>
         </div>
        
          </div>
         
          </div>
          
         
    
   </>
 );
}
export default HomeScreen;

import React ,{ useState  }from "react";
import './style.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip} from 'antd';
import logo from "../../../asset/logo.png";
import {  Drawer } from 'antd';
import { SlMenu } from "react-icons/sl";
function Navbar() {
    const [open, setOpen] = useState(false); 
  return( 
 <>   
 <div className="header">
    <div className="headerBox1">
        <img className="logo" src={ logo} alt=""/>
    </div>
    <div className="headerBox2">
        <div className="Nav">
            <div>Home</div>
            <div>Services</div>
            <div>Tracking</div>
            <div>Products</div>
            <div>Contact</div>
            <div>Partner/Vendor</div>
            <div onClick={()=>setOpen(true) }>Login </div>
            
        </div>
        <div className="headerBox3">
             <Tooltip title="search">
               <Button shape="circle"  icon={<SearchOutlined />} />
            </Tooltip>
        </div>
        <div className="headerBox4">
             <Button type="text" ghost>Get Quote</Button>
        </div>
        
    </div>
    <div className="simenu" onClick={()=>setOpen(true) }> <SlMenu /></div> 
 </div>
 <Drawer className="drawer"  placement="right" onClose={()=>setOpen(false)} open={open} style={{ background: 'url(../../../asset/frame.png) center center / cover no-repeat', color: 'white' }}>
 <p>Home</p>
 <p>Services</p>
 <p>Tracking</p>
 <p>Products</p>
 <p>Contacts </p>
 <p >Partner/Vendor</p>
 <p>Login</p>
</Drawer>
</>
  );
}

export default Navbar;

.header{
  width: 100%;
  height: 80px;
  z-index: 1000;
  position: fixed;
  display: flex;
  margin: 10px;
  @media screen and (min-width: 900px)  {
  width:100%;
  height: 80px;
  }
  

.headerBox1{
  width: 100%;
  height: 80px;
}
.headerBox1 img {
 padding: 30px 0px 0px 40px;
}
.headerBox2{
  width: 100%;
  height: 80px;
  display: flex;
}
.Nav{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  
  padding: 10px 5px 0px 5px;
  gap: 15px;
  color: white;
  flex: 5;
  }
.headerBox3{
  width: 100%;
  height: 80px;
 
  flex: 1;
  padding: 35px 0px 0px 10px;
  }
.headerBox4{
  width: 100%;
  height: 80px;
 flex: 2;
 padding: 35px 44px 0px 0px;

}
.headerBox4 button{
  width: 100%;
  background-image: linear-gradient(to right, #FFBA00 , #FF2542);
  color: white;
  padding: 0px 25px 0px 25px;
  border-radius: 25px;
}

.ant-tooltip-inner, 
.ant-tooltip-arrow-content {
background-color: transparent !important; 

}

.ant-btn-circle {
background-color: transparent !important; 
color: aliceblue;
}
.label{
  float: right;
}
.simenu{
 padding: 20px 150px 0px 0px;
 font-size: 20px;
  color: white;
  @media screen and (min-width: 900px){
  display: none;
  }
}
.drawer  {
  background-image: url(../../../asset/frame.png);
  color: white;
  
}

@media screen and (max-width: 900px) {
  .headerBox2 {
    display: none;
  }
  .simenu{
      display: block;
  }

}}

@media screen and (min-width: 900px) {
  .simenu{
   width: 100%;
   display: none;
   
  }
}


.homescreen-box1{
  width:100%;
  height: 80px;
  
}
.homescreen-box2{
   width:100%;
   height: 80px;
   
}
.homescreen-box3{
   width: 100%;
   height: 80px;
   top: 0;
   object-fit: cover;
   position: relative;
}
.homescreenimg{
   width: 100%;
   height: 100vh;
  
}
.helo{
   color: white;
   font-size: 70px;
  font-weight: 400px;
  font-family: 'YasevaOne', serif;
  word-spacing: 9px;
  height: 80px;
}
.content-overlay {
   width: 100%;
   height: 80px;
   position: absolute;
   top: 320px; /* Adjust as needed to vertically center your content */
   left: 32%;
   transform: translate(-50%, -50%);
   text-align: center; /* Center the text horizontally */
 }
 .helo span{
   width: 100%;
   height: 80px;
   font-size: 43px;
font-weight: 400px;
padding: 0px 16px;
word-spacing: 13px;
color: white;

 }
 .form{
   float: right;
 }
.socialmedia {
 margin-left: 100%;
  
}
.sc{
  margin-left: 115%;
  background-color: #F5F5F5;
  color: #BBBBBB;
  
}

@media screen and (max-width: 900px) { 
.helo{
  
   font-size: 31px;
}
.helo span{
font-size: 20px;
}


.content-overlay{
   top:220px;
}
   }
   @media screen and (min-width: 900px) { 
       .helo{
           font-size: 45px;
       }
       .helo span{
           font-size: 30px;
       }
       .content-overlay{
           top: 220px;
       }
       
    }  
    .custom-form-item {
       float: right;
       width: 20%;
       margin-top: -250px;
       
   }
   .custom-form-item .ant-form-item-label {
       
      
     }
     .custom-form-item .ant-form-item-control-input {
      
     }
     @media screen and (max-width: 900px) {
       .headerBox8{
           
           display: block;
          width: 100%;
           height: 80px;
          padding: 10px 0px 0px 0px;
          margin-top: -30px;
         
       }
       .headerBox8 button{
          width: 15%;
           background-image: linear-gradient(to right, #FFBA00 , #FF2542);
           color: white;
           padding: 0px 2px 0px 2px;
           border-radius: 25px;
       }
       
     }
     @media (min-width: 900px) and (max-width:1800px) { 
       .headerBox8{
           display: none;
       }
     }



     import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../header/components/navbar/navbar";
import Frame from "../../asset/frame.png";
import './style.css';
import MyForm from "../../header/form";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from "antd";

function HomeScreen(){
    const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    // Navigate to the form page
    navigate('/MyForm');
  };
 return(
    <>
   <div className="homescreen-box1">
    <div className="homescreen-box2">
         <Navbar />
         <div className="homescreen-box3">
           <img className="homescreenimg" src={ Frame } alt="" /> 
          
           <div className="content-overlay">
            <h1 className="helo">Storage in  Dubai <br /> <span>Unlimited  storage  anywhere <br /> anytime at minimum cost.
</span></h1> 
           
          <MyForm />
          <div className="sc">
          <FaInstagram size={25} style={{ margin: '0 10px' }} /><br /> 
          <FaFacebook size={25}  style={{ margin: '0 10px' } } /><br />
          <FaTwitter size={25} style={{ margin: '0 10px' }} /><br />
          <FaLinkedin size={25} style={{ margin: '0 10px' }} /><br />
          </div>
           
          
          <div className="headerBox8">
          <Button type="text" ghost onClick={handleGetQuoteClick} style={{backgroundColor:'black'}}>Get Quote</Button>     
        </div>
        </div>
         </div>
        
          </div>
         
          </div>
          
         
    
   </>
 );
}
export default HomeScreen;

import { Form, Input, Button } from 'antd';
import './styles.css';

const MyForm = () => {
    
  const onFinish = (values) => {

    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    
    <Form
      name="basic" className='ant-form1'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    ><Form.Item>
        <div className='line'>
        <p className='headerquote headerpara'> Get Free Quote</p> 
       <p className='headerpara1'>Submit your requirements and leave</p>
        <p className='headerpara1'>everything else to us! </p> </div>
        </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        
      >
        </Form.Item>
        <div>
        <Input className="input-containerr" />
</div>
      <Form.Item
        label="Phone "
        name="phoneNumber"
        >
        </Form.Item>
       <div>
      <Input />
      </div>
      <Form.Item
        label="Email"
        name="email"
       
      >
         </Form.Item>
      <div >
      <Input />
      </div>
      <Form.Item label="Notes" name="notes">
        
      </Form.Item>
      <div >
      <Input.TextArea  className="input-container"/>
      </div>
      <Form.Item></Form.Item>
      <div className="headerBox1">
             <Button type="text1" ghost>Get Quote</Button>
        </div>
    </Form>
    </>
  );
};

export default MyForm;

.headerquote {
  width: 100%;
  font-size: 36px;
  background: linear-gradient(to right, #FFBA00, #FF2542);
 line-height: 1;
 font-weight: 500;
  background-clip: text;
  color: transparent; 
  font-family: 'Montserrat';
}
.headerpara{
 width: 100%;
 line-height: 40px;
  margin: 0;
  font-family: 'Montserrat';
}

.line{
  line-height: 6px;
}

.ant-form1 {
  width: 100%; 
  
  display: flex;
  padding: 30px;
  flex-direction: column;
 
  margin-top: 0px;
  background-color: white;
  
}



.ant-form1-item {
  margin-bottom: 0px;
  
   } 
  
.ant-form1-item-label {
  text-align: left; 
  display: block;
  
  
}


.ant-form1-item-control-input{
  
}


  .ant-form1-item-control-textarea {
  width: 100%; 

  display: block;
  
}
/* styles.css */



.input-container input {
 border: none;
  background-color: #E6E6E6;
  width: 100%;
}

.input-container textarea {
  border: none;
  background-color: #E6E6E6;
  }


@media screen and (min-width: 900px) {
  .headerquote{
      font-size: 30px;
  }
  .ant-form1{
      width: 60%;
     
     
  }
  .headerpara1{
      font-size: 10px;
          }
  .line{
      line-height: 3px;
      margin-top: -10px;
      margin-bottom: -20px;
  }
  .ant-form1 .ant-form-item-label {
    font-size: 9px;
    
  }
  .headerBox1 button{
    width: 100%;
    background-image: linear-gradient(to right, #FFBA00 , #FF2542);
    color: white;
    padding: 0px 25px 0px 25px;
    border-radius: 25px;
    margin-top: -30px;
}
  
 .input-container{
  margin-top: -30px;
 }
.headerquote{
  font-size: 25px;
 } 
}
/* @media screen and (max-width: 900px) {
  .ant-form{
    display: none;
  }
}*/
@media (min-width: 522px) and (max-width:700px) {
.ant-form1{
  width: 100%;
  height: 100%;
}
.ant-form1-item-control-textarea {
  width: 40%;
 }
  .ant-form1 .ant-form-item-label {
    font-size: 5px;
      
  }
  .input-container{
    margin-top: -50px;
  }
  .input-containerr{
    margin-top: -50px;
  }
  .headerpara1{
    font-size: 10px;
    line-height: 3px;
  }
  .headerquote {
    font-size: 15px;
  }
  .line{
    line-height: 3px;
} 
.input-container textarea {
 margin-top: 100px;
}
.input-container input {
  margin-top: 300px;
}
.line{
  line-height: 0px;
  margin-top: -15px;
  margin-bottom: -35px;
}
}
.custom-label{
  width:150px;
  height: 50px;
 margin-bottom: -9px;
  padding: 5px;
}
.line{
line-height: 5px;

}
.custom-input{
width: 150px;
padding: 5px;
height: 30px;
}
.ant-form{
width:180px;
height: 300px;
margin-top: -100px;
background-color: brown;
padding: 0px 0px 0px 20px; 
}
.headerpara1{
font-size: 15px;
line-height: 10px;
}
}

.fr1{
  height: 20px;
}
.custom-label{
  width:170px;
  height: 50px;
  margin-bottom: -8px;
  padding: 5px;
}
.custom-input{
width: 170px;
padding: 10px;
height: 30px;
}
.ant-form{
width:200px;
height: 350px;
margin-top: -200px;
background-color: brown;
padding: 0px 0px 0px 20px; 
}
.headerpara{
font-size: 15px;
}
depo 
.warehouse{
  width: 100%;
  height: 100px;
  align-content: center;
 
  
}
.warehouse-title{
  width: 100%;
  height: 15px;
  text-align: center;
 padding: 0px 0px 0px 0px;  
}


.warehouse-title1 {
  width: 100%;
  
  
  font-size: 30px;
  font-weight: 600;
  padding: 0px 0px 0px 0px;
  
  background: linear-gradient(to right, yellow, #FF2542);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

}
.warehouseimg {
  width:90%; 
  height: 100%;
  padding: 0px 70px 0px 70px;
}
.warehouse-box {
padding: 60px 0px 0px 0px;
width: 100%;
height: 80px;

}
.warehouse-box1 {
  
width: 100%;


}
.warehouse-para{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 60px 10px 60px;
}
.warehousepara1{
  padding: 0px 15px;
  font-size: 18px;
}
.warehousepara2{
  padding: 0px 15px;
  font-size: 18px;
}
@media screen and (min-width: 1060px){ 
  .warehouse{
      margin-top: 58%;
      padding: 0px 0px 0px 0px;
  }
  .warehouse-title1{
     padding: 0px 0px -10px 0px;
      font-size: 25px;
   }
.warehouseimg{
  width: 90%;
  padding: 0px 80px 0px 80px;
}

}@media screen and (min-width: 900px) and (max-width:1060){ 
  .warehouse{
      margin-top: 58%;
      padding: 0px 0px 0px 0px;
  }
  .warehouse-title1{
     width: 100%; 
     padding: 0px 0px -10px 0px;
      font-size: 25px;
   }
.warehouseimg{
  width: 90%;
  padding: 0px 80px 0px 80px;
}}
function Warehouse() {
  return(
 <>
<div className="warehouse">
   <div className="warehouse-title">
      <div className="warehouse-title1">
          <h1> Type of Warehouse</h1>
   </div> </div>
       <div className="warehouse-box">
            <div className="warehouse-box1">
            <img className='warehouseimg' src={logistics} alt=" " /> 
             </div>
              <div className="warehouse-para">
                  <div className="warehousepara1">
                     <p>Warehouses come in various types to serve different purposes. Distribution warehouses are designed for efficiently storing and shipping products to customers. Cold storage warehouses maintain low temperatures for perishable goods. Manufacturing warehouses support production processes by storing raw materials and finished products.  </p>
              
                  </div>
                  <div className="warehousepara2">
                      <p>Bulk storage warehouses house large quantities of non-perishable items. E-commerce and fulfillment centers are optimized for processing online orders quickly. Each type of warehouse is tailored to specific needs within the supply chain, ensuring goods are stored and handled appropriately.</p>
                  </div>
              </div>
              <div warehouse-titles>
                     
              </div>
        </div>
   </div>      
  </>
  );
}
export default Warehouse;