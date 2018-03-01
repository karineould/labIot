import React from 'react';

export class InputForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: this.props.error || false,
            errorMessage: this.props.errorMessage || false,
            htmlFor: this.props.htmlFor || '',
            label: this.props.label || '',
            id: this.props.id || '',
            type: this.props.type || '',
            placeholder: this.props.placeholder || ''
        }
    }

    render() {

        const errorMessage = this.state.errorMessage ? (
            <small className="text-danger">
                {this.state.errorMessage}
            </small>
        ) : '';

        if (this.state.error) {
             return (
                 <div className="form-group">
                     <label className="text-danger" htmlFor={this.state.htmlFor}>{this.state.label}</label>
                     <input className="form-control is-invalid"
                            id={this.state.id}
                            onChange={this.props.onChange}
                            type={this.state.type}
                            placeholder={this.state.placeholder}
                     />
                     {errorMessage}
                 </div>
            );
        }

        return (
            <div className="form-group">
                <label htmlFor={this.state.htmlFor}>{this.state.label}</label>
                <input className="form-control"
                       id={this.state.id}
                       onChange={this.props.onChange}
                       type={this.state.type}
                       placeholder={this.state.placeholder}
                />
            </div>
        )
    }
}
