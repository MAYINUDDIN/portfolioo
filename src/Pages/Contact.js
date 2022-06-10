import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail_template', form.current, 'aCAajmayDPpvp2O_t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="name" />
        //     <label>Name</label>
        //     <input type="text" name="subject" />
        //     <label>Email</label>
        //     <input type="email" name="email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input className='btn btn-primary' type="submit" value="Send" />
        // </form>
        <div className='justify-center flex mt-16'>
            <div className='shadow-lg w-96 p-5 '>
                <h1 className='text-primary text-xl font-bold drop-shadow'>Contact with me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='mt-3'>
                        <input type="text" placeholder="Subject" name='subject' class="input input-bordered input-error w-full max-w-xs" required />
                    </div>
                    <div className='mt-3'>
                        <input type="text" placeholder="Your Name" name='name' class="input input-bordered input-error w-full max-w-xs" resource='' />
                    </div>
                    <div className='mt-3'>
                        <input type="text" value='mayindiu@gmail.com' name='email' class="input input-bordered input-error w-full max-w-xs" />
                    </div>
                    <div className='mt-3'>
                        <input type="text" placeholder="Message" name='message' class="input input-bordered input-lg w-full max-w-xs" />
                    </div>

                    <button className='btn btn-primary text-white btn-md mt-5 px-16 rounded font-bold'>Send</button>
                </form>
            </div>
        </div>



    );
};

export default Contact; 