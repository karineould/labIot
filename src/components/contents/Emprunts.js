import React from 'react';
import Main from "../Main";

export default class Emprunts extends React.Component {

    render() {
        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Emprunts</a>
                    </li>
                    <li className="breadcrumb-item active">Emprunts</li>
                </ol>
                <h1>Emprunts</h1>
            </Main>
        );
    }
}

