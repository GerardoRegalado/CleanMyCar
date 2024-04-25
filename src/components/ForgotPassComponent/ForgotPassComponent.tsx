import React from 'react'
import './ForgotPassComponent.scss'
import { Button, Form, FormField } from 'semantic-ui-react';
import Swal from 'sweetalert2';

export const ForgotPassComponent = () => {

  /**
   * displays a Swal alert with a message indicating that a specific method is
   * not working yet, and automatically closes after 4 seconds.
   */
  const fireAlert = () => {
    Swal.fire({
      title: 'Method not working',
      text: 'This method is not working yet, this alert will close automatically in 4 sec.',
      timer: 4000
    })
  }
  return (
    <>
    <section className="forgot-section">
      <section className='container'>
        <h2>Forgot your password?</h2>
        <Form className='forgot-form' onSubmit={fireAlert}>
          <FormField>
            <label>Write your new password</label>
            <input type="password" />
          </FormField>
          <FormField>
            <label>Write your new password Again!</label>
            <input type="password" />
          </FormField>
          <Button type='submit'>Send confirmation email</Button>
        </Form>
        <p style={{marginTop: '5vh'}}>Recommendations:</p>
        <samp>Do not forget your pass again!</samp>
      </section>
    </section>
    </>
  )
}
