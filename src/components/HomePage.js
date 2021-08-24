import { NavLink } from 'react-router-dom';
import AddContact from './AddContact';
import DataGridDemo from './TableList';
import React from 'react';
import { connect } from 'react-redux';
import { addContactList } from '../list/actionsContactReducer';

const HomePage = (props) => {
    return (
        <div className='home'>
            <div className='addContactBorder'>
                <AddContact onAdd={(contact) => {
                    console.log(contact)
                    props.dispatch(addContactList(contact))
                }} />
            </div>

            <div className="tablegrid">
                <DataGridDemo />
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        contact: state,
    }
}

export default connect(mapStateToProps)(HomePage);

//