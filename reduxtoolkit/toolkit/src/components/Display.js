import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/Api';
import { decrement, increment } from '../redux/Counter';

const Display = () => {
  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);

  const { data } = useSelector((state) => state.fetchReducer);
  console.log('map', data?.data);
  const { values } = useSelector((state) => state.counter);
  // const { posts } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const allVal = data?.data?.map((data, index) => {
    return (
      <div key={index} className="card" style={{ width: '18rem' }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{data?.title}</li>
        </ul>
      </div>
    );
  });

  console.log('t', allVal);
  console.log('hi VP');
  console.log('hi asvin');

  return (
    <div>
      <div className="text-danger">{values}</div>
      <div>
        <button onClick={() => dispatch(increment(1))}>1</button>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
      </div>

      <div className="mt-5">{allVal}</div>
    </div>
  );
};

export default Display;
