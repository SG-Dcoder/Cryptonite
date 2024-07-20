import React from 'react'

const Footer = () => {
    return (
        <div><footer className="footer p-10 bg-base-200 text-base-content poppinsFont">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover md:text-lg text-base">Branding</a>
                <a className="link link-hover md:text-lg text-base">Design</a>
                <a className="link link-hover md:text-lg text-base">Marketing</a>
                <a className="link link-hover md:text-lg text-base">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover md:text-lg text-base">About us</a>
                <a className="link link-hover md:text-lg text-base">Contact</a>
                <a className="link link-hover md:text-lg text-base">Jobs</a>
                <a className="link link-hover md:text-lg text-base">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover md:text-lg text-base">Terms of use</a>
                <a className="link link-hover md:text-lg text-base">Privacy policy</a>
                <a className="link link-hover md:text-lg text-base">Cookie policy</a>
            </div>
        </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className='font-semibold text-2xl'> BUILT BY SURAJ<br /> </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
        <a href="https://x.com/surajgh33065593" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/_surajghosh_/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.976.976 1.25 2.243 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.976.976-2.243 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.976-.976-1.25-2.243-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.976-.976 2.243-1.25 3.608-1.312 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.333.061-2.75.35-3.798 1.398s-1.337 2.465-1.398 3.798c-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.061 1.333.35 2.75 1.398 3.798s2.465 1.337 3.798 1.398c1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.333-.061 2.75-.35 3.798-1.398s1.337-2.465 1.398-3.798c.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.061-1.333-.35-2.75-1.398-3.798s-2.465-1.337-3.798-1.398c-1.28-.059-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"></path>
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/sg-dcoder/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-3.033-4-2.8-4 0v5.5h-3v-10h3v1.537c1.396-2.586 7-2.777 7 2.476v5.987z"></path>
            </svg>
        </a>
    </div>
</div>

            </footer></div>
    )
}

export default Footer