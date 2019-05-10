import React, { Component, Fragment } from 'react';
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            one: 'hello, hahahahah'
        }
    }

    render(){
        return (
            <Fragment>
                <div id="menu">
                </div>
            </Fragment>
        );
    }

}

export default Home;