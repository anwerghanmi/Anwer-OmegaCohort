import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    const { firstName, lastName, age , hairColor } = this.props.person;
    return (
        <div>
          
            {this.props.person.map((element, idx)=>{
                return (
                    <div>
                        <h1>{element.firstName}, {element.lastName}</h1>
                        <p>Age {element.age}</p>
                        <p>Hair color {element.hairColor}</p>
                    </div>
                )
            })}
        </div>)
     
  }
}
