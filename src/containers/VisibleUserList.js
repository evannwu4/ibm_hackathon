import { connect } from 'react-redux'
import { editUser, deleteUser } from '../redux/actions'
import UserList from '../components/UserList'

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case 'SHOW_INTERNS':
      return users.filter(u => u.EMPLOYEETYPE_ID <= 6)
    case 'SHOW_HR':
      return users.filter(u => u.EMPLOYEETYPE_ID === 8)
    case 'SHOW_MANAGERS':
      return users.filter(u => u.EMPLOYEETYPE_ID === 7)
    default:
      return users
  }
}

const mapStateToProps = state => {
  return {
    users: getVisibleUsers(state.users["items"], state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditClick: id => {
      dispatch(editUser(id))
    },
    onDeleteClick: id => {
      dispatch(deleteUser(id))
    }
  }
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default VisibleUserList
