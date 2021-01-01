import React from 'react'
import '../Contact.css'

function Contact() {
    return (
        <div className="contact container">

            <h1 id="heading">Contact Us</h1>
            
            <div className= "row">

            <div className="form col-md-6">
                    <form >
                        <div>Name:</div>
                        <input type="text" name="name" /><br />
                            
                        <div>Email:</div>
                        <input type="email" name="mail" /><br />
    
                        <div>Enter your message:</div>
                        <textarea name="message" /><br />
    
                        <input type="submit" value="Submit" className="submit-btn"/>
                    </form>   
                    
                     
                </div>
    
                    <div className="info col-md-6">
                        <h1 id="heading">Reach Out to Us</h1>
                    </div>

            </div>

            
        
         </div>
    )
}

export default Contact
