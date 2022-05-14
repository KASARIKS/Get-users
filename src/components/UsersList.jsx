import React from 'react'
import axios from 'axios'
import './UsersList.css'

const UsersList = (props) => {

    return (
        <div>
            <button onClick={() => {
                props.getUsers()
                props.setIsChecked(true)
            }} disabled={props.isChecked}>Get users</button>

            <ul class="users-list">
                {
                    props.usersData.map((user) =>
                        <li key={user.id} className='users-li'>
                            <div>
                                {user.id + '.' + user.username + '.' + user.email}
                                {user.phone}
                                <button onClick={() => {
                                    axios.post(`${window.location.href}`, {
                                        id: 'sender_id',
                                        time: Date.now(),
                                        liked_user: user,
                                    })
                                }}>
                                    Like
                                </button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UsersList