import React from 'react'
import AppBar from '../components/appBar'
import './signup.css'
import { Form, Button } from 'react-bootstrap';
import Footer from '../components/footer';


export default class SignUp extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <div className='SIGNUP'>
                    <h3>WelCome to Our Shop</h3>
                    <Form className='INPUT'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                           LogIn
                        </Button>
                    </Form>

                </div>
<div className='Footer'>
<Footer/>
</div>
            </div>
        )
    }
}