const phoneBook = {
    contactsList: [{
        id: '',
        userName: '',
        email: '',
        phoneNumber: '',
        company: '',
        address: {
            street: '',
            house: '',
            city: ''
        }
    }],
    addContact(contact) {
        if (contact.userName) {
            contact.id = new Date().getTime();
            this.contactsList.push(contact);
            alert('Contact added!');
        }
    },
    changeContact(updatedContact) {
        const index = this.contactsList.findIndex(contact => {
            contact.userName === updatedContact.userName
        })
        if (index !== -1) {
            this.contactsList[index] = updatedContact;
        } else {
            alert('Contact not found...');
        }
    },
    deleteContact(userName) {
        const index = this.contactsList.findIndex(contact => {
            contact.userName === userName;
        });
        if (index !== -1) {
            this.contactsList.splice(index, 1);
        } else {
            alert('Contact not found...');
        }
    }
}


const form = document.querySelector('#addContactForm');
console.log(form);
function handleForm(event) {
    event.preventDefault();
    console.log(event.target);
    const contact = {
        id: new Date().toISOString(),
        userName: event.target['contactName'].value,
        email: event.target['contactEmail'].value,
        phoneNumber: event.target['contactPhone'].value,
        company: event.target['contactCompany'].value,
        address: event.target['contactAddress'].value,
    }
    phoneBook.addContact(contact);
    const contactList = document.querySelector('#contactList')
    contactList.innerHTML = '';
    phoneBook.contactsList.forEach((e, index) => {
        if (index === 0) {
            return;
        }
        const li = document.createElement('li');
        li.textContent = `userName: ${e.userName}, email: ${e.email}, phoneNumber: ${e.phoneNumber}`;
        contactList.append(li);
    })
}

form.addEventListener('submit', handleForm);

