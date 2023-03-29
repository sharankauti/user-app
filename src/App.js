
import React,{useState} from 'react';
import UserListItem from './Componets/userLists/UserListItem';
import AddUser from './Componets/Users/AddUser';
function App() {
  const [defaultValue,setValue] = useState([])
  const dataHandler = (userData)=>{
      console.log(userData);
      setValue((prev)=>{
        return[userData,...prev]
      })
  }
  return (
      <React.Fragment>
        <h3 className='my-4 text-center text-white text-uppercase'>Simple User Form</h3>
        <AddUser getUserData={dataHandler}></AddUser>
        <UserListItem userPointer={defaultValue}></UserListItem>
      </React.Fragment>
  );
}

export default App;
