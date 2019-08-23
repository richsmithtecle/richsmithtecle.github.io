import React, { Component } from 'react';

class AnnoyingForm extends Component {
    handleKeyUp(evt) {
        if(evt.keyCode === 56) {
            alert(" ************ LONG LIVE THE '*' CHARACTER!! ******************");
        } else {
            alert("NOT MY FAVORITE KEY....")
        }
    }
    render() {
        return(
            <div>
                <h3>Try typing in here:</h3>
                <textarea onKeyUp={this.handleKeyUp}></textarea>
            </div>
        );
    }
}

export default AnnoyingForm;
