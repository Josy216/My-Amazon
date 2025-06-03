import classes from './foote.module.css'
import { FaTelegram, FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <div className={classes.footer}>
      <h2>Get In Touch</h2>
      <div className={classes.links}>
        
          <a href="tel:+251962561350"><FaPhone size={25} color='#fff'/> </a>
        <a href="https://t.me/josephteka" target="_blank"><FaTelegram size={25} color='#fff'/></a>

      </div>
      <p>&copy; 2025 | Joseph Teka</p>
    </div>
  )
}

export default Footer



//  <section id="feecatch">
      {/* <div class="message">
        <div class="links">
          <h3>Contacts</h3>
          <p>Get in touch!</p>
          <div class="linkicons">
          <a href="tel:+251962561350"> <i class="fa-solid fa-phone icon"></i></a>
           <a href="https://t.me/josephteka" target="_blank"><i class="fa-brands fa-telegram icon"></i></a>
          <a href="mailto:Josteka6250@gmail.com"><i class="fa-solid fa-envelope icon"></i></a>
        <a href="https://github.com/josy216" target="_blank"> <i class="fa-brands fa-github icon"></i></a>
        <a href="https://www.linkedin.com/in/joseph-teka-271661309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <i class="fa-brands fa-linkedin icon"></i></a>
      </div>
        </div>
      </div>
    </section> */}