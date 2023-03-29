import React,{useState,useRef} from 'react'
import Card from '../UI/Card'
import Wrapper from '../Helpers/Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
 const AddUser = (props)=> {

   
    const [error,setError] = useState()
    const nameInput = useRef();
    const ageInput = useRef();
    const userFormHandler = (event)=>{
        event.preventDefault()
        const userInputValue = nameInput.current.value;
        const userAgeValue = ageInput.current.value;
        if (userInputValue.trim().length === 0 || userAgeValue.trim().length ===0) {
            setError({
                title:"Invalid Inputs",
                message:"Please enter valid Inputs Name and Age should be Non-empty"
            })
            return;
        }

        if (+userAgeValue < 1) {
            setError({
                title:"Invalid Age",
                message:"Age should be greater than 0 (>0)"
            })
            return;
        }

        
    
        const userData = {
            text:userInputValue,
            age:userAgeValue,
            key:Math.random().toString()
        }
        props.getUserData(userData);
        nameInput.current.value = '';
        ageInput.current.value = '';
    }
    const errorHandler = () =>{
        setError(null)
    }

    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
       <Card cssClass={style.shadow}>
            <form onSubmit={userFormHandler}>
                <div className='form-group mb-4'>
                    <label htmlFor='userInput' className={style.UserLabel}>Username</label>
                    <input type='text' 
                    id='userInput' 
                    className={style.input + ' ' + 'form-control'}
                    ref={nameInput}
                    />
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor="userAge" className={style.UserLabel}>Age (in Years)</label>
                    <input type='number' 
                     id='userAge' 
                    className={style.input + ' ' + 'form-control'}
                    ref={ageInput}
                    />
                </div>
                <div className='form-group'>
                   <button type='submit' className={style.userButton +' '+ 'btn'}  >AddUser</button>
                </div>
            </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser;