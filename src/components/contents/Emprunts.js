import React from 'react';
import Main from "../Main";
import {getEmprunts} from "../../redux/emprunts/actions";
import {connect} from "react-redux";
import {Table} from "../Table/Table";

export class Emprunts extends React.Component {

    render() {
        const headerTable =  ["User email", "Item", "Quantite", "Etat", "Date d'empreint"];

        const getItem = (item) => (
            <td>{item ? item.nom : ''}</td>

        );
        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Emprunts</a>
                    </li>
                    <li className="breadcrumb-item active">Emprunts</li>
                </ol>
                <h1>Emprunts</h1>

                <hr />

                <div className="card mb-3">
                    <div className="card-body">
                        <Table header={headerTable}>
                            {this.props.state.emprunts.map((u, i) =>
                                <tr key={u._id}>
                                    <td>{u.user_mail}</td>
                                    {getItem(u.item)}
                                    <td>{u.quantite}</td>
                                    <td>{u.etat}</td>
                                    <td>{u.dateStart}</td>
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
        getEmprunts: () => dispatch(getEmprunts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Emprunts)
