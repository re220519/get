import React from 'react'
import './style.scss';
import sendd from '../../../asset/sendd.jpg';
import tr from '../../../asset/tr.jpg';
import gs from '../../../asset/gs.jpg';
import SAPI from '../../../asset/SAPI.png';
import gAces from '../../../asset/gAces.png';
import{ Card } from 'antd';
import { Typography } from 'antd';
import ga from '../../../asset/ga.jpg';
import taxreports from '../../../asset/taxreports.png';
import getsupport from '../../../asset/getsupport.png';
/*import { transpile } from 'typescript';*/

function Tax() {
    const { Meta } = Card;
    const { Title ,Paragraph} = Typography;
  return (
   <>
<div className='taxcontainer1'>
  <div className='taxcontainer2'>
     <div className='tax1'>
     <div className='tax11'> <p> TAX CALCULATOR/ TAX RETURNS </p>  </div>
     </div>
     <div className='tax2'>Easy Calculators & Tax Filing made simple</div>
     <div className='tax3'>
    <div className='TAX1'>   
    <div className='TAX'>
        <div className='TITLE'>
        <Title type='success' level={5} className='custom-card-title'>SEND AND PAY INVOICES</Title></div>
        <div className='IMAGE'>
            <img  className="IMAGE"src={sendd} alt=""/>
       </div>
        <div className='cardescription'> <Paragraph className='carddescription'>Get paid or make payment to  Invoice, cash flow that can be tracked.</Paragraph></div>
         
    </div>
    <div className='TAX'>
        <div className='TITLE'>
        <Title  type='success' level={5} className="custom-card-title">GLOBAL ACCESS </Title> </div>
        <div className='IMAGE'>
        <img  className="IMAGE"src={ga} alt=""/>
   </div>
        <div className='carddescription'>Access Securely anywhere and Provide access to anyone who  can manage and Save time.</div>
    </div>
    <div className='TAX'>
        <div className='TITLE'>
    <Title type='success' level={5} className="custom-card-title">TAX REPORTS </Title></div> 
    <div className='IMAGE'>
    <img  className="IMAGE"src={tr} alt=""/>
   </div>
        <div className='carddescription'>No hassle for preparing Tax Reports, Tax GO does it all.</div>
    </div>
    <div className='TAX'>
        <div className='TITLE'>
    <Title type='success' level={5} className="custom-card-title">GET SUPPORT </Title> </div>
    <div className='IMAGE'>
    <img  className="IMAGE"src={gs} alt=""/>
    </div>
        <div className='carddescription'>Tax GO provides 24/7 Support to Customer, Users or Accountants. Click on Chat to explore More. </div>
    </div>
     </div>
  </div>
</div>
</div>
<div className='TAXCONTAINER1'>
  <div className='TAXCONTAINER2'>
    <div className='TAX1'>
        <div className='TAX11'>  <p> TAX CALCULATOR/ TAX RETURNS </p> </div>
    </div>
    <div className='TAX2'>Easy Calculators & Tax Filing made simple</div>
    <div className='TAX3'>
        <div className='TAXTHREE'>
        <div className='TAX'>   
        <div className='TITLE'>
        <Title type='success' level={5} className='custom-card-title'>SEND AND PAY INVOICES</Title></div>
        <div className='IMAGE'>
            <img  className="IMAGE"src={sendd} alt=""/>
       </div>
        <div className='cardescription'> <Paragraph className='carddescription'>Get paid or make payment to  Invoice, cash flow that can be tracked.</Paragraph></div>
         
    </div>
    <div className='TAX'>
        <div className='TITLE'>
        <Title  type='success' level={5} className="custom-card-title">GLOBAL ACCESS </Title> </div>
        <div className='IMAGE'>
        <img  className="IMAGE"src={ga} alt=""/>
   </div>
   <div className='carddescription'>Access Securely anywhere and Provide access to anyone who  can manage and Save time.</div>
        </div>
        
  </div>
      <div className='TAXFOUR'>
      <div className='TAX'>
        <div className='TITLE'>
        <Title  type='success' level={5} className="custom-card-title">TAX REPORTS </Title> </div>
        <div className='IMAGE'>
        <img  className="IMAGE"src={tr} alt=""/>
   </div>
   <div className='carddescription'>Access Securely anywhere and Provide access to anyone who  can manage and Save time.</div>
        </div>
        <div className='TAX'>
        <div className='TITLE'>
        <Title  type='success' level={5} className="custom-card-title">GET SUPPORT</Title> </div>
        <div className='IMAGE'>
        <img  className="IMAGE"src={gs} alt=""/>
   </div>
   <div className='carddescription'>Access Securely anywhere and Provide access to anyone who  can manage and Save time.</div>
        </div> 
        </div>    
    </div>
  </div>
</div>
  <div className='container-tax1'>
    <div className='container-tax2'>
    <div className='TAx1'>
     <div className='TAx11'> <p> TAX CALCULATOR/ TAX RETURNS </p>  </div>
     </div>
     <div className='TAx2'>Easy Calculators & Tax <br/>Filing made simple</div> 
     <div className='TAx3'>
     <div className='TAXthree'>
        <div className='TAxthree'>   
        <div className='TITlE'>
        <Title type='success' level={5} className='custom-card-title'>SEND AND PAY INVOICES</Title></div>
        <div className='mobIMAGE'>
            <img  className="IMAGEmob"src={SAPI} alt=""/>
       </div>
        <div className='carddescriptionmob'> Get paid or make payment to  Invoice, cash flow that can be tracked.</div>
         
    </div>
    <div className='TAxthree'>
        <div className='TITlE'>
        <Title  type='success' level={5} className="custom-card-title">GLOBAL ACCESS </Title> </div>
        <div className='mobIMAGE'>
        <img  className="IMAGEmob"src={gAces} alt=""/>
   </div>
   <div className='carddescriptionmob'>Access Securely anywhere and Provide access to anyone who  can manage and Save time.</div>
        </div>
        <div className='TAxthree'>
        <div className='TITlE'>
    <Title type='success' level={5} className="custom-card-title">TAX REPORTS </Title></div> 
    <div className='mobIMAGE'>
    <img  className="IMAGEmob"src={taxreports} alt=""/>
   </div>
        <div className='carddescriptionmob'>No hassle for preparing Tax Reports, Tax GO does it all.</div>
    </div>
    <div className='TAxthree'>
        <div className='TITlE'>
    <Title type='success' level={5} className="custom-card-title">GET SUPPORT </Title> </div>
    <div className='mobIMAGE'>
    <img  className="IMAGEmob"src={getsupport} alt=""/>
    </div>
        <div className='carddescriptionmob'>Tax GO provides 24/7 Support to Customer, Users or Accountants. Click on Chat to explore More. </div>
    </div>
  </div>
     </div> 
    </div>
    </div> 
   </>
  )
}

export default Tax;