import React from 'react';

export class SelectForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="form-group">
                <label htmlFor={this.props.for}>{this.props.label}</label>
                <select className="form-control" id={this.props.id}>
                    <option value={0} key={0}> Choose </option>
                    {this.props.value.map((v, i) =>
                        <option value={i + 1} key={v._id}> {v.nom} </option>
                    )}
                </select>
            </div>
        )
    }
}

