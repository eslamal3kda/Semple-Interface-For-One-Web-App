import { Outlet } from "react-router-dom";
import ContactMenu from "../components/ContactMenu";

export default function ContactUs() {
  return (
    <>
        <section className="header px">
            <ContactMenu />
            <Outlet />
            
        </section>
    </>
  )
}
