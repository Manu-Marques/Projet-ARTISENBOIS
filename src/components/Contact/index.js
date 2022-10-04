import './styles.scss';

export default function Contact() {
return(
<section class="contact">
   <h1 class="contact_title">Restons en contact </h1>
   <form class="contact_row">
      <div class="contact_container">
		<div class="contact_display">
		   <label class="contact_label" for="name">Name</label>
		   <input id="name" class="contact_input" type="text" required/>
		</div>
		<div class="contact_display">
		   <label class="contact_label" for="email">E-mail</label>
		   <input class="contact_input" type="email" required/>
		</div>
	  </div>
      <div class="contact_message">
         <label class="contact_label" for="message">Message</label>
         <input class="conctact_send" type="text" required/>
      </div>
      <div class="contact_section">
         <input class="contact_submit" type="submit" value="Submit"/>
      </div>
   </form>
</section>
)
}