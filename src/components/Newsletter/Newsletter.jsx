import './Newsletter.css'

const Newsletter = () => {
    return (
        <section className='newsletter' id='contact'>
            <div className="container">
                <div className='newsletter__wrapper'>
                    <h2 className='newsletter__title'>Newsletter Signup</h2>
                    <form className='newsletter__form' action="https://echo.htmlacademy.ru" target='_blank'>
                        <input
                            className='newsletter__input'
                            type="email"
                            name='email'
                            placeholder='test@youremail.com'
                            required
                        />

                        <button className='newsletter__btn' type='submit'>SIGNUP</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter