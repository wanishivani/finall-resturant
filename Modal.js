import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import './Modal.css';
const Backdrop =(props)=>{
return<div className='backdrop' onClick={props.onClose}/>

    
}
const ModalOverlay=(props)=>{
    return( 
        <div className='modal'>
        <div className='content'>{props.children}</div>
        </div>
        )
}
const Portal=document.getElementById('over-lays');

const Modal =(props)=>{
    return(
<Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,Portal)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,Portal)}

</Fragment>
 )   
};
export default Modal;