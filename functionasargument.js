function addContact(callback) {
    const newVar = "Value"
    console.log(newVar);
    callback(newVar);
}

function contactList(data) {
   console.log('Contact One', data);
}
addContact(contactList);