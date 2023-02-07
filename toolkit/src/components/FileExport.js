import React, { useEffect, useRef } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { getPostss } from '../redux/Crud';
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
} from '@react-pdf/renderer';
import { DownloadTableExcel } from 'react-export-table-to-excel';

import ViewData from './ViewData';
import { Link } from 'react-router-dom';
// import ViewData from './ViewData';
// import ReactExport from 'react-export-excel';

const FileExport = () => {
  const dispatch = useDispatch();
  const { getDatas } = useSelector((state) => state.crud);

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
      name: 'view',
      selector: (row) => (
        <div>
          <Link
            to={`/viewData/${row.id}`}
            type="button"
            className="btn btn-success"
          >
            view
          </Link>
        </div>
      ),
    },
  ];

  // const tableRef = useRef(null);

  //   pdf export
  const MyDoc = () => (
    <Document>
      <Page>
        // My document data
        <Text></Text>
      </Page>
    </Document>
  );

  return (
    <div>
      {/* pdf */}
      <div>
        {' '}
        <PDFDownloadLink
          className="btn btn-warning"
          document={<MyDoc />}
          fileName="list.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'pdf download!'
          }
        </PDFDownloadLink>
      </div>
      {/* csv */}
      <div>
        <CSVLink className="btn btn-danger mt-3" data={getDatas}>
          export csv file
        </CSVLink>
      </div>
      {/* excel */}
      <div>
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          tablePayload={getDatas}
          //   currentTableRef={tableRef.current}
        >
          <button className="btn btn-primary mt-3"> Export excel </button>
        </DownloadTableExcel>

        {/* <table ref={tableRef}>
          {getDatas.map((e) => (
            <tr>
              <th>{e.place}</th>
            </tr>
          ))}
        </table> */}
      </div>
      <div></div>

      <DataTable columns={columns} data={getDatas} />
    </div>
  );
};

export default FileExport;
