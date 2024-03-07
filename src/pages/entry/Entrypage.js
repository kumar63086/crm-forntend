import React, {useState}from 'react'
import './Entry.css'
import Loginform from '../../components/Logincomp'
import Resetpassword from '../../components/password-reset/passwordreset'
//import PropTypes from 'prop-types'; 
function Entrypage() {
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [formload,setformload]=useState('login')



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);

    // Use the name of the input field to update the corresponding state
    switch (name) {
     
      case 'email':
        setEmail(value);
        break;
        case 'password':
        setpassword(value);
        break;
      // Add more cases if you have additional input fields
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with email, password, and name, for example, send them to an API
   if(!email||!password){
    alert('fill up all inut values')
   }
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleRestpassword = (event) => {
    event.preventDefault();
    // Perform actions with email, password, and name, for example, send them to an API
   if(!email){
    alert('please enter the email')
   }
    console.log('Email:', email);
    
  };
  const fromswitcher =(frmtype)=>{
    setformload(frmtype)
  }
  return (
    <div className='bg-info entry-page'>
    <div class="container login_hieght2 ">
      <div class="jumbotron form-box login_hieght">
      {formload==='login'&&(
        <Loginform handleInputChange={handleInputChange}
        fromswitcher={fromswitcher}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
         />
      )}
      {formload==='rest'&&(
        <Resetpassword handleInputChange={handleInputChange}
          email={email}
          handleRestpassword={handleRestpassword}
          handleSubmit={handleSubmit}
         />
      )}
         
      </div>

      
    </div>

    </div>
  )
}

export default Entrypage
