import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {Table} from "../Table/Table";
import {getCategories} from "../../redux/categories/actions";
import {getSousCategories} from "../../redux/sousCategories/actions";

export class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categorie: {
                catId: false,
                catName: "",
                error: false,
                message: ""
            }
        };

        this.modalfetchSousCat = this.modalfetchSousCat.bind(this);
    }

    modalfetchSousCat(e) {
        this.setState({
            categorie: {
                catId: e.target.parentElement.dataset["id"],
                catName: e.target.parentElement.dataset["name"],
                error: false,
                message: ""
            }
        });

        this.props.getSousCategories(e.target.parentElement.dataset["id"]);
    }

    render() {

        const styleAddCat = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };

        const headerTableCat =  ["Categorie name", "Delete", "Sous-Categorie"];

        const headerTableSousCat = ["Name", "Delete"];

        const contentSousCat = this.props.state.sousCategories.length > 0 ? (
            <Table header={headerTableSousCat}>
                {this.props.state.sousCategories.map((u, i) =>
                    <tr key={u._id}>
                        <td>{u.nom}</td>
                        <td>
                            <i className={"fa fa-fw fa-ban"}> </i>
                            {/*<a href="#" data-toggle="modal" data-name={u.name} data-id={u._id} data-target="#deleteCategorie">*/}
                            {/*<i className={"fa fa-fw fa-trash"}> </i>*/}
                            {/*</a>*/}
                        </td>
                    </tr>
                )}
            </Table>
        ) : (
            <div>
                Aucune sous-categorie !
            </div>
        );

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
                        <Table header={headerTableCat}>
                            {this.props.state.categories.map((u, i) =>
                                <tr key={u._id}>
                                    <td>{u.nom}</td>
                                    <td>
                                        <i className={"fa fa-fw fa-ban"}> </i>
                                        {/*<a href="#" data-toggle="modal" data-name={u.name} data-id={u._id} data-target="#deleteCategorie">*/}
                                            {/*<i className={"fa fa-fw fa-trash"}> </i>*/}
                                        {/*</a>*/}
                                    </td>
                                    <td>
                                        <a href="#" data-toggle="modal" onClick={this.modalfetchSousCat} data-name={u.nom} data-id={u._id} data-target="#showSousCategorie">
                                            <i className={"fa fa-fw fa-eye"}> </i>
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </Table>
                    </div>

                </div>

                <Modal id={"showSousCategorie"}
                       title={"Sous Categorie de " + this.state.categorie.catName}
                       titleButton={"OK"}
                       // data={this.state.categorie.catId}
                       // onClick={this.deleteUser.bind(this)}
                >
                    {contentSousCat}
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
        // putUser: (userEmail, password) => dispatch(putUser(userEmail, password)),
        // deleteUser: (id) => dispatch(deleteUser(id)),
        getCategories: () => dispatch(getCategories()),
        getSousCategories: (id) => dispatch(getSousCategories(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

