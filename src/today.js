const Service = () => {
    const data1 = [
      'Warehouses of every type and size available',
      'Multiple locations and various grades',
      'Never a situation of non-availability',
      'Choose from many options',
      'Easy to choose',
    ];
    const data2 = [
      'A centralized dashboard to view your inventory',
      'Simple and uncomplicated process',
      'Work with a team of professionals',
      'No brokers or brokerage fee',
      'Pay for only what you use',
    ];
  
    return (
      <>
      <div>
        <div className="service">
         <div className='serviceheader1'>
          <div className="serviceheader">
            <div className="serviceheader-title">
              <h1 >Services We Offer
                                      </h1>
            </div></div>
            <div className="serviceitems">
              <div className="serviceitems1">
                
                  <div className="item-list1">
                    {data1.map((item, index) => (
                      <div key={index} className="item">
                        <CaretRightOutlined 
                          className="custom-caret"
                           style={{
                            
                             color: index % 2 === 0 ? '#FF950B' : '#FFD000',
                           }}
                          
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="item-list2">
                    {data2.map((item, index) => (
                      <div key={index} className="item">
                        <CaretRightOutlined
                         className='custom-caret '
                          style={{
                           
                            color: index % 2 === 0 ? '#FF950B' : '#FFD000',
                          }}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
              </div>
              
              <div className="serviceitems2">
                <img className='' src={serviceimg} alt="" /> 
              </div>
            
          </div>
          </div>
        </div>
      </div>
      
  
  
  
      </>
      
    );
  }
  export default Service;
  .serviceheader-title1{
    width: 100%;
 height: 80px;

}
.service{
    width: 100%;
    height: 80px;
    align-content: center;
}
.serviceheader{
   width: 100%; 
   
}
.serviceheader1{
    width: 100%;
}
.serviceheader-title{
    text-align: center; 
    text-align: center;
    width: 100%;
    height: 80px;
    font-size: 25px;
    font-weight: 600;
    background: linear-gradient(to right, yellow, #FF2542);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}
.serviceitems{
   width: 100%; 
   height: 80px;
  
}
.serviceitems1{
   width: 100%; 
    display: flex;
   
   
}
.custom-caret{
    font-size: 24px;
    margin-right: 8px;
}
.serviceitems2 {
    flex-shrink: 0; /* Don't allow serviceitems2 to shrink */
}

.serviceitems2 {
    width: 100%;
  height: 100px;
}
.serviceitems2 img{
   padding: 0px 75px 0px 75px;
   width: 90%;
    
}
.even {
    background-color: #f0f0f0; /* Set the background color for even items */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
 .item-list1{
    width: 100%;
    
  }
  
  .item-list2{
    width: 100%;
   
   } 
  .odd {
    background-color: #ffffff; /* Set the background color for odd items */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
  .item{
    font-size: 18px;
    
    line-height: 2.5;
  }
  .serviceitems2 img{
    text-align: center;
  }
 @media screen and (min-width: 900px) {
   .item{
    font-size: 18px;
    line-height: 2.5;
}
.item-list1{
    padding: 0px 20px 0px 100px; 
}
.item-list2{
    padding: 0px 100px 0px 20px;
} 
.serviceitems2 img{
    text-align: center;
    
  }
}
@media screen and (min-width: 700px) and (max-width: 900px) {
    .item{
        font-size: 13px;
        line-height: 1.5;
    }
    .custom-caret{
        font-size: 11px;
margin-right: 7px;
      }
    
.serviceitems1{
    align-items: center;
}
.serviceitems2 {
    width: 100%;
}
.serviceheader-title{
    font-size: 15px;
}
.item-list1{
    font-size: 10px;
    padding: 0px 10px 0px 70px; 
}
.item-list2{
    font-size: 10px;
    padding: 0px 70px 0px 10px;
} 
}
@media screen and (min-width: 522px) and (max-width: 700px) {
    .serviceitems2 img{
        padding: 0px 75px 0px 75px;
         width: 70%;
     } 
     .serviceheader-title{
        font-size: 15px;
     }
     .item{
        font-size: 12px;
        
        line-height: 1.5;
      }
      .custom-caret{
        font-size: 13px;
margin-right: 14px;
      }
     .item-list1{
        padding: 0px 10px 0px 70px; 
    }
    .item-list2{
        padding: 0px 90px 0px 0px;
    } 
     
}
@media screen and (max-width: 522px) {
    .serviceitems2 img{
        padding: 0px 25px 0px 20px;
         width: 70%;
     } 
     .serviceheader-title{
        font-size: 10px;
     }
     .item{
        font-size: 10px;
        line-height: 1.5;
      }
      .custom-caret{
        font-size: 10px;
margin-right: 12px;
      }
     .item-list1{
        padding: 0px 0px 0px 10px; 
    }
    .item-list2{
        padding: 0px 0px 0px 10px;
    } 
    .serviceitems1{
        display: block;
    }
     
}