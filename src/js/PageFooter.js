import React from "react";
import { UilTwitter } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilFacebook } from '@iconscout/react-unicons'
const PageFooter =()=>{

    return (
        <div id="contact">
        <div className="footer-section">
            <div className="bar">

                <h2>Skorzystaj z aplikacji!</h2>
                <p>Zaloguj się już dziś do aplikacji planowania posiłków i skorzystaj z moich rad dotyczących zdrowego i pysznego żywienia. Przed Tobą kilka rad dotyczących układania jadłospisu - niosą one ze sobą sporo profitów.</p>
            </div>
            <div className="bar">

                <h2>Planowanie posiłków to:</h2>
                <ul>
                    <li>Zdrowe menu</li>
                    <li>Piękna sylwetka</li>
                    <li>Mniejszy stres</li>
                    <li>Urozmaicone dania</li>
                </ul>
            </div>
            <div className="bar">

                <h2>Zapisz się do newslettera!</h2>
                <div className="form-section">
                    <input type="text"/>
                    <button className="button-orange">Wyślij</button>

                </div>
                <div className="social-media">
                    <UilFacebook className="social-icon"/>
                    <UilTwitter className="social-icon"/>
                    <UilInstagram className="social-icon"/>
                </div>
            </div>
        </div>
            <div className="copyright-container">
        <p className="copyright-p">Copyright <span className="copyright-span">ZaplanujJedzonko.pl</span></p>
                </div>
        </div>
    )
}

export default PageFooter;
