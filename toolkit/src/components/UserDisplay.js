import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/Counter';

const UserDisplay = () => {
  const { users } = useSelector((state) => state.counter);
  console.log('users', users);
  const dispatch = useDispatch();

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
  } = useFormik({
    initialValues: {
      username: '',
      place: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(addUser(values));
      console.log(JSON.stringify(values));
      // values = {"username":"ramen","place":"mountains"}
    },
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

export default UserDisplay;
