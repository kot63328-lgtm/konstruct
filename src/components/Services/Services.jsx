import "./Services.css"
const Services = () => {
    return (
        <section className="services" id='services'>
            <div className="container">
                <div className="services__wrapper">
                    <div className="services__content">
                        <h2 className="services__title">OUR CAPABILITIES</h2>
                        <div className="services__info">
                            <p className="secvices__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                            <button className="services__btn">ALL SERVICES</button>
                        </div>
                    </div>
                    <ul className="services__list">
                        <li className="services__item">
                            <img
                                className="services__item-img"
                                src="/services-img-1.jpg"
                                alt="services img 1"
                                width={65} 
                                height={75}
                            />
                            <h3 className="services__item-title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
                            <p className="services__item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </li>
                        <li className="services__item">
                            <img 
                            className="services__item-img" 
                            src="/services-img-2.jpg" 
                            alt="services img 2" 
                             width={67} 
                             height={75}/>
                            <h3 className="services__item-title">STRUCTURE AUDIT AND MAINTENANCE</h3>
                            <p className="services__item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </li>
                        <li className="services__item">
                            <img 
                            className="services__item-img" 
                            src="/services-img-3.jpg" 
                            alt="services img 3" 
                            width={70} 
                            height={75}
                            />
                            <h3 className="services__item-title">FACTORY CONSTRUCTION AND MODELING</h3>
                            <p className="services__item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services