import React, { Component } from 'react';
import validator from 'validator';
import moment from 'moment';

export default class AddContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            errorName: undefined,
            emailAddress: '',
            errorEmail: undefined,
            contactNumber: '',
            errorNumber: undefined,
            location: '',
            errorLocation: undefined,
            regDate: '',
            errorDate: undefined,
        };
    }

    handleFullName = (e) => {

        const fullName = e.target.value;

        this.setState(() => ({ fullName }))

        if (fullName.length === 0) {
            return this.setState(() => ({ errorName: 'cannot be blank' }))
        }

        if (validator.isAlpha(fullName) || fullName.includes(' ')) {
            this.setState(() => ({ errorName: undefined }))

        } else {
            this.setState(() => ({ errorName: 'Input valid name' }))
        }
    }

    handleEmailAdd = (e) => {

        const emailAddress = e.target.value;

        this.setState(() => ({ emailAddress }))

        if (emailAddress.length === 0) {
            return this.setState(() => ({ errorAddress: 'cannot be blank' }))
        }

        if (validator.isEmail(emailAddress)) {
            // e.target.value = '';
            this.setState(() => ({ errorEmail: undefined }))
        } else {
            this.setState(() => ({ errorEmail: 'Enter valid email' }))
        }

    }

    handleContactNumber = (e) => {

        const contactNumber = e.target.value;

        this.setState(() => ({ contactNumber }))

        if (contactNumber.length === 0) {
            return this.setState(() => ({ errorNumber: 'cannot be blank' }))
        }

        if (contactNumber.length === 11) {
            this.setState(() => ({ errorNumber: undefined }))
        } else {
            this.setState(() => ({ errorNumber: 'Enter valid contact number' }))
        }
    }


    handleLocation = (e) => {
        const location = e.target.value;

        this.setState(() => ({ location }))

        if (location) {
            this.setState(() => ({ errorLocation: undefined }))
        } else {
            this.setState(() => ({ errorLocation: 'Select Location' }))
        }
    }

    handleRegisteredDate = (e) => {
        const regDate = e.target.value;

        this.setState(() => ({ regDate }))

        if (regDate) {
            this.setState(() => ({ errorDate: undefined }))
        } else {
            this.setState(() => ({ errorDate: 'Select Date' }))
        }
    }

    handleAddContact = (e) => {

        console.log(this.state.regDate)

        e.preventDefault();

        if (this.state.fullName.length === 0) {
            this.setState(() => ({ errorName: 'cannot be blank' }))
        }
        if (this.state.emailAddress.length === 0) {
            this.setState(() => ({ errorEmail: 'cannot be blank' }))
        }
        if (this.state.contactNumber.length === 0) {
            this.setState(() => ({ errorNumber: 'cannot be blank' }))
        }
        if (this.state.location.length === 0) {
            this.setState(() => ({ errorLocation: 'cannot be blank' }))
        }
        if (this.state.regDate.length === 0) {
            this.setState(() => ({ errorDate: 'cannot be blank' }))
        }
        this.props.onAdd({
            fullName: this.state.fullName,
            emailAddress: this.state.emailAddress,
            contactNumber: this.state.contactNumber,
            location: this.state.location,
            regDate: moment(this.state.regDate).format('MM/DD/YYYY')
        });
        // const getContact = JSON.parse(localStorage.getItem('contact'))

        // if (getContact) {
        //     const savedContact = getContact.concat(this.state)
        //     localStorage.setItem('contact', JSON.stringify(savedContact))
        // } else {
        //     localStorage.setItem('contact', JSON.stringify(this.state))
        // }

        // 


    }


    // componentDidMount() {

    //     try {
    //         const json = localStorage.getItem('options');
    //         const options = JSON.parse(json)

    //         if (options) {
    //             this.setState(() => ({ options }))
    //         }
    //     } catch (e) {
    //         //Do nothing at all
    //     }

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.options.length !== this.state.options.length) {
    //         const json = JSON.stringify(this.state.options)
    //         localStorage.setItem('options', json)
    //         console.log('saving data')
    //     }
    // }

    // componentWillUnmount() {

    //     console.log('Deleted')
    // }




    render() {
        return (
            <div>
                <form onSubmit={this.handleAddContact}>
                    <p> Full name </p>
                    <input placeholder="Last Name, First Name, Middle Initial" type="text" name="fullName" onChange={this.handleFullName} />
                    {
                        this.state.errorName && <p className='errorText'>{this.state.errorName}</p>
                    }
                    <p> Email Address </p>
                    <input type="text" name="emailAddress" onChange={this.handleEmailAdd} />
                    {
                        this.state.errorEmail && <p className='errorText'>{this.state.errorEmail}</p>
                    }

                    <p> Contact Number </p>
                    <input type="text" name="contactNumber" onChange={this.handleContactNumber} />
                    {
                        this.state.errorNumber && <p className='errorText'>{this.state.errorNumber}</p>
                    }

                    <p> Location </p>
                    <select name="location" onChange={this.handleLocation}>
                        <option value=''>Select your location</option>
                        <option value='manila'> Manila </option>
                        <option value='cebu'> Cebu </option>
                    </select>
                    {
                        this.state.errorLocation && <p className='errorText'>{this.state.errorLocation}</p>
                    }

                    <p> RegisteredDate </p>
                    <input value={this.state.regDate} type="date" name="regDate" onChange={this.handleRegisteredDate} />
                    {
                        this.state.errorDate && <p className='errorText'>{this.state.errorDate}</p>
                    }

                    <div>
                        <button type='submit'> Add Contact </button>
                    </div>
                </form>
            </div>
        );
    }
}

