import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";

export class Users extends React.Component {


    render() {

        console.log(this.props.state);

        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item active">Utilisateurs</li>
                </ol>
                <h1>Utilisateurs</h1>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>IsAdmin</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.state.users.map((u, i) =>
                                    <tr key={u._id}>
                                        <td>{u.email}</td>
                                        <td>{u.admin ?
                                            <i className={"fa fa-fw fa-check-circle"}> </i>
                                            : <i className={"fa fa-fw fa-times"}> </i>}
                                            </td>
                                        <td><i className={"fa fa-fw fa-edit"}> </i> </td>
                                        <td><i className={"fa fa-fw fa-trash"}> </i> </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </Main>
        );
    }
}

const mapStateToProps = function(state) {
    return {state};
};



export default connect(mapStateToProps)(Users)
