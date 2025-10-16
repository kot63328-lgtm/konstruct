import About from "./components/About/About"
import GetInTouch from "./components/GetInTouch/GetInTouch"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Newsletter from "./components/Newsletter/Newsletter"
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
        <Newsletter/>
      </main>
    </>
  )
}

export default App