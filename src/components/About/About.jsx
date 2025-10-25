import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='about__wrapper'>
                    <h2 className='about__title'>OUR STORY</h2>
                    <div className='about__content'>
                        <div className='about__content-info'>
                            <h3 className='about__content-title'>Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management firm</h3>
                            <p className='about__content-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                        </div>

                        <ul className="about__content-list">
                            <li className='about__content-item'>
                                <h3 className='about__content-subtitle'>WE PLAN</h3>
                            </li>
                            <li className='about__content-item'>
                                <h3 className='about__content-subtitle'>WE MANAGE</h3>
                            </li>
                            <li className='about__content-item'>
                                <h3 className='about__content-subtitle'> WE BUILD</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About