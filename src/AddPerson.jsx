import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddPerson.css';

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            mobile: '',
            city: '',
            zip: '',
            email: '',
            invalidMobileNo: false,
            invalidDOB: false,
            count: 0
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({firstName: e.target.value});
    }

    handleLastNameChange = (e) => {
        this.setState({lastName: e.target.value});
    }

    getAge = (dateString) => {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
    }

    handleDOBChange = (e) => {
        const age = this.getAge(e.target.value);
        if (age < 18) {
            this.setState({invalidDOB: true});
            return;
        }
        this.setState({dob: e.target.value, invalidDOB: false});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handleMobileChange = (e) => {
        if(e.target.value.length !== 12) {
            this.setState({invalidMobileNo : true});
            return;
        }
        this.setState({mobile: e.target.value, invalidMobileNo: false});
    }

    handleCityChange = (e) => {
        this.setState({city: e.target.value});
    }

    handlePINChange = (e) => {
        this.setState({zip: e.target.value});
    }

    addPerson = (e) => {
        e.preventDefault();
        const {firstName, lastName, dob, city, email, mobile, zip, count} = this.state;
        if (firstName === '' || lastName === '' || dob === '' || city === '' || email === '' || mobile === '' || zip === '') {
            return;
        }
        const person = {
            firstName,
            lastName,
            dob,
            mobile,
            city,
            zip,
            email,
            count: count + 1
        }
        this.setState({count: count+1});
        this.props.addPersonHandler(person);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addPerson} className="addPerson">
                    <input type="text" required onChange={this.handleFirstNameChange} className="inputBox" placeholder="First Name"/>
                    <input type="text" required onChange={this.handleLastNameChange} className="inputBox" placeholder="Last Name"/>
                    <input type="date" required onChange={this.handleDOBChange} className="inputBox" placeholder="DOB Name"/>
                    {this.state.invalidDOB && <div>Please Enter age >= 18 Years</div>}
                    <input type="email" required onChange={this.handleEmailChange} className="inputBox" placeholder="Email Name"/>
                    <input type="number" required onChange={this.handleMobileChange} className="inputBox" placeholder="Mobile with country code(91)"/>
                    {this.state.invalidMobileNo && <div>Please Enter valid 10 digit number with country code(677657757575)</div>}
                    <input type="text" required onChange={this.handleCityChange} className="inputBox" placeholder="City"/>
                    <input type="number" required onChange={this.handlePINChange} className="inputBox" placeholder="PIN"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

AddPerson.propTypes = {};

export default AddPerson;