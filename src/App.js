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
            input: '',
            inputField: '',
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
                <label htmlFor="input">normal input</label>
                <input
                  id="input"
                  onChange={handleChange}
                  name="input"
                  value={values.input}
                />
                <label htmlFor="inputField">input wrapped in Field</label>
                <Field
                  name="inputField"
                  component={({ field }) => (
                    <input
                      id="inputField"
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
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
