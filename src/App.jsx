import { BrowserRouter } from "react-router-dom";
import {
  About, Experience, Hero,
  Navbar, Tech, StarsCanvas
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relativo z-0 bg-primary">
        <div className="bg-her-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App