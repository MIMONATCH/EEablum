import React, { Component, Fragment } from 'react';
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            one: 'hello, hahahahah',
            two:'nono!',
            isFlag:true,
        }
    }

    render(){
        return (
            <div>
                <Fragment>
                    <div id="menu">
                    </div>
                </Fragment>
                <h1>{this.state.isFlag ? this.state.one:this.state.two}</h1>
                <button onClick={()=>{
                    this.setState({isFlag:!this.state.isFlag});
                }}>button
                </button>
            </div>

        );
    }

}
export default Home;