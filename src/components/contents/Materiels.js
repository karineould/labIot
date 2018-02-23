import React from 'react';
import Main from "../Main";

export default class Materiels extends React.Component {

    render() {
        return (
            <Main>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Materiels</a>
                    </li>
                    <li className="breadcrumb-item active">Materiels</li>
                </ol>
                <h1>Materiels</h1>
            </Main>
        );
    }
}

