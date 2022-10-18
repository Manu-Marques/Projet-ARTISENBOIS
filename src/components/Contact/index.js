import './styles.scss';
import React from 'react';

export default function Contact() {
return(
<section className="contact">
   <h1 className="contact_title">Restons en contact </h1>
   <form className="contact_row">
      <div className="contact_container">
		<div className="contact_display">
		   <label className="contact_label" for="name"></label>
		   <input placeholder="Name" className="contact_input" type="text" required/>
		</div>
		<div className="contact_display">
		   <label className="contact_label" for="email"></label>
		   <input placeholder="Email" className="contact_input" type="email" required/>
		</div>
	  </div>
      <div className="contact_message">
         <label className="contact_label" for="message"></label>
         <input placeholder="Message" className="contact_send" type="text" required/>
      </div>
      <div className="contact_section">
         <input className="contact_submit" type="submit" value="Submit"/>
      </div>
   </form>
</section>
)
}