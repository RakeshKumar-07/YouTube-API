import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import './Search.css';

const Search = () => {

    return(
        <>
            <Formik
                initialValues={{
                    search: ""
                }}
                validationSchema={Yup.object({
                    search: Yup
                    .string()
                    .required("Sorry this is Required!")
                })}
                onSubmit={(values, {resetForm}) => {
                    window.location.href = `/${values.search}`;
                    resetForm();
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    handleBlur
                }) => (
                    <div className='search'>
                        <h1 className='heading'>Search YT Videos</h1>
                        <form className="card-form" onSubmit={handleSubmit}>
                            <div className="input">
                                <input
                                    type="text"
                                    className="input-field"
                                    id="search"
                                    name="search"
                                    placeholder='Search Videos on Youtube'
                                    value={values.search}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <br />
                                {errors.search?
                                    <span className='error'>*{errors.search}</span>
                                : null}
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    )

}

export default Search;
