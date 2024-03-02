function HomeScreen(){
   
    // const navigate = useNavigate();
  
   //const handleGetQuoteClick = () => {
      // Navigate to the form page//
     
          //navigate('/MyForm');
   // };
   const [isModalOpen, setIsModalOpen] = useState(false);
  
   const showModal = () => {
     setIsModalOpen(true);
   };
  
   const handleOk = () => {
     setIsModalOpen(false);
   };
  
   const handleCancel = () => {
     setIsModalOpen(false);
   };
  
  
   return(
      <>
     <div className="homescreen-box1">
      <div className="homescreen-box2">
           <Navbar />
           <div className="homescreen-box3">
           <img className="homescreenimg" src={ Frame } alt="" /> 
             
            <div class>
                <div className="content-overlay">
              
                  <h1 className="helo">Storage in  Dubai <br /> <span>Unlimited  storage  anywhere <br />  anytime at minimum cost.
                </span></h1>  
  </div>
  <div className="myform"> <MyForm/></div>
  <div className="modal">
  <Button  onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}> 
    <MyForm2 />
      
  </Modal>
  
  
  
     </div> 
     
            </div>
            </div>
           </div>
           </div>
            
           
       
            
      
     </>
   );
  }
  export default HomeScreen;
  
  .homescreen-box1{
    width:100%;
    height: 100px;
   
 }
 .homescreen-box2{
     width:100%;
     height: 100px;
    
  }
 .homescreen-box3{
     width: 100%;
     height: 100px;
     
     
     position: relative;
 }
 .homescreenimg{
     width: 100%;
     height: 100vh;
     object-fit: cover;
 }
 .content{
    display: flex;
   
    }
    .myform{
     float: right;
    }
 .helo{
     color: white;
     font-size: 60px;
    font-weight: 400px;
    font-family: 'YasevaOne', serif;
    word-spacing: 7px;
    height: 100px;
    
 }
 .content-overlay {
     width: 100%;
     height: 100px;
     position: absolute;
     top: 250px; /* Adjust as needed to vertically center your content */
     left: 30%;
     transform: translate(-50%, -50%);
     text-align: center; /* Center the text horizontally */
   }
   .helo span{
     width: 100%;
     height: 100px;
     font-size: 38px;
 font-weight: 400px;
 padding: 0px 16px;
 word-spacing: 10px;
 color: white;
 
   }
   
 .socialmedia {
   margin-left: 100%;
    
 }
 .sc{
     width: 100%;
     height: 100px;
    margin-left: 115%;
    background-color: #F5F5F5;
    color: #BBBBBB;
    
 }
 @media screen and (min-width: 900px) {
     .content-overlay{
         top: 360px;
     }
     .modal{
        display: none;
     }
     .myform{
         
         
     }
 }
 @media screen and (min-width: 700px) and (max-width: 899px){
     .content-overlay{
         top:260px;
         
         
     }
     .helo{
         font-size: 43px;
        line-height: 1.5;
     }
     .helo span{
      display: block;   
 font-size: 35px;
 word-spacing: 7px;
 padding: 0px 29px;
 
     }
 }
 @media screen and (min-width: 522px) and (max-width: 700px){
     .content-overlay{
         width: 100%;
         height: 100px;
         top:230px;
         
     }
     .helo{
         font-size: 38px;
         line-height: 1.5;
     }
     .helo span{
         display: block;
         font-size: 30px;
         word-spacing: 7px;
         padding: 0px 29px;
     }
 }
     @media screen and (max-width: 522px) {
         .content-overlay{
             width: 100%;
             height: 100px;
             top:160px;
             left: 45%;
         }
         .helo{
             font-size: 31px;
             line-height: 1.5;
         }
         .helo span{
             display: block;
             font-size: 24px;
             word-spacing: 6px;
             padding: 0px 29px;
         }
     }