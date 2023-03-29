import React from 'react'
import Card from '../UI/Card';
import style from './UserListItem.module.css'
const userListItem = (props) => {
    let loopdata = props.userPointer;
    let displayContent = <p className={style.errorMsg}><i>No data found</i></p>
    if (loopdata.length > 0) {
        displayContent = loopdata.map(users => <li className={style.listBox} key = {users.key}>
            {users.text} ({users.age}) years old 
        </li>)
    }
    return (
        <Card className={style.users}>
            <ul className={style.unorderList}>
              {displayContent}
            </ul>
       </Card>
    )
}

export default userListItem;