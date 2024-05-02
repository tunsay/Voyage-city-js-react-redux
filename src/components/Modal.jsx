import PropTypes from 'prop-types';
import "./Modal.css"
import { useRef } from 'react';

const Modal = ({ onClose }) => {

    const passwordRef = useRef(null);
    const messageRef = useRef(null);
    const letterRef = useRef(null);
    const capitalRef = useRef(null);
    const numberRef = useRef(null);
    const lengthRef = useRef(null);


    const handleFocus = () => {
        if (passwordRef.current) {
            messageRef.current.style.display = "block";
        }
    };

    const handleBlur = () => {
        if (passwordRef.current) {
            messageRef.current.style.display = "none";
        }
    };

    const handleKeyUp = () => {
        var lowerCaseLetters = /[a-z]/g
        var upperCaseLetters = /[A-Z]/g
        var numbers = /[0-9]/g

        if (passwordRef.current.value.match(lowerCaseLetters)) {
            letterRef.current.classList.remove('invalid');
            letterRef.current.classList.add('valid');
        } else {
            letterRef.current.classList.remove('valid');
            letterRef.current.classList.add('invalid');
        }

        if (passwordRef.current.value.match(upperCaseLetters)) {
            capitalRef.current.classList.remove('invalid');
            capitalRef.current.classList.add('valid');
        } else {
            capitalRef.current.classList.remove('valid');
            capitalRef.current.classList.add('invalid');
        }

        if (passwordRef.current.value.match(numbers)) {
            numberRef.current.classList.remove('invalid');
            numberRef.current.classList.add('valid');
        } else {
            numberRef.current.classList.remove('valid');
            numberRef.current.classList.add('invalid');
        }

        if (passwordRef.current.value.length >= 8) {
            lengthRef.current.classList.remove('invalid');
            lengthRef.current.classList.add('valid');
        } else {
            lengthRef.current.classList.remove('valid');
            lengthRef.current.classList.add('invalid');
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = passwordRef.current.value;
        console.log(inputValue);
    };


    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black">
            <div className="w-90 bg-sky-800 rounded-2xl p-5 shadow-md max-w-[600px] flex flex-col items-center justify-center min-h-screen">
                <h1>Se connecter</h1>
                <div className='bg-white w-35 h-35 px-5 py-10 rounded shadow-md'>
                    <form className='flex flex-col rounded' onSubmit={handleSubmit} action="">
                        <label>Utilisateur</label>
                        <input type="text" className='px-3 py-2 border bg-white border-gray-300 outline-none rounded-md mt-5 mb-6' required />
                        <label>Mot de passe</label>
                        <input type="password" onKeyUp={handleKeyUp} onBlur={handleBlur} onFocus={handleFocus} ref={passwordRef} id="psw" className='px-3 py-2 border bg-white border-gray-300 outline-none rounded-md mt-5 mb-6' required />
                        <input type='submit' className='bg-sky-800 border-solid text-white rounded' value="Envoyé" />
                    </form>
                </div>

                <div id='message' ref={messageRef} className="hidden flex-col bg-white rounded-md w-350 text-black p-5 mt-10" style={{ letterSpacing: "0.5px" }}>
                    <h3 className=' text-base font-normal'>Le mot de passe doit contenir les éléments suivants :</h3>
                    <p id="letter" ref={letterRef} className='invalid'>Une lettre minusucle</p>
                    <p id="capital" ref={capitalRef} className='invalid'>Une lettre majuscule</p>
                    <p id="number" ref={numberRef} className='invalid'>Un chiffre</p>
                    <p id="length" ref={lengthRef} className='invalid'>8 caractères minimum</p>
                </div>

                <button onClick={onClose}>Fermer</button>
            </div>
        </div>


    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;