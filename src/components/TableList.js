import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        sortable: false
    },
    {
        field: 'fullName',
        headerName: 'Full Name',
        width: 150,
        editable: false,
        sortable: false,
    },
    {
        field: 'emailAddress',
        headerName: 'Email Address',
        width: 150,
        editable: false,
        sortable: false,
    },
    {
        field: 'contactNumber',
        headerName: 'Contact Number',
        width: 110,
        editable: false,
        sortable: false,
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 110,
        editable: false,
        sortable: false,
    },
    {
        field: 'regDate',
        headerName: 'Registered Date',
        width: 110,
        editable: false,
        sortable: false,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 280,
        sortable: false,
        editable: false,
        renderCell: (params) => {
            const history = useHistory();
            return (
                <div>
                    <button
                        onClick={() => {
                            history.push({
                                pathname: '/view/' + params.row.id,
                                contact: params.row,
                                action: 'view'
                            })
                        }}>View</button>
                    <button
                        onClick={() => {
                            history.push({
                                pathname: '/view/' + params.row.id,
                                contact: params.row,
                                action: 'update'
                            })
                        }}>Update</button>
                    <button
                        onClick={() => {
                            history.push({
                                pathname: '/view/' + params.row.id,
                                contact: params.row,
                                action: 'delete'
                            })
                        }}>Delete</button>
                </div>
            )
        },
    }


];

// style={{
//     color: "blue",
//     fontSize: 18,
//     width: "100%",
//     textAlign: "right"
// }}



function DataGridDemo(props) {
    console.log(props)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.contacts}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnFilter
                pagination
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        contacts: state,
    }
}

export default connect(mapStateToProps)(DataGridDemo)
