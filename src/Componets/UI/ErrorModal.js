import React from 'react'
import ReactDOM  from 'react-dom';
import Card from './Card';
import style from './ErrorModal.module.css'

const Backdrop = ()=>{
    return  <div className={style.backdrop} ></div>
}

const Modal = (props)=>{
    return     <Card cssClass={style.modal}>
    <header className={style.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={style.content}>
        <p>{props.message}</p>
    </div>
    <footer className={style.actions}>
        <button onClick={props.onConfirm} className={style.userButton +' ' + 'btn'}>Close</button>
    </footer>
</Card>
}


 const ErrorModal = (props) => {
    return (
        <React.Fragment>
           {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdropRoot'))}
           {ReactDOM.createPortal(<Modal 
            title={props.title} 
            message={props.message} 
            onConfirm={props.onConfirm}/>,
            document.getElementById('modalRoot'))}
        </React.Fragment>
    )
}
export default ErrorModal;