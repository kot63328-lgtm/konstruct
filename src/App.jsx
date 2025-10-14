import About from "./components/About/About"
import GetInTouch from "./components/GetInTouch/GetInTouch"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Services/>
        <GetInTouch/>
      </main>
    </>
  )
}

export default App