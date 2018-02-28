import React from 'react';
        import Main from "../Main";
        import {connect} from "react-redux";
        import Modal from "../layouts/Modal";
        import {InputForm} from "../Form/InputForm";
        import {Table} from "../Table/Table";
        import {getCategories,putCategories,postCategories,deleteCategories} from "../../redux/categories/actions";
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
                this.beforeModalSetId = this.beforeModalSetId.bind(this);
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

        modalPutCat(e) {
            this.setState({
                newCategorie: {
                    catName: $('#labelCateg').val()
                }
            });
            this.props.putCategories($('#labelCateg').val());
            //on reset le champ
            $('#labelCateg').val('');
        }
        
        beforeModalSetId(e) {
             this.setState({
                categorie: {
                    catId: e.target.parentElement.dataset["id"],
                    catName: e.target.parentElement.dataset["name"]
                }
            });
            console.log('here');
        }
        
        modalDeleteCat(e) {
            this.props.deleteCategories(this.state.categorie.catId);
            console.log("delete modal reaction");
        }
        
        modalPostCat(e) {
            var label = $('#editLabelCateg').val();
            this.props.postCategories(this.state.categorie.catId,label);
            console.log("post modal reaction");
        }
        

        render() {

        const styleAddCat = {
        position: 'absolute',
                right: '16px',
                top: '140px'
        };
                const headerTableCat = ["Categorie name", "Actions", "Sous-Categorie"];
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
    <a className="btn btn-primary" style={styleAddCat} href="#" data-toggle="modal" data-target="#createCat">
        <i className={"fa fa-fw fa-plus"}>  </i>
        Ajouter une categorie
    </a>


    <hr />

    <div className="card mb-3">
        <div className="card-body">
            <Table header={headerTableCat}>
                {this.props.state.categories.map((u, i) =>
                <tr key={u._id}>
                    <td>{u.nom}</td>
                    <td>
                        <a href="#" data-toggle="modal" onClick={this.beforeModalSetId} data-name={u.nom} data-id={u._id} data-target="#editCategorie">
                            <i className={"fa fa-fw fa-edit"}> </i>
                        </a>
                        <a href="#" data-toggle="modal" onClick={this.beforeModalSetId} data-name={u.nom} data-id={u._id} data-target="#deleteCategorie">
                            <i className={"fa fa-fw fa-ban"}> </i>
                        </a>

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

    <Modal id={"createCat"}
           title={"Ajouter une catégorie"}
           titleButton={"Create"}
           onClick={this.modalPutCat.bind(this)}
           >
        <form role="form">
            <InputForm type="text"
                       htmlFor="labelCateg"
                       label="Label"
                       id="labelCateg"
                       placeholder="Label"
                       />
        </form>
    </Modal>

<Modal id={"editCategorie"}
       title={"Modifier la catégorie "+ this.state.categorie.catName}
       titleButton={"Create"}
       onClick={this.modalPostCat.bind(this)}
       data-id={this.state.categorie.catId}
       >
       <form role="form">
        <InputForm type="text"
                   htmlFor="labelCateg"
                   label="Label"
                   id="editLabelCateg"
                   value={this.state.categorie.catName}
                   />
        </form>
</Modal>

<Modal id={"deleteCategorie"}
       title={"Supprimer la catégorie "+ this.state.categorie.catName}
       titleButton={"Supprimer"}
       onClick={this.modalDeleteCat.bind(this)}
       >
       <b>Etes vous sûr de vouloir supprimer la catégorie, ainsi que toutes les sous-categories et items liés ?</b>
</Modal>




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
putCategories: (label) => dispatch(putCategories(label)),
        deleteCategories: (id) => dispatch(deleteCategories(id)),
        postCategories: (id, label) => dispatch(postCategories(id, label)),
        getCategories: () => dispatch(getCategories()),
        getSousCategories: (id) => dispatch(getSousCategories(id))
        }
};
        export default connect(mapStateToProps, mapDispatchToProps)(Categories)

