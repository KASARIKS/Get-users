import React from 'react'
import { connect } from 'react-redux'
import { getUsersThunkCreator, setIsCheckedActionCreator } from '../state/users_reducer'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    render() {
        return (
            <>
                <UsersList
                    usersData={this.props.usersData}
                    getUsers={this.props.getUsers}
                    isChecked={this.props.isChecked}
                    setIsChecked={this.props.setIsChecked} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        isChecked: state.users.isChecked,
    }
}

let callbacks = {
    getUsers: getUsersThunkCreator,
    setIsChecked: setIsCheckedActionCreator,
}


export default connect(mapStateToProps, callbacks)(UsersListContainer)