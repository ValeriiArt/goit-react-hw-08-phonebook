

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;


const contactsSelectors = {
    getLoading,
    getFilter,
    getContacts,
};
export default contactsSelectors;