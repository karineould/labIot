import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {SelectForm} from "../Form/SelectForm";
import {Table} from "../Table/Table";
import {getItems} from "../../redux/items/actions";
import {getCategories} from "../../redux/categories/actions";
let QRCode = require('qrcode-react');

export class Materiels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {
                catId: false,
                catName: {
                    value:"",
                    error: false,
                    message: ""
                },
                sousCatName: {
                    value:"",
                    error: false,
                    message: ""
                },
                name: {
                    value:"",
                    error: false,
                    message: ""
                },
                quantite:  {
                    value:"",
                    error: false,
                    message: ""
                }
            }
        };

    }

    change(e) {

    }

    render() {
        const styleAddItem = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };

        const headerTable =  ["Name", "Categorie", "Sous-categorie", "Quantité", "QRcode", "Update", "Delete"];

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
                <a className="btn btn-primary" style={styleAddItem} href="#" data-toggle="modal" data-target="#createItem">
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
                                    <td><QRCode value={u._id} /></td>
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

                <Modal id={"createItem"}
                       title={"Create Item"}
                       titleButton={"Create"}
                       error={this.state.item.catName.error}
                       // onClick={this.saveItem.bind(this)}
                >
                    <form role="form">
                        <InputForm type="text"
                                   htmlFor="itemName"
                                   label="Item name"
                                   onChange={this.change.bind(this)}
                                   id="itemName"
                                   error={this.state.item.catName.error}
                                   errorMessage={this.state.item.catName.message}
                                   placeholder="Enter category name"
                        />

                        <SelectForm id={"itemCat"}
                                    for={""}
                                    label="Item category"
                                    value={this.props.state.categories}
                        />

                        <InputForm type="text"
                                   htmlFor="inputQuantite"
                                   label="Item quantity"
                                   onChange={this.change.bind(this)}
                                   id="itemQte"
                                   error={this.state.item.quantite.error}
                                   errorMessage={this.state.item.quantite.message}
                                   placeholder="Enter quantity"
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
        getItems: () => dispatch(getItems()),
        getCategories: () => dispatch(getCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Materiels)
