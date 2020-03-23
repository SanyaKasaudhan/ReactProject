import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const SignupSchema= Yup.object().shape({
firstName: Yup.string()
.min(2,'too short')
.max(128, 'too large')
.required('required'),

lastName: Yup.string()
.min(2,'too short')
.max(128, 'too large')
.required('required'),

email: Yup.string()
.email('invalid email')
.required('required')

})
export default class FormYup extends Component {
    render() {
        return (
            <div>
                <h1>Signup page</h1>
                <Formik initialValues={{firstName:'',lastName:'',email:''}}

                validationSchema={SignupSchema}

                onSubmit ={values => {console.log(values)}}></Formik>
            </div>
        )
    }
}
