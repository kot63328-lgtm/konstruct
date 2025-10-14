import About from "./components/About/About"
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
      </main>
    </>
  )
}

export default App