import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import { SiWinamp } from "react-icons/si";
import {  Drawer } from 'antd';
import { Button ,Flex} from 'antd';
import { PhoneOutlined }from '@ant-design/icons';
import { MailOutlined }from '@ant-design/icons';
import { CloseCircleOutlined } from '@ant-design/icons';
import logos from '../../asset/logos.jpeg';

function Navbar() {
 
  const navigation = useNavigate();
  
    const [open, setOpen] = useState(false); 
    

  const onClose = () => {
    setOpen(false);
  };
  return (
   <>
   <div className='Navbarcontainer'>
    <div className='Button'>
        <div className='button'>
         
        <img className="imgg" src={ logos } alt=" " />
       
        </div>
    </div>
    <div className='Menu'>
        <div className='Menu1'>
           <div className='hom' onClick={() => navigation("/")}>HOME</div>
            <div className='servic' onClick={() => navigation("/ServiceScreen")}>SERVICES</div>
            <div className='pricing'  onClick={() => navigation("/PriceScreen")} >PRICING</div>
            <div className='cont'>CONTACT</div>
            <div className='sin'>SIGN IN</div>
            <div className='reg'>REGISTER</div>
        </div>
    </div>
    <div className='Socialmedia'>
        <div className='socialmedia'>
            <div className='socialmedia1'>
            <FaFacebook  size={20} style={{ margin: '0px 5px' ,backgroundColor: 'white', color: '#34B628' ,borderRadius: '50%' } } /> 
            <FaInstagram size={20} style={{ margin: '0px 5px' , backgroundColor: 'white', color: '#34B628', borderRadius: '50%'}} /> 
            <FaTwitter size={20} style={{ margin: '0px 5px' , backgroundColor: 'white',  color: '#34B628',borderRadius: '50%' }} />
            <FaYoutube size={22} style={{ margin: '0px 5px' , backgroundColor: 'white',  color: '#34B628',borderRadius: '50%' }} />
            </div>
            <div className='english'>
                <button className='en'>EN</button>
            </div>
        </div>
    </div>
    <div className='mobbile'><img  className="mobbileimg"  alt='' /></div>
    <div className="simenu" onClick={()=>setOpen(true) }><SiWinamp  style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '4px', }}/> </div>
    
   </div>
  
 <Drawer className="drawer"  placement="right" closable={false}  onClose={()=>setOpen(false)} open={open}
footer={
    <div style={{ textAlign: 'center' }}>
      <CloseCircleOutlined style={{ fontSize: '24px', cursor: 'pointer',color: 'red',borderRadius:'50%' }} onClick={() => setOpen(false)} />
    </div>
  }
  > 
   
 <div className='menulist'> 
 <p>HOME</p>
 <p>SERVICES</p>
 <p>PRICING</p>
 <p>SIGN IN</p>
 <p>REGISTER</p>
 <p >CONTACT</p>
 
 </div>
 <div className='socialmedias'>
            <FaFacebook  size={20} style={{ margin: '0px 5px' ,backgroundColor: 'white', color: '#34B628' ,borderRadius: '50%' } } /> 
            <FaInstagram size={20} style={{ margin: '0px 5px' , backgroundColor: 'white', color: '#34B628', borderRadius: '50%'}} /> 
            <FaTwitter size={20} style={{ margin: '0px 5px' , backgroundColor: 'white',  color: '#34B628',borderRadius: '50%' }} />
            <FaYoutube size={22} style={{ margin: '0px 5px' , backgroundColor: 'white',  color: '#34B628',borderRadius: '50%' }} />
            </div>
  </Drawer>
 
 
      
   </>
  )
}

export default Navbar;