import {useRef} from 'react'
import'./contactUs.css'
import emailjs  from "@emailjs/browser";
import './contactUs.css'

function ContactUs() {

const refForm = useRef();
const handleSubmit=(event) =>{
  event.preventDefault();
  console.log(refForm.current)
  const serviceId = 'service_q8md0oz';
  const templateId = 'template_ix76sok';
  const apikey ='82UsxGzlaiByazs9_';


  emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
  .then( function(response){console.log('SUCCESS',response.status,response.text) })
  .catch(function(error){console.log('FAIL',error)})
  event.target.reset();
}
  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>
      <fieldset className='field-name'>
        <label className='symbol-required' htmlFor=''>Name</label>
        <input name='username' type="text" placeholder='Ej:Edwin Dev' required/>
      </fieldset>
      <fieldset className='field-name'>
        <label className='symbol-required' htmlFor=''>Subject</label>
        <input name='subject' type="text" placeholder='Ej:Edwin Dev' required/>
      </fieldset>
      <fieldset className='field-email'>
        <label name='email' className='symbol-required ' htmlFor=''>Email</label>
        <input name='email' id='email' type="email" placeholder='Ej:hannibal@gmail.com' required/>
      </fieldset>
      <fieldset className='field-message'>
        <label className='symbol-required ' htmlFor=''>Text</label>
        <textarea maxLength="500" name='message' id='' rows='6'cols="30" type="text" placeholder='type your message' required/>
      </fieldset>
      <button className='btn-send'>Send</button>
    </form>
  )
}

export default ContactUs
