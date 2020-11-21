import React from 'react';
import Modal from 'react-modal';
import crossMark from '../../images/icon/cross-mark.png';
import './LoginForm.scss'

const customStyles = {
    content: {
        top: '50%',
        left: 'auto',
        right: '30%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '100vh',
        border: 'none',
        borderRadius: '0',
        width: '35%'
    },
    overlay: {
        backgroundColor: 'rgba(11, 11, 24, 0.6)'
    }
};

Modal.setAppElement('#root')

const LoginForm = ({ modalIsOpen, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="d-flex justify-content-between login-header">
                    <h3>Login</h3>
                    <button className="close-btn" onClick={closeModal}><img src={crossMark} alt="" /></button>
                </div>
                <div className="form-body">
                    <h4>Student</h4>
                    <hr className="line" />
                    <form className="form-content">
                        <div class="form-group mx-sm-3 mb-2">
                            <input type="email" className="form-control mb-3 form-input" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <input type="password" className="form-control form-input" id="inputPassword2" placeholder="Password" />
                        </div>
                        <p>Forgot Password?</p>
                        <div className="login-form-btn text-center">
                            <button>Login</button>
                            <p>New to MyWays? Sign Up here</p>
                        </div>
                        
                    </form>
                </div>

            </Modal>
        </div>
    );
};

export default LoginForm;