import React from 'react';
import { Toast } from 'react-bootstrap';

class MyToast extends React.Component {

    render() {
        const toastCss = {
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: '1',
            boxShadow: '0 4px 8px 0 rbga(0,0,0,0.2),0 6px 20px 0 rbga(0,0,0,0.19)'
        };
        return (
            <div style={this.props.show ? toastCss : null}>
                <Toast className={`border text-white ${this.props.type === "success" ? "border-success bg-success" : "border-danger bg-danger"}`} show={this.props.show}>
                    <Toast.Header className={`text-white  ${this.props.type === "success" ? "bg-success " : "bg-danger"}`} closeButton={false}>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Success</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.message}
                    </Toast.Body>
                </Toast>
            </div>

        );
    }
}

export default MyToast;