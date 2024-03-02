import React from 'react'
import './style.scss';
import { Card } from 'antd';
import acconting1 from '../../../asset/acconting1.jpg';
import compliance1 from '../../../asset/compliance1.jpg';
import financial1 from '../../../asset/financial1.jpg';
import funding1 from '../../../asset/funding1.jpg';
import {Typography} from 'antd';
import mob1 from '../../../asset/mob1.png';
import mob2 from '../../../asset/mob2.png';
function Card1() {
    const { Meta } = Card;
    const { Title ,Paragraph} = Typography;
  return (
   <>
   <div className='servicecardcontainer'>
     <div className='servicecard'>
      <div className='servicecard2'>
           <div className='servicecard3'>
              <div className='servicecard4'>
                 <Title type='success' level={5} className='custom-card-title'>ACCOUNTING & BANKING SOLUTION</Title>
              </div>
              <div className='serviceimage'>
                  <img  className="simage"src={acconting1} alt=""/>
              </div>
                <div className='servicepara'> <Paragraph className='servicepara1'>Tax GO user-friendly platform is straightforward. Our app does most of the work while boosting your efficiency!</Paragraph></div>
               </div> 
             <div className='servicecard3'>
             <div className='servicecard4'>
              <Title type='success' level={5} className='custom-card-title'>TAX,COMPLIANCE & PAYROLL</Title>
              </div>
              <div className='serviceimage'>
              <img  className="simage"src={compliance1} alt=""/>
              </div>
              <div className='servicepara'> <Paragraph className='servicepara1'>Tax, compliance, and payroll are interconnected functions that require careful attention to legal requirements, accuracy in calculations, and timely execution.</Paragraph></div>
           </div>
           <div className='servicecard3'>
           <div className='servicecard4'>
              <Title type='success' level={5} className='custom-card-title'>FINANCIAL & PAYROLL SERVICES</Title>
              </div>
              <div className='serviceimage'>
              <img  className="simage"src={financial1} alt=""/>
              </div>
              <div className='servicepara'> <Paragraph className='servicepara1'>Financial services encompass a wide range of activities aimed at managing and optimizing a company's financial resources. </Paragraph></div>
           </div>
           <div className='servicecard3'>
           <div className='servicecard4'>
              <Title type='success' level={5} className='custom-card-title'>GROWTH & FUNDING ACCESS</Title>
              </div>
              <div className='serviceimage'>
              <img  className="simage"src={funding1} alt=""/>
              </div>
              <div className='servicepara'> <Paragraph className='servicepara1'>Growth and funding access are crucial elements for businesses looking to expand and secure the necessary financial resources.</Paragraph></div>
           </div>
        </div>   
         
     </div>
   </div>
   <div className='servicecardtab'>
           <div className='servicecardtab1'>
               <div className='servicecardtabb1'> 
               <div className='servicecardtab2'>
                   <div className='servicecardtab3'>
                       <Title type='success' level={5} className='custom-card-title'>ACCOUNTING & bANKING SOLUTION</Title>
                   </div>
                  <div className='serviceimagetab'>
                     <img  className="simagetab"src={acconting1} alt=""/>
                   </div>
                   <div className='servicepara'> <Paragraph className='servicepara1'>Tax GO user-friendly platform is straightforward. Our app does most of the work while boosting your efficiency!</Paragraph></div>
               </div>
              <div className='servicecardtab4'>
                   <div className='servicecardtab5'>
                     <Title type='success' level={5} className='custom-card-title'>TAX,COMPLIANCE &PAYROLL</Title>
                   </div>
                  <div className='serviceimagetab'>
                    <img  className="simagetab"src={compliance1} alt=""/>
                  </div>
                   <div className='servicepara'> <Paragraph className='servicepara1'>Tax, compliance, and payroll are interconnected functions that require careful attention to legal requirements, accuracy in calculations, and timely execution.</Paragraph></div>
               </div>
               </div>
               <div className='servicecardttab1'>
                    <div className='servicettab1'> 
                       <div className='servicetabb2'>
                       <div className='servicecardttab3'>
                          <Title type='success' level={5} className='custom-card-title'>FINANCIAL & PAYROLL SERVICES</Title>
                        </div>
                       <div className='serviceimagetab'>
                          <img  className="simagetab"src={financial1} alt=""/>
                         </div>
                        <div className='servicepara'> <Paragraph className='servicepara1'>Financial services encompass a wide range of activities aimed at managing and optimizing a company's financial resources. </Paragraph></div>
                       </div>
                       <div className='servicetabb2'>
                       <div className='servicecardttab3'>
                          <Title type='success' level={5} className='custom-card-title'>GROWTH &FUNDING ACCESS</Title>
                        </div>
                       <div className='serviceimagetab'>
                          <img  className="simagetab"src={funding1} alt=""/>
                         </div>
                        <div className='servicepara'> <Paragraph className='servicepara1'>Growth and funding access are crucial elements for businesses looking to expand and secure the necessary financial resources.</Paragraph></div>
                       </div>
                    </div> 
               </div>
           </div>
          </div>
        <div className='servicecardmob'>
            <div className='servicecardmob1'>
                 <div className='servicecardmob2'>
                        <div className='servicecarddmob2'>
                          <Title type='success' level={5} className='custom-card-titles'>ACCOUNDING & BANKING SOLUTION</Title>
                        </div>
                       <div className='serviceimagemob'>
                          <img  className="simagemob"src={acconting1} alt=""/>
                         </div>
                        <div className='serviceparamob'> <Paragraph className='serviceparamob1'>Tax GO user-friendly platform is straightforward. Our app does most of the work while boosting your efficiency! </Paragraph></div>
                 </div>
                <div className='servicecardmob2'>
                        <div className='servicecarddmob3'>
                             <Title type='success' level={5} className='custom-card-titles'>TAX,COMPLIANCE & PAYROLL</Title>
                         </div>
                      <div className='serviceimagemob'>
                          <img  className="simagemob"src={financial1} alt=""/>
                         </div>
                       <div className='serviceparamob'> <Paragraph className='serviceparamob1'>Tax, compliance, and payroll are interconnected functions that require careful attention to legal requirements, accuracy in calculations, and timely execution.</Paragraph></div>
                </div>
                <div className='servicecardmob2'>
                        <div className='servicecarddmob4'>
                             <Title type='success' level={5} className='custom-card-titles'>FINANCIAL & PAYROLL SERVICES</Title>
                         </div>
                      <div className='serviceimagemob'>
                          <img  className="simagemob"src={compliance1} alt=""/>
                         </div>
                       <div className='serviceparamob'> <Paragraph className='serviceparamob1'>Financial services encompass a wide range of activities aimed at managing and optimizing a company's financial resources. </Paragraph></div>
                </div>
                <div className='servicecardmob2'>
                        <div className='servicecarddmob5'>
                             <Title type='success' level={5} className='custom-card-titles'>GROWTH & FUNDING ACCESS</Title>
                         </div>
                      <div className='serviceimagemob'>
                          <img  className="simagemob"src={funding1} alt=""/>
                         </div>
                       <div className='serviceparamob'> <Paragraph className='serviceparamob1'>Growth and funding access are crucial elements for businesses looking to expand and secure the necessary financial resources.</Paragraph></div>
                </div>
            </div>
            </div>  
   </>
  )
}

export default Card1;