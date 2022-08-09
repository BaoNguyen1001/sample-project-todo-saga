import React from 'react';
import { Button } from '@progress/kendo-react-buttons'
import { useDispatch, connect } from 'react-redux';
import { Form, FormElement, Field } from '@progress/kendo-react-form';
import { FloatingLabelEmailInput } from '../../../../common/formComponent';
import '../styles/style.scss';
import { formValidator } from '../validators/validator';
import { Link } from 'react-router-dom';
import { signUp } from '../store/signUpActions';

const SignUp = (props) => {

  const dispatch = useDispatch();

  const handleRegister = (dataItem) => {
    const { username, password } = dataItem;
    dispatch(signUp({ username, password }))
  }

  return (
    <div className='container'>
      <h2 style={{ margin: 0 }}>Sign up</h2>
      <Form
        onSubmit={handleRegister}
        validator={formValidator}
        render={(formRenderProps) => (
          <FormElement
            style={{ maxWidth: 300 }}
          >
            <Field
              id={'username'}
              name={'username'}
              label={'Username'}
              component={FloatingLabelEmailInput}
            >
            </Field>
            <Field
              id={'password'}
              name={'password'}
              label={'Password'}
              component={FloatingLabelEmailInput}
              type={'password'}
            >
            </Field>
            <Field
              id={'rePassword'}
              name={'rePassword'}
              label={'Confirm Password'}
              component={FloatingLabelEmailInput}
              type={'password'}
            >
            </Field>
            <div className="k-form-buttons">
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base btn"
                disabled={!formRenderProps.allowSubmit}
              >
                Register
              </button>
            </div>
          </FormElement>
        )}
      />
      <div className={'signup'}>
        <p>You have a account? <Link style={{ color: '#ffff' }} to={'/login'} >Login now</Link> </p>
      </div>
    </div >


  )
}

const mapStateToProps = (state) => {
  return {
    signUp: state.signUp,
    router: state.router,
  }
}

export default connect(mapStateToProps)(SignUp);
