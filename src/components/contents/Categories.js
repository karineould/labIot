import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {Table} from "../Table/Table";
import {getCategories} from "../../redux/categories/actions";

export class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categorie: {
                value: "",
                error: false,
                message: ""
            }
        }
    }



    render() {

        const styleAddCat = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };
        const headerTable =  ["Categorie name", "Delete"];

        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Categories</a>
                    </li>
                    <li className="breadcrumb-item active">Categories</li>
                </ol>
                <h1>Categories</h1>
                <a className="btn btn-primary disabled" style={styleAddCat} href="#" data-toggle="modal" data-target="#createCat">
                    <i className={"fa fa-fw fa-plus"}>  </i>
                    add Categorie
                </a>


                <hr />

                <div className="card mb-3">
                    <div className="card-body">
                        <Table header={headerTable}>
                            {this.props.state.categories.map((u, i) =>
                                <tr key={u._id}>
                                    <td>{u.nom}</td>
                                    <td aria-disabled="true">
                                        <a href="#" data-toggle="modal" data-name={u.name} data-id={u._id} data-target="#deleteCategorie">
                                            {/*<i className={"fa fa-fw fa-trash"}> </i>*/}
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </Table>
                    </div>

                </div>
            </Main>
        );
    }
}

const mapStateToProps = function(state) {
    return {state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        // putUser: (userEmail, password) => dispatch(putUser(userEmail, password)),
        // deleteUser: (id) => dispatch(deleteUser(id)),
        getCategories: () => dispatch(getCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

