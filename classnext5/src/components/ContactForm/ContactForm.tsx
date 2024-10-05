import ContactButton from "../ContactButton/ContactButton";
import ContactInput from "../ContactInput/ContactInput";
import ContactLabel from "../ContactLabel/ContactLabel";
import ContactTextarea from "../ContactTextarea/ContactTextarea";
function ContactForm() {
  return (
    <form action='' className="flex flex-col ">
      <ContactLabel label="Name"/>
      <ContactInput typeInput="text" place="Name"/>
      <ContactLabel label="Email"/>
      <ContactInput typeInput="email" place="Email"/>
      <ContactLabel label="Phone Number"/>
      <ContactInput typeInput="number" place="Number"/>
      <ContactLabel label="Your Message"/>
      <ContactTextarea/>
      <ContactButton/>
    </form>
  )
}

export default ContactForm;
