import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/app.scss';
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";

export default function App() {

  const Routing = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        {path:'' , element: <HomePage />},
        {path:'/about' , element: <About />},
        {path:'/service' , element: <Service />},
        {
          path: '/contact-us', element: <ContactUs />, children: [
            {path:'' , element:<h2> contact us form</h2>}, 
            {path:'emails' , element: <section className="header px" ><h2> contact us emails</h2></section>}, 
            {path:'locations' , element: <section className="header px" ><h2> contact us locations</h2></section>}, 
            {path:'phone-number' , element: <section className="header px" ><h2> contact us phone number</h2></section>}, 
        ] },
        {path:'*' , element: <NoPage /> },
    ]},
  ])

  return (
    <div>
      <RouterProvider router={Routing} />
    </div>
  )
}
