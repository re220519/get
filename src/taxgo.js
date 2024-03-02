import { React }from "react";
const CashBankTransfer = () => {
    return(
        <div>CashBankTransfer</div>
        )
    }
export default CashBankTransfer ;



const CashBankTransfer = () => {
    return(
      <>
        <Form  className="form">
          <div className="heading">BANK TRANSFER</div>
          <div className="heading2">Manage your bank details</div>
          <div className="select-container">
          <Form.Item  className="custom-select-class">
            <label>Select </label> <br />
            <Select 
        defaultValue="1200-Cash"       options={[
          { value: '1100-Current', label: '1100-Current' },
          { value: '1200-Cash', label: '1200-Cash' },
          { value: '1234-test', label: '1234-test' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
  </Form.Item>
          
         
        </div>
        </Form>
    )
    }
  
  export default CashBankTransfer ;
  


  import React, { useState } from 'react';
import { Input, Alert } from 'antd';


const YourComponent = () => {
  const [amount, setAmount] = useState<number>(0);

  //const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   // const inputAmount = parseFloat(e.target.value);
   // setAmount(inputAmount);
  //};
  const handleChange = (value: number | undefined) => {
    setAmount(value);
  };

  const warningMessage =
    amount <= 0 ? (
      <Alert
        message="Please enter an amount greater than 0."
        type="warning"
        showIcon
      />
    ) : null;

  return (
    <div>
      <label>Amount Transferred:</label>
      <Input
       
        value={amount} // Convert amount to string for input value
        onChange={handleChange}
        
        
      />
      {warningMessage}
    </div>
  );
};

export default YourComponent;

import React , { useState }from "react";
import { DatePicker, Form,  Select, Button, Input, Alert } from 'antd';
import '../styles.scss'
import Component1 from "./index1";

const CashBankTransfer = () => {
  const selectStyle = {
    height: '50px', // Set the desired height
  };
  const [amount, setAmount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
  };
  const warningMessage =
  amount <= 0 ? (
    <Alert
      message="Please enter an amount greater than 0."
      type="warning"
      
    />
  ) : null;

  return (
    <>
    
      <Form className="form">
        <div className="heading">BANK TRANSFER</div>
        <div className="heading2">Manage your bank details</div>
        <div>
        <div className="select-container">
          <div className="custom-select-class">
          <Form.Item >
          <label style={{ fontSize: '9px' }}>PAID FROM </label> <br />
              <Select style= {selectStyle}
                defaultValue="1200-Cash" 
                options={[{ value: '1100-Current', label: '1100-Current' },
                { value: '1200-Cash', label: '1200-Cash' },
                { value: '1234-test', label: '1234-test' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
              
            />
          </Form.Item>
        </div>
        <div className="custom-select-class">
          <Form.Item>
            <label style={{ fontSize: '9px' }}>PAID TO </label> <br />
            <Select
              defaultValue="1100-Cash"
              options={[{ value: '1100-Current', label: '1100-Current' },
                { value: '1200-Cash', label: '1200-Cash' },
                { value: '1234-test', label: '1234-test' },
                { value: 'disabled', label: 'Disabled', disabled: true } ,]}
            />
          </Form.Item>
        </div>
     </div>
   <div className="select-container">
          <div className="custom-select-class">
          <Form.Item>
            <label style={{ fontSize: '9px' }}>PAID METHOD </label> <br />
            <Select
              defaultValue="1100-Cash" 
              options={[{ value: '1100-Current', label: '1100-Current' },
                { value: '1200-Cash', label: '1200-Cash' },
                { value: '1234-test', label: '1234-test' },
                { value: 'disabled', label: 'Disabled', disabled: true } ,]}
            />
          </Form.Item>
          </div>
          <div className="custom-select-class">
          <Form.Item>
            <label style={{ fontSize: '9px' }}>PAYMENT DATE</label> <br />
          <DatePicker  style={{ width: '100%' }} />
          </Form.Item>
          </div>
          </div>
        </div>
        <div className="select-container">
        <div className="custom-select-class">
          <Form.Item>
            <label style={{ fontSize: '9px' }}>AMOUNT TRANSFERRED </label> <br />
            <Component1  />
          </Form.Item>
          </div> 
          <div className="custom-select-class">
            <Form.Item>
             <label style={{ fontSize: '9px' }}>REFERENCE </label>
             <Select
        showArrow={false}
        showSearch={true}
        notFoundContent={null} 
    />
 </Form.Item>
          </div>
        </div>
        <div className="select-container">
          <div className="custom-select-class">
          <Form.Item>
             <label style={{ fontSize: '9px' }}>DESCRIPTION </label>
             <Select
        showArrow={false}
        showSearch={true}
        notFoundContent={null} 
    />
 </Form.Item>
          </div>
        </div>
        <div className="button">
        <Button className="grey-button" size="large">TRANSFER</Button>
      <Button className="green-button" size="large">CLEAR</Button>
        </div>
      </Form>
      
    </>
   
  );
};
value={amount.toString()}

import React, { useState } from "react";
import { DatePicker, Form, Select, Button, Input, Alert } from 'antd';
import '../styles.scss';

const CashBankTransfer = () => {
  const selectStyle = {
    height: '50px', // Set the desired height
  };

  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
  };

  const warningMessage =
    amount <= 0 ? (
      <Alert
        message="Please enter an amount greater than 0."
        type="warning"
      />
    ) : null;

  return (
    <Form className="form">
      <div className="heading">BANK TRANSFER</div>
      <div className="heading2">Manage your bank details</div>

      <div className="select-container">
        {/* ... other select containers ... */}
        <div className="custom-select-class">
          <Form.Item>
            <label style={{ fontSize: '9px' }}>AMOUNT TRANSFERRED </label> <br />
            <Input
              placeholder="Enter amount"
              value={amount.toString()}
              onChange={handleAmountChange}
              type="number"
            />
            {warningMessage}
          </Form.Item>
        </div>
        {/* ... other select containers ... */}
      </div>

      {/* ... rest of the form ... */}
    </Form>
  );
};

export default CashBankTransfer;

export default CashBankTransfer;