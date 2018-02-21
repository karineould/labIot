import React from 'react';
import NavBar from "./layouts/NavBar";
import ScrollButton from "./layouts/ScrollButton";
import Modal from "./layouts/Modal";
import Footer from "./layouts/Footer";

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                    <Footer/>
                    <ScrollButton/>
                    <Modal/>
                </div>
            </div>
        );
    }
}

