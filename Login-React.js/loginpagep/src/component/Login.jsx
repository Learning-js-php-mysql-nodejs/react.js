
 import UserResi from './UserResi'
import {Form,Button,Modal} from 'react-bootstrap';
 import { useState } from 'react';
 import Swal from 'sweetalert2';
 import validator from 'validator';
 import { FaFacebook,FaGoogle,FaLinkedinIn,FaUser} from "react-icons/fa";
 import Heading from './Heading';
export default function Login() {
 
  const [errorMessage, setErrorMessage] = useState('Haureja@97');
  const [emailError, setEmailError] = useState('aarushuikey@gmail.com');
  const [user,setUser] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 //static
//  function update1(){
//   if(emailError === 'aarushuikey@gmail.com' && errorMessage === 'Haureja@97'){
//     alert("valid Entry");
//   }
//   else{
//     alert("not valid Entry");
//   }
// }

  //email validation
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
    
  }
     
//password
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

//Frorm validation
function loginHandle(e)
    {
        if(emailError|| errorMessage)
        {
            setUser("type correct values")
        }
        else
        {
            setUser("all good :)")
        }

        e.preventDefault()
    }

//sweet 
   function success(){Swal.fire(
     'Good job!',
     'You clicked the button!',
     'success'
  ) 
   }

   

  return(

    <div style={{ height :'800px',background: 'white',margin:'0px'}}>
      <h1 style={{padding:'20px 0px 0px 0px',textAlign:'center' ,color:'Black'}}  >Login</h1>
      
      <Form onSubmit={loginHandle} style={{background:' radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )', width:'', margin :'30px 500px', height :'550px',borderRadius:'20px',boxShadow:'box-shadow: 0 5px 10px rgba(0,0,0,0.30)',boxSizing:'border-box' }}>
         <Form.Group style={{padding:'40px 80px 10px 80px'}} className="mb-3"  controlId="formBasicEmail">
          <Form.Label className='text-white'>Email</Form.Label>
           <Form.Control type="email" placeholder="EX- shahid123@gmail.com" onChange={(e) => validateEmail(e)} /><br/><span style={{
                   fontSize: '15px',
                      color: 'red' }}>{emailError}</span>
         </Form.Group>

         <Form.Group style={{padding:'0px 80px 0px 80px'}} className="mb-3" controlId="formBasicPassword">
             <Form.Label className='text-white'>Password</Form.Label>
               <Form.Control type="password" placeholder="Ex-Xyz1245@" onChange={(e) => validate(e.target.value)} /><br/><span style={{
                   fontSize: '15px',
                      color: 'red',}}>{errorMessage}</span>
         </Form.Group>

         <Form.Group style={{padding:'0px 80px 10px 80px' }} className="mb-3 text-white" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>

           <Button style={{margin:'0px 20px 10px 80px'}} variant="primary" type="submit"  onClick={success} href = "/Heading">Login</Button>
          
  
           <Button variant="warning" style={{margin:'0px 80px 10px 0px'}} onClick={handleShow}>SignUp </Button><br />
        


           <h6 style={{textAlign:'center',marginTop:'15px',color:'#5F9EA0'}}>Signup using</h6>
           <div style={{marginLeft : '150px',marginTop:'40px'}}>
           <Button variant="link" href ='https://www.facebook.com/' target='blank'><FaFacebook style={{margin:'0px 0px 0px 10px',fontSize:'30px',color:'#3b5998'}} /></Button>
                     <Button variant="link"  target='blank'><FaGoogle style={{marginLeft : '10px', fontSize:'30px',color:'#dc4e41'}}/></Button>
                     <Button variant="link"  href ='https://www.linkedin.com/'  target='blank'><FaLinkedinIn style={{marginLeft : '10px' , padding:'0px', fontSize:'30px',color:'#0077b5'}}/></Button>
                     
           </div>

       <Modal style={{}} show={show} onHide={handleClose}>
          <Modal.Header style={{background:'#000000'}} closeButton>
            <Modal.Title style={{padding:'0px 50px 10px 100px',textAlign:'center',color:'white'}}>User Registration Form</Modal.Title>
       </Modal.Header>
            <Modal.Body style={{borderRadius:'30px'}}><div><UserResi/></div></Modal.Body>
            <Modal.Footer>
               <Button style={{borderRadius:'30px',margin:'20px 0px 0px 0px'}} variant="secondary" onClick={handleClose}> Close </Button>
            </Modal.Footer>
       </Modal>
    </Form>
</div>
  )
 }
