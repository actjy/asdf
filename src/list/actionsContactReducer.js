import { v4 as uuidv4 } from 'uuid'

// ADD_CONTACT
export const addContactList = ({ fullName = '', emailAddress = '', contactNumber = '', location = '', regDate = '' } = {}) => {
    return (
        {
            type: 'ADD_CONTACT',
            contact: {
                id: uuidv4(),
                fullName,
                emailAddress,
                contactNumber,
                location,
                regDate
            }
        })
};

// REMOVE_CONTACT
export const removeContact = ({ id } = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});

// EDIT_CONTACT
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
});

