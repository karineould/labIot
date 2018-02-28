import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {Table} from "../Table/Table";
import {getItems} from "../../redux/items/actions";

export class Materiels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: {
                catId: false,
                catName: "",
                error: false,
                message: ""
            }
        };

    }

    render() {
        const styleAddItem = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };

        const headerTable =  ["Name", "Categorie", "Sous-categorie", "Quantité", "Update", "Delete"];

        const getCat = (categorie) => (
            <td>{categorie ? categorie.nom : ''}</td>

        );

        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Materiels</a>
                    </li>
                    <li className="breadcrumb-item active">Materiels</li>
                </ol>
                <h1>Materiels</h1>
                <a className="btn btn-primary disabled" style={styleAddItem} href="#" data-toggle="modal" data-target="#createItem">
                    <i className={"fa fa-fw fa-plus"}>  </i>
                    add Item
                </a>


                <hr />

                <div className="card mb-3">
                    <div className="card-body">
                        <Table header={headerTable}>
                            {this.props.state.items.map((u, i) =>
                                <tr key={u._id}>
                                    <td>{u.nom}</td>
                                    {getCat(u.categorie)}
                                    {getCat(u.sousCategorie)}
                                    <td>{u.quantite}</td>
                                    <td>
                                        <i className={"fa fa-fw fa-edit"}> </i>
                                        {/*<a href="#" data-toggle="modal" data-name={u.name} data-id={u._id} data-target="#deleteCategorie">*/}
                                        {/*<i className={"fa fa-fw fa-trash"}> </i>*/}
                                        {/*</a>*/}
                                    </td>
                                    <td>
                                        <a href="#" data-toggle="modal"  data-name={u.nom} data-id={u._id} data-target="#deleteItem">
                                            <i className={"fa fa-fw fa-trash"}> </i>
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
        getItems: () => dispatch(getItems()),
        // getSousCategories: (id) => dispatch(getSousCategories(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Materiels)
