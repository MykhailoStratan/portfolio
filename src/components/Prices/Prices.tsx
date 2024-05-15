import './Contacts.css';
import social from '../../data/social.json';
import { CSSProperties, FC, MouseEventHandler } from 'react';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../SocialLinks/SocialLinks';

// interface FormElements extends HTMLFormControlsCollection {
//     usernameInput: HTMLInputElement
// }
// interface UsernameFormElement extends HTMLFormElement {
//     readonly elements: FormElements
// }

const Prices: FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail: MouseEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const checkFields =
            form.current?.querySelector<HTMLInputElement>('#usernameInput')?.value &&
            form.current?.querySelector<HTMLInputElement>('#usernameEmail')?.value &&
            form.current?.querySelector<HTMLInputElement>('#usernameNumber')?.value;
        if (checkFields) {
            console.log('everything filled');
        } else {
            console.log('nuhia');
        }
        // emailjs.sendForm('service_xb3e2hb', 'template_v05ze2p', form.current!,
        //     'z1YXTwT-sFp7R5tpZ')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <div className="prices-container" id="prices">
            <h1>Prices</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="usernameInput">Name</label>
                <input id="usernameInput" type="text" name="user_name" />
                <label htmlFor="usernameEmail">Email</label>
                <input id="usernameEmail" type="email" name="user_email" />
                <label htmlFor="usernameNumber">Phone number</label>
                <input id="usernameNumber" type="tel" name="user_phone" maxLength={10} pattern="[0-9]{10}" required/>
                <label htmlFor="usernameMessage">Message</label>
                <textarea id="usernameMessage" name="message" />
                <input className="submit" type="submit" value="Send" />
            </form>
            <SocialLinks socialLinks={social} ></SocialLinks>
        </div>
    );
};

export default Prices;