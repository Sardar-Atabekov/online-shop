import React from 'react';
import {connect} from "react-redux";
import { getAllUsersRequestThunk} from "./actions";
import {UsersComponent} from './component/usersComponent';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.match.url);
  }
  render() {
    return (
      <div>
        <UsersComponent {...this.props}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  getUsers: userId => dispatch(getAllUsersRequestThunk(userId))

})
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)