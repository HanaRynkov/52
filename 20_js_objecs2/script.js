const phoneBook = {
    contactsList: [{
        id: '',
        userName: '',
        email: '',
        phoneNumber: '',
        company: '',
        addres: {
            street: '',
            house: '',
            city: ''
        }
    }],
    addContact(contact) {
        if (contact.userName) {
            contact.id = new Date().getTime();
            this.contactsList.push(contact);
            alert('Contact added');
        }
    }
}

changeContact(userName, updatedContact) {
    const index = this.contactsList.findIndex(contact => {
        contact.userName === updatedContact.userName
    })
    if (index !== -1) {
        this.contactsList[index] = updatedContact;
    } else {
        alert('Contact not found');
    }
},
deleteContact(userName) {
    const index = this.contactsList.findIndex(contact => {
        contact.userName === userName;
    });
    if (index !== -1) {
        this.contactsList.splice(index, 1);
    } else {
        alert('Contact not found');
    }
}

console.log(new Date().getTime());//кол-во миллисекунд с 70 года 