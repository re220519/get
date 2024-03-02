import React from "react";
import "./styles.scss";
import logos from "../../asset/image/logos.png";
import Vector from '../../asset/image/Vector.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Component } from "react";

class WebsiteHeader extends Component {
  state = {
    clicked: false,
  };
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
 render() {
  return (
    <div className="header1">
       <div className="header2">
           <div className="navbar">
             <img className="logo" src= { logos } alt="" />
           </div>
           <div className="navbarr"></div>
        </div>
        <div className="navbar-right">
           <div className="button">
              <img className="buttonn" src={ Vector} alt="" /> 
           </div>
         
           <div className="nav">
             <div className="nav-menu ">
              
                <div className="home">HOME</div>
                
                <div className="about">ABOUT</div>
                <div className="products">PRODUCTS</div>
                <div className="contact">CONTACT US</div>
                  <div>
                   <div className="cart">
                    <div className="carts">
                    < faShoppingCart />
                      </div> 
                    <div className="cart-count">Cart</div>
                 </div>
              </div>
            </div>
        </div>
      </div>
      <div id="mobile" onClick={this.handleClick}>
          <i
            id='bar'
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          />
        </div>
      
    </div>
  );
};
};
export default WebsiteHeader;
class WebsiteHeader extends Component {
    state = {
      clicked: false,
    };
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    };
    render() {
      return (
        <div className="header1">
          <div className="header2">
            <div className="navbar">
              <img className="logo" src={logos} alt="" />
            </div>
            <div className="navbarr"></div>
          </div>
          <div className="navbar-right">
             <div className="button">
                <img className="buttonn" src={ Vector} alt="" /> 
             </div>
           
             <div className="nav">
               <div className="nav-menu ">
                
                  <div className="home">HOME</div>
                  
                  <div className="about">ABOUT</div>
                  <div className="products">PRODUCTS</div>
                  <div className="contact">CONTACT US</div>
                    <div>
                     <div className="cart">
                        <div className="carts">
                           <FaShoppingCart />
                        </div> 
                      <div className="cart-count">Cart</div>
                   </div>
            
                </div>
              </div>
            </div>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </div>
      );
    }
  }
  export default WebsiteHeader;





  import React,{Component} from "react"
  import "./styles.scss";
  import logos from "../../asset/image/logos.png";
  import Vector from "../../asset/image/Vector.png";
  import { FaShoppingCart } from 'react-icons/fa';
  
  class WebsiteHeader extends Component {
    state = {
      clicked: false,
    };
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    };
    render() {
      return (
        <div className="header1">
          <div className="header2">
            <div className="navbar">
              <img className="logo" src={logos} alt="" />
              hai
            </div>
            <div className="navbarr">kkkkk</div>
          </div>
          <div className="navbar-right">
             <div className="button">
                <img className="buttonn" src={ Vector} alt="" /> 
             </div>
           
             <div className="nav">
                  <div className="nav-menu ">
                     <div className="home">HOME</div>
                     <div className="about">ABOUT</div>
                     <div className="products">PRODUCTS</div>
                      <div className="contact">CONTACT US</div>
                     <div>
                       <div className="cart">
                          <div className="carts">
                             <FaShoppingCart />
                          </div> 
                         <div className="cart-count">Cart</div>
                       </div>
                     </div>
                  </div>
               </div>
           </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </div>
        
      );
    }
  }
  export default WebsiteHeader;

 import React,{Component} from "react"
import "./styles.scss";
import logos from "../../asset/image/logos.png";
import Vector from "../../asset/image/Vector.png";
import { FaShoppingCart } from 'react-icons/fa';
 
  class WebsiteHeader extends Component {
    state = {
      clicked: false,
    };
    handleClick = () => {
      this.setState({ clicked: !this.state.clicked });
    };
    render() {
      return (
        <div className="header1">
          <div className="header2">
            <div className="navbar1">
              <img className="logo" src={logos} alt=" " /> 
            
               <div className="navbarr"></div>
            <div className="toggle">
           
                
                <div className="home">HOME</div>
              
                <div className="about">ABOUT</div>
                <div className="products">PRODUCTS</div>
                 <div className="contact">CONTACT US</div>
             </div>
                 
            
          
             <div className="navbar-right">
             <div className="button">
              
                 <img className="buttonn" src={ Vector } alt="" /> 
              </div>
             
             <div className="nav">
               <div className="nav-menu ">
                
                    <div className="home">HOME</div>
                  
                    <div className="about">ABOUT</div>
                    <div className="products">PRODUCTS</div>
                     <div className="contact">CONTACT US</div>
                    <div>
                     <div className="cart">
                        <div className="carts">
                           <FaShoppingCart />
                        </div> 
                      <div className="cart-count">Cart</div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </div>
        </div>
      );
    }
  }
  export default WebsiteHeader;  
  
