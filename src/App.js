import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  label="working textfield"
                />
                <Field
                  name="password"
                  component={({ field }) => (
                    <TextField
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      label="textfield losing focus due to remount ?"
                    />
                  )}
                />
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default App;
