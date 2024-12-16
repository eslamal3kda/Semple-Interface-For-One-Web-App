import { NavLink } from "react-router-dom";


export default function ContactMenu() {
  return (
    <>
        <ul className="contact-menu">
            <li><NavLink to={''} end> form</NavLink></li>
            <li><NavLink to={'emails'}> emails</NavLink></li>
            <li><NavLink to={'locations'}>location</NavLink></li>
            <li><NavLink to={'phone-number'}> phone number</NavLink></li>
        </ul>
    </>
  )
}
