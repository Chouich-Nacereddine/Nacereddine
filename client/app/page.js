import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <main className='text-white flex-col'>
      <Home/>
      <About/>
      <Portfolio/>
      {/* <Contact/> */}
    </main>
  )
}
