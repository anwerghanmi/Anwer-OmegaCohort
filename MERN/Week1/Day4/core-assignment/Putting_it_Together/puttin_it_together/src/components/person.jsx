import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    changeAge = () =>{
        this.setState({age : this.state.age +1});
    };
  render() {
    const { firstName, lastName, age , hairColor } = this.props.person;
    return (
        <div>
          
            {this.props.person.map((props, idx)=>{
                return (
                    <div>
                        <h1>{props.firstName}, {props.lastName}</h1>
                        <p>Age {this.state.age}</p>
                        <p>Hair color {props.hairColor}</p>
                        <button onClick={this.changeAge}>birthday button for {props.firstName} {props.lastName}</button>
                    </div>
                )
            })}
        </div>)
     
  }
}
