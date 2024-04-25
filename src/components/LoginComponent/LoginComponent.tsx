import React, { useState } from 'react'
import './LoginComponent.scss'
import { Button, Form, FormField, Grid } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export const LoginComponent = () => {
    const [email, setEmail] = useState(''); //* Used to set email data from input.
    const [password, setPassword] = useState(''); //* Used to set password from input.
    const navigate = useNavigate(); //* Used to redirect to pages.

   /**
    * Updates the email and password state based on the value entered in an input
    * field.
    * @param e - The parameter e is an event object that contains information about the event that
    * occurred.
    */
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(e.target.value)
    }

    /**
     * handles form submission, validates the email and
     * password, and displays success or error messages using SweetAlert.
     */
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (email === 'user@test.com' && password === 'pass') {
            Swal.fire({
                title: 'Success!',
                text: 'You are logged in!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#18EBB6',
            }).then((result) => {
                if (result.isConfirmed) navigate('/home')
            })
        }else {
            Swal.fire({
                title: 'Error!',
                text: 'Invalid Email or password, you can use user@test.com as email and pass as password',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#18EBB6'
            })
        }
    }
  return (
    <>
    <div className="divisor"></div>
    <section className='background'>
        <section className='login-container'>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={5}textAlign='center'>
                        <section className="first-column">
                            <Grid.Row>
                            <img src="cleanmycar.png" alt="Img does not work" />
                            <h3>India's first waterless <br /> car cleaning company</h3>
                            </Grid.Row>
                        </section>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <section className="second-column">
                            <div className="help">
                                <p><a href="/help">Need Help?</a></p>
                            </div>
                            <section className='form'>
                                <div className="login-title">
                                    <h3>Log in</h3>
                                </div>
                                <Form className='form-fields' size='big' onSubmit={handleSubmit}>
                                    <FormField>
                                        <label>Email</label>
                                        <input 
                                            className='input' 
                                            placeholder='joe@email.com'
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </FormField>
                                    <FormField>
                                        <label>Password</label>
                                        <input 
                                            className='input' 
                                            placeholder='Enter your password' 
                                            type='password'
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </FormField>
                                    <div className="forgot">
                                        <a href='/forgot'>forgot password?</a>
                                    </div>
                                    <div className="login-button">
                                        <Button className='button' type='submit'>Login</Button>
                                    </div>
                                </Form>
                            </section>
                        </section>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    </section>
    </>
  )
}
