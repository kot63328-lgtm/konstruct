import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <div className='hero__info'>
            <h1 className='hero__title'>PARTNER WITH KONSTUCT</h1>
            <p className='hero__desc'>An award-winning construction management firm</p>
          </div>
          <button className='hero__btn'>SCROLL DOWN</button>
        </div>
      </div>
    </section>
  )
}

export default Hero