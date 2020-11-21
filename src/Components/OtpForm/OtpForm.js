import React, { useState } from 'react';
import './OtpForm.scss';
import Modal from 'react-modal';
import backArrow from '../../images/icon/arrow.png';
import { useHistory } from 'react-router-dom';
import Success from '../Success/Success';

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
        backgroundColor: 'rgba(11, 11, 24, 0.1)'
    }
};

Modal.setAppElement('#root')

const OtpForm = ({ modalIsOpen, closeModal }) => {
    let history = useHistory();

    const [successModalOpen, setSuccessIsOpen] = useState(false);
    function openSuccessModal() {
        setSuccessIsOpen(true);
    }


    function closeSuccessModal(e) {
        setSuccessIsOpen(false);
    }
    const closeSuccess = setTimeout(function () {
        closeSuccessModal();
    }, 2000);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="arrow-btn">
                    <button className="" onClick={() => history.goBack()}><img src={backArrow} alt="" /></button>
                </div>
                <div className="otp-body text-center">
                    <h2>OTP Sent!</h2>
                    <input className="form-control otp-input" placeholder="Enter your OTP" />
                    <p>One time Passcode sent to your email ID- <br /> abc@gmail.com</p>
                    <div className="otp-enter-btn">
                        <button onClick={openSuccessModal}>Enter</button>
                    </div>
                </div>
            </Modal>
            <Success successModalOpen={successModalOpen} closeSuccess={closeSuccess}/>
        </div>
    );
};

export default OtpForm;