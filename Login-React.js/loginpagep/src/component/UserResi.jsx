import React from 'react'
import {Form,Button,Col, Row} from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import validator from 'validator';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function UserResi() {

  const [user,setUser] = useState("")
  const [password,setPassword] = useState("")
  const [emailError, setEmailError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [mobile, setmobile] = useState("");
  const [FuserErr,setFUserErr]= useState(false);
  const [LuserErr,setLUserErr]= useState(false);
  const [isError, setIsError] = useState(false);
  

    function FuserHandle(e){
      let item=e.target.value;
      if(item.length<3 )
      {
         setFUserErr(true)
      }
      else
      {
          setFUserErr(false)
      }
      setUser(item)
  }

  function LuserHandle(e){
    let item=e.target.value;
    if(item.length<3 )
    {
       setLUserErr(true)
    }
    else
    {
        setLUserErr(false)
    }
    setUser(item)
}

    //password validetion

    const validate = (value) => {
  
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Is Strong Password')
      } else {
        setErrorMessage('Is Not Strong Password')
      }
    
    }
  

    //email
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    }
 
// mobile

function validateNum(e){
  let item =e.target.value;
  if (item.length > 10){
  setIsError(false);
  }else{
    setIsError(true);
  }
}

  
 function success(){Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
) 
 }
 
  return (
    < div style={{ height :'500px', background:'white',margin:'0px'}}>
     <Form  style={{ background:' linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )'}}>
       <Row>
     <Form.Group style={{padding:'0px 10px 0px 20px'}} className="mb-3"  as={Col} md="6" controlId="formBasicName">
             <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="First Name" onChange={FuserHandle} />{FuserErr?<span style={{}}>Enter Valid Name</span>:""}
            </Form.Group>
            <Form.Group style={{padding:'0px 15px 0px 10px'}} className="mb-3"  as={Col} md="6" controlId="formBasicEmail">
               <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Last Name" onChange={LuserHandle} />{LuserErr?<span>Enter valid Name</span>:""}
            </Form.Group>
            </Row>

            <Form.Group style={{padding:'0px 5px 0px 5px',margin:'0px'}} className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder="Email"onChange={(e) => validateEmail(e)} /><br/><span style={{color: 'red',margin:'0px' }}>{emailError}</span>
            </Form.Group>

            <Form.Group style={{padding:'0px 5px 0px 5px'}}  className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number"  onChange={(e) => validateNum(e)}/>{isError?<span>Enter 10 Number</span>:""}
            </Form.Group>

            <Form.Group style={{padding:'0px 5px 0px 5px'}} className="mb-3" controlId="formBasicPassword">
              <Form.Label></Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => validate(e.target.value)} /><span style={{
          fontSize: '15px',
          color: 'red',
        }}>{errorMessage}</span>
            </Form.Group>
            <Form.Group style={{padding:'0px 5px 0px 5px'}} className="mb-3" controlId="formBasicPassword">
              <Form.Label> </Form.Label>
                  <Form.Control type=" password" placeholder=" Confirm Password"  />
            </Form.Group>
            
              <Form.Group style={{padding:'0px 10px 0px 0px',margin:'7px 7px'}} className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="I agree with terms unconditional" />
           </Form.Group>
           <Form.Group style={{padding:'0px 10px 0px 0px',margin:'0px 7px'}} className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="I want to receive the newsletter" />
           </Form.Group>
            
            <Button style={{padding:'4px 10px 10px 10px',margin:'0px 0px 7px 7px'}} type="submit" onClick={success}>Registre</Button>{' '}


</Form>
    </div>
  )
      }
