import {Fragment} from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div
        // className={classes.backdrop}
        className={'fixed top-0 left-0 w-full h-screen z-20 bg-[#000000BF]'}
        onClick={props.onClose}
    />
};

const ModalOverlay = props => {
    return (
        // <div className={classes.modal}>
        <div className={'fixed top-[20vh] left-[5%] w-11/12 bg-white p-4 rounded-2xl z-30 shadow-[0_2px_8px_rgba(0,0,0,0.25)] animate-slide_down'}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose}/>,
            portalElement
        )}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
};

export default Modal;