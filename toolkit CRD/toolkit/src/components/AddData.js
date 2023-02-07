import React, { useEffect } from 'react';
import { addPosts, getId } from '../redux/Crud';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AddData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  console.log('id', id);
  console.log('location', location);

  useEffect(() => {
    if (id) {
      dispatch(getId(id));
    }
  }, []);

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
      dispatch(addPosts(values));
      console.log(JSON.stringify(values));
      navigate('/');
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

export default AddData;
