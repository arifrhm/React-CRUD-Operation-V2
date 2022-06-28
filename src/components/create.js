import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    // const [name, setMessage] = useState('');

    const handleChangeFirstName = event => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = event => {
        setLastName(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        if ((firstName.trim().length !== 0 && lastName.trim().length !== 0)) {
            axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
                firstName,
                lastName,
                checkbox
            }).then(() => {
                history.push('/read')
            });
        } else {
        console.log('input value is empty');
        }
    };

    console.log(checkbox)
    // const postData = () => {
    //     axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     }).then(() => {
    //         history.push('/read')
    //     })
    // }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={handleChangeFirstName}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={handleChangeLastName}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={handleClick} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
