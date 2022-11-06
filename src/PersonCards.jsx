import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PersonCards.css';

class PersonCards extends Component {
    render() {
    return (
        <div className='personContainer'>
        {this.props.persons.map((person, index) => {
            if (index >= ((this.props.page - 1) * 5) && index < (this.props.page * 5)){
                return (<div className="personCard" id={person.count}>
                    <div>First Name: {person.firstName}</div>
                    <div>Last Name: {person.lastName}</div>
                    <div>DOB: {person.dob}</div>
                    <div>Mobile: {person.mobile}</div>
                    <div>City: {person.city}</div>
                    <div>ZIP: {person.zip}</div>
                    <div>Email: {person.email}</div>
                </div>)
            }
            return null;}
            )
            }
        </div>
        )
    }
}

PersonCards.propTypes = {};

export default PersonCards;