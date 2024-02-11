import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

export default function App() {
  return (
    <main className='text-white flex-col'>
      <Home/>
      <About/>
      <Contact/>
    </main>
  )
}
