import React from 'react';
import Modal from 'react-modal';
import checkCircle from '../../images/icon/checkCircle.svg'; 


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

const Success = ({ successModalOpen, closeSuccess }) => {

    return (
        <div>
            <Modal
                isOpen={successModalOpen}
                onRequestClose={closeSuccess}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{padding: '170px 0'}} className="otp-content text-center">
                    <img src={checkCircle} alt=""/>
                    <h4 style={{fontSize: '22px', color: '#000', marginTop: '35px'}}>Thanks. Successful!</h4>
                </div>
            </Modal>
        </div>
    );
};

export default Success;