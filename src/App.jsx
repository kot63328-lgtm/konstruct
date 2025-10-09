import About from "./components/About/About"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  )
}

export default App