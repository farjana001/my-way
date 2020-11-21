import React, { useState } from 'react';
import './SignUpForm.scss';
import Modal from 'react-modal';
import crossMark from '../../images/icon/cross-mark.png';
import OtpForm from '../OtpForm/OtpForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '15px',
        width: '48%'
    },
    overlay: {
        backgroundColor: 'rgba(11, 11, 24, 0.6)'
    }
};

Modal.setAppElement('#root')

const SignUpForm = ({ signUpModalIsOpen, closeSignUpModal }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(e) {
        setIsOpen(true);
        e.preventDefault();
    }

    function closeModal(e) {
        setIsOpen(false);
        e.preventDefault();
    }

    return (
        <div>
            <Modal
                isOpen={signUpModalIsOpen}
                onRequestClose={closeSignUpModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="text-right sign-up-cross">
                    <button className="close-btn" onClick={closeSignUpModal}><img src={crossMark} alt="" /></button>
                </div>
                <div className="sign-up-form">
                    <h3>Sign Up</h3>
                    <p>It's quick and easy</p>
                    <form className="mx-auto">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control form-input" placeholder="First Name" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="text" className="form-control form-input" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" className="form-control form-input" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="password" className="form-control form-input" placeholder="Password" />
                        </div>
                        <div className="sign-up-form-btn text-center">
                            <button onClick={openModal}>Sign in</button>
                        </div>   
                    </form>
                </div>
                <OtpForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default SignUpForm;