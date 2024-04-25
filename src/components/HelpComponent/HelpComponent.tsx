import React from 'react'
import { Form, FormField, Grid, Icon, Image } from 'semantic-ui-react'
import './HelpComponent.scss'

export const HelpComponent = () => {
  return (
    <>
    <section className="help">
      <Grid columns={'two'}>
      <Grid.Row >
        <Grid.Column width={4}>
          <div className='icon'>
            <Icon link name='help' size='massive'/> <br />
        </div>
        </Grid.Column>
        <Grid.Column width={12}>
          <section className='text'>
            <h3> Need Help?</h3>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Form>
            <FormField>
                  <label >Write your email and we will contact you</label>
                  <input 
                      placeholder='joe@email.com'
                      style={{width:'50%'}}
                  />
              </FormField>
            </Form>
          </section>   
          <Image src='cleanmycar.png'/>   
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </section>
    </>
  )
}
