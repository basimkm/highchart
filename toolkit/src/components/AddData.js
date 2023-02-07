import React, { useEffect, useState } from 'react';
import { addPosts, editPosts, getId } from '../redux/Crud';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment-timezone';

const AddData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { getAllId } = useSelector((state) => state.crud);

  console.log('id', id);
  console.log('location', location);
  console.log('idDetails', getAllId);

  useEffect(() => {
    if (id) {
      dispatch(getId(id));
    }
  }, []);

  useEffect(() => {
    resetForm({
      username: '',
      place: '',
    });
  }, []);

  useEffect(() => {
    if (getAllId) {
      setFieldValue('username', getAllId.username);
      setFieldValue('place', getAllId.place);
    }
  }, [getAllId]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.place) {
      errors.place = 'Required';
    }
    return errors;
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values, // use this if you want controlled components
    errors,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      username: '',
      place: '',
      DATE: moment().format('DD-MM-YYYY hh:mm'),
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (id) {
        dispatch(editPosts(id, values));
        resetForm();
      } else {
        dispatch(addPosts(values));
        resetForm();
        navigate('/');
      }
      console.log(JSON.stringify(values));
      navigate('/');

      // values = {"username":"ramen","place":"mountains"}
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">name:</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        {touched.username && errors.username ? (
          <div>{errors.username}</div>
        ) : null}

        <label htmlFor="place">place:</label>
        <input
          type="text"
          name="place"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.place}
        />

        {touched.place && errors.place ? <div>{errors.place}</div> : null}

        <button type="submit">submit</button>
      </form>

      {/* <div className="mt-5">
        {users.map((val, index) => (
          <div key={index}>{val.place}</div>
        ))}
      </div> */}
    </div>
  );
};

export default AddData;
