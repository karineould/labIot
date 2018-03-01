import React from 'react';
import Main from "../Main";
import {connect} from "react-redux";
import Modal from "../layouts/Modal";
import {InputForm} from "../Form/InputForm";
import {SelectForm} from "../Form/SelectForm";
import {Table} from "../Table/Table";
import {getItems, putItem} from "../../redux/items/actions";
import {getCategories} from "../../redux/categories/actions";
import {resetSousCategories} from "../../redux/sousCategories/actions";
import {getSousCategories} from '../../redux/sousCategories/actions';

let QRCode = require('qrcode-react');

export class Materiels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            catName: {
                value:"",
                error: false,
                message: ""
            },
            sousCatName: {
                value: false,
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
        };

        this.beforeModal = this.beforeModal.bind(this);
    }

    beforeModal() {
        this.props.resetSousCategories();

        $('#itemName').val('');
        $('#itemCat').val('0');
        $('#itemSousCat').val('0');
        $('#itemQte').val('');

        this.setState({
            catName: {
                value:"",
                error: false,
                message: ""
            },
            sousCatName: {
                value: false,
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
        });
    }

    saveItem(){

        this.props.putItem(
            this.state.name.value,
            this.state.catName.value,
            this.state.sousCatName.value,
            this.state.quantite.value
        )
    }

    change(e) {
        if (e.target.id === "itemName"){
            if ((e.target.value).length > 0){
                this.setState({
                    name: {
                        value: e.target.value,
                        error: false,
                        message: ""
                    }
                });
            } else {
                this.setState({
                    name: {
                        value: '',
                        error: true,
                        message: "Ce champs ne peut pas être vide"
                    }
                });
            }
        }

        if (e.target.id === "itemQte"){
            let reg = /^[1-9]\d*$/;
            if ((e.target.value).length < 0){
                this.setState({
                    quantite: {
                        value: '',
                        error: true,
                        message: "Ce champs ne peut pas être vide"
                    }
                });
            } else if (reg.test(e.target.value) === false) {
                this.setState({
                    quantite: {
                        value: '',
                        error: true,
                        message: "Ce champs doit être un nombre superieur à 0"
                    }
                });
            } else {
                this.setState({
                    quantite: {
                        value: e.target.value,
                        error: false,
                        message: ""
                    }
                });
            }
        }


    }

    changeCat(e) {
        e.preventDefault();

        if (e.target.value === '0'){
            this.setState({
                catName: {
                    value: '',
                    error: true,
                    message: "Veuillez selectionner une categorie"
                }
            });
            this.props.resetSousCategories();
        } else {
            this.setState({
                catName: {
                    value: e.target.value,
                    error: false,
                    message: ""
                }
            });
            this.props.getSousCategories(e.target.value);
        }


    }

    changeSousCat(e) {
        e.preventDefault();

        if (e.target.value !== '0'){
            this.setState({
                sousCatName: {
                    value: e.target.value,
                    error: false,
                    message: ""
                }
            });
        } else {
            this.setState({
                sousCatName: {
                    value: false,
                    error: false,
                    message: ""
                }
            });
        }
    }

    render() {
        const styleAddItem = {
            position: 'absolute',
            right: '16px',
            top: '140px'
        };

        const headerTable =  ["Name", "Categorie", "Sous-categorie", "Quantité", "QRcode", "Actions"];

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
                <a className="btn btn-primary" style={styleAddItem} href="#" onClick={this.beforeModal} data-toggle="modal" data-target="#createItem">
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
                                        <a href="#" data-toggle="modal" data-name={u.nom} data-id={u._id} data-target="#deleteItem">
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
                       error={(this.state.catName.error || this.state.name.error || this.state.quantite.error)}
                       onClick={this.saveItem.bind(this)}
                >
                    <form role="form">
                        <InputForm type="text"
                                   htmlFor="itemName"
                                   label="Item name"
                                   onChange={this.change.bind(this)}
                                   id="itemName"
                                   error={this.state.name.error}
                                   errorMessage={this.state.name.message}
                                   placeholder="Entrer un nom de categorie"
                        />

                        <SelectForm id={"itemCat"}
                                    for={"itemCat"}
                                    label="Categorie de l'item"
                                    value={this.props.state.categories}
                                    onChange={this.changeCat.bind(this)}
                                    error={this.state.catName.error}
                                    errorMessage={this.state.catName.message}
                        />

                        <SelectForm id={"itemSousCat"}
                                    for={"itemSousCat"}
                                    label="Sous categorie de l'item"
                                    value={this.props.state.sousCategories}
                                    onChange={this.changeSousCat.bind(this)}
                                    error={false}
                                    errorMessage={false}
                        />

                        <InputForm type="text"
                                   htmlFor="inputQuantite"
                                   label="Item quantity"
                                   onChange={this.change.bind(this)}
                                   id="itemQte"
                                   error={this.state.quantite.error}
                                   errorMessage={this.state.quantite.message}
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
        getCategories: () => dispatch(getCategories()),
        resetSousCategories: () => dispatch(resetSousCategories()),
        getSousCategories: (id) => dispatch(getSousCategories(id)),
        putItem: (nom, categorie, sousCategorie, quantite) => dispatch(putItem(nom, categorie, sousCategorie, quantite))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Materiels)
