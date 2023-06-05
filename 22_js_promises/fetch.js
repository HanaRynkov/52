// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) // метод then отработает в случае успеха;
//     .then(data => console.log(data))
//     .catch(err => console.log(err)) // метод catch отработает в случае неудачи;
//     .finally(() => console.log('Hello from finally')); // метод finally отработает в любом случае;

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const userList = document.getElementById('userList');
const userList2 = document.getElementById('userList2');
const searchInput = document.getElementById('searchInput');

// let usersArr = [];

fetch(`${baseUrl}users`)
   .then(response => response.json())
   .then(users => {
       let filteredUsers = users;
       displayUsers(filteredUsers);

       searchInput.addEventListener('input', () => {
           const searchTerm = searchInput.value.toLowerCase();
           filteredUsers = users.filter(user => 
               user.name.toLowerCase().includes(searchTerm)
           )
           displayUsers(filteredUsers);
       })
       
       users.forEach(user => {
           const li = document.createElement('li');
           li.textContent = user.name;
           userList.append(li);
       })

   })
   .catch(err => {
       console.log(err);
       const li = document.createElement('li');
       li.textContent = err;
       userList.append(li);
   });

function displayUsers(users) {
   userList2.innerHTML = '';

   users.forEach(user => {
       const li = document.createElement('li');
       li.textContent = user.name;
       userList2.append(li);
   })
}
function displayUserDetail(user){ 
    userDetails.innerHTML ='';

    const nameHeading = document.createElement('h2');
    nameHeading.innerHTML = user.name;

const nickName  = document.createElement('h2');
nickName .innerHTML = user.name;

const email  = document.createElement('h2');

email.innerHTML = user.name; 

const phone = document.createElement('h2');

phone.innerHTML = user.name; 
}

