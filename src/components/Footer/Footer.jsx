import './Footer.css'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__info'>
                        <h3 className='footer__subtitle'>COMPANY</h3>

                        <img
                            className='footer__img'
                            src="/logo-light.svg"
                            alt="Footer logo image"
                            width={102}
                            height={23}
                        />
                        <p className='footer__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis architecto ad accusamus, dicta debitis eum, quaerat a soluta perferendis numquam reiciendis modi reprehenderit sit unde nulla incidunt. Explicabo, dolor non!
                        </p>
                    </div>

                    <nav className='footer__nav'>
                        <h3 className='footer__subtitle'>LINKS</h3>

                        <div className='footer__links'>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Home</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">About</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Services</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Projects</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Contact us</a>
                                </li>
                            </ul>

                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">FAQ</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Terms</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Careers</a>
                                </li>
                            </ul>

                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Blog</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">Partners</a>
                                </li>
                                <li className='footer__item'>
                                    <a className='footer__link' href="#">News</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='footer__contact'>
                        <h3 className='footer__subtitle'>CONTACT US</h3>
                        <div className='footer__inner'>
                            <address className='footer__addres' >
                                213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name
                            </address>
                            <a className='footer__tel'
                                href="tel:+239942334022"
                                target='_blank'>
                                23 994 233 4022
                            </a>
                            <a className='footer__email'
                                href="mailto:info@konstruct.com"
                                target='_blank'
                            >
                                info@konstruct.com
                            </a>
                        </div>
                    </div>

                    <ul className='footer__social'>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <Facebook width={18} height={18} />
                            </a>
                        </li>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <Twitter width={18} height={18} />
                            </a>
                        </li>
                        <li className='footer__social-item'>
                            <a className='footer__social-link' href="#">
                                <Instagram width={18} height={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <FooterBottom/>
        </>
    )
}

export default Footer