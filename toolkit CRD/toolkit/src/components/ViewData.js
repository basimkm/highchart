import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { delPosts, getPostss } from '../redux/Crud';

const ViewData = () => {
  const { getDatas } = useSelector((state) => state.crud);
  const dispatch = useDispatch();
  console.log('y', getDatas);

  useEffect(() => {
    dispatch(getPostss());
    console.log('nnnnnnnn');
  }, []);

  const columns = [
    {
      name: 'name',
      selector: (row) => row.username,
    },
    {
      name: 'place',
      selector: (row) => row.place,
    },
    {
      name: 'delete',
      selector: (row) => (
        <div>
          <button onClick={() => dispatch(delPosts(row.id))}>delete</button>
        </div>
      ),
    },
    {
      name: 'delete',
      selector: (row) => (
        <div>
          <Link to={`/edit/${row.id}`}>edit</Link>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="mt-3">
        <Link to={'/add'} className="btn btn-primary" type="button">
          add
        </Link>
      </div>
      <DataTable columns={columns} data={getDatas} />
    </div>
  );
};

export default ViewData;
