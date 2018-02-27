import React from 'react';
import Main from "../Main";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {connect} from "react-redux";
import {Table} from "../Table/Table";
import {putUser} from "../../redux/user/actions";
import {getUsers} from "../../redux/users/actions";

export class Users extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userEmail: {
                value: "",
                error: false,
                message: ""
            },
            password:  {
                value: "",
                error: false,
                message: ""
            },

        };
    }

    componentDidUpdate(){
        this.props.getUsers();
    }

    handleClick(e) {
        e.preventDefault();
        this.props.putUser(this.state.userEmail.value, this.state.password.value);
        console.log('save user');
    }

    change(e) {
        let reg = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        if (e.target.id === "inputEmail"){
            if (reg.test(e.target.value) === false) {
                this.setState({
                    userEmail: {
                        value: "",
                        error: true,
                        message: "Invalid Email"
                    }
                })

            } else {
                this.setState({
                    userEmail: {
                        value: e.target.value,
                        error: false,
                        message: ""
                    }
                })
            }
        } else {
            if ((e.target.value).length < 5){
                this.setState({
                    password: {
                        value: "",
                        error: true,
                        message: "To short password"
                    }
                })
            } else {
                this.setState({
                    password: {
                        value: e.target.value,
                        error: false,
                        message: ""
                    }
                })
            }

        }
    }

    render() {

        const styleAddUser = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };

        const addUser = this.props.state.auth.isAdmin ? (
            <a className="btn btn-primary" style={styleAddUser} href="#" data-toggle="modal" data-target="#createUser">
                <i className={"fa fa-fw fa-plus"}>  </i>
                add User
            </a>
        ) : '';

        const updateField = this.props.state.auth.isAdmin ? (
            <td><i className={"fa fa-fw fa-edit"}> </i> </td>
        ) : '';

        const deleteField = this.props.state.auth.isAdmin ? (
            <td><i className={"fa fa-fw fa-trash"}> </i> </td>
        ) : '';

        const headerTable =  this.props.state.auth.isAdmin ? ["User name", "Admin", "Update", "Delete"] : ["User name", "Admin"]

        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item active">Utilisateurs</li>
                </ol>
                <h1>Utilisateurs</h1>
                {addUser}
                <hr />

                <div className="card mb-3">
                    <div className="card-body">
                        <Table header={headerTable}>
                                {this.props.state.users.map((u, i) =>
                                    <tr key={u._id}>
                                        <td>{u.email}</td>
                                        <td>{u.admin ?
                                            <i className={"fa fa-fw fa-check-circle"}> </i>
                                            : <i className={"fa fa-fw fa-times"}> </i>}
                                            </td>
                                        {updateField}
                                        {deleteField}
                                    </tr>
                                )}
                        </Table>
                    </div>

                </div>

                <Modal id={"createUser"}
                       title={"Create User"}
                       titleButton={"Create"}
                       onClick={this.handleClick.bind(this)}
                >
                    <form role="form">
                        <InputForm type="email"
                                   htmlFor="inputEmail"
                                   label="Email address"
                                   onChange={this.change.bind(this)}
                                   id="inputEmail"
                                   error={this.state.userEmail.error}
                                   errorMessage={this.state.userEmail.message}
                                   placeholder="Enter email"
                        />
                        <InputForm type="password"
                                   htmlFor="inputPassword"
                                   label="Password"
                                   onChange={this.change.bind(this)}
                                   id="inputPassword"
                                   error={this.state.password.error}
                                   errorMessage={this.state.password.message}
                                   placeholder="Password"
                        />
                    </form>
                </Modal>
            </Main>
        );
    }
}

const mapStateToProps = function(state) {
    return {state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        putUser: (userEmail, password) => dispatch(putUser(userEmail, password)),
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
