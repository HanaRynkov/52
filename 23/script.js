const usersContainer = document.getElementById('usersContainer');
const postsContainer = document.getElementById('postsContainer');

const baseUrl = 'https://jsonplaceholder.typicode.com/';

document.addEventListener('DOMContentLoaded', () => {
    async function getUsers() {
        try {
            const response = await fetch(`${baseUrl}users`);
            console.log(response);
            const users = response.json();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async function getPosts(userId) {
        try {
            // posts?userId=1
            const response = await fetch(`${baseUrl}posts?userId=${userId}`);
            const posts = response.json();
            // console.log(posts);
            return posts;
        } catch (error) {
            console.log(error);
        }
    }

    async function getComments(postId) {
        try {
            // posts?userId=1
            const response = await fetch(`${baseUrl}comments?postId=${postId}`);
            const comments = response.json();
            // console.log(posts);
            return comments;
        } catch (error) {
            console.log(error);
        }
    }
    function displayPosts(posts) {
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post'); // Добавляем класс 'post' элементу postElement

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            postsContainer.append(postElement);
            // Метод append может принимать сколько угодно атрибутов, в том числе и текст
            // append ничего не возвращает (appendChild возвращает добавленный элемент)

            postElement.addEventListener('click',async() => {
                const comments = await getComments(post.id)
                console.log(comments);
                displayComments(comments,postElement);
            })
        })
    }

    async function displayUsers() {
        const users = await getUsers();
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.textContent = user.name;

            userElement.classList.add('user');

            userElement.addEventListener('click', async () => {
                const posts = await getPosts(user.id);
                displayPosts(posts);
            })
            usersContainer.append(userElement);
        });
    }

    displayUsers();

    function displayComments(comments, postElement) {
        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments');
        commentsContainer.innerHTML= `
        <h4>Comments</h4>
        `

        comments.forEach(comment => {
            const commentContainer = document.createElement('div');
            commentContainer.innerHTML= `
            <h5>${comment.name}</h5>
            <p>${comment.body}</p>
            `
            commentsContainer.append(commentContainer);

        })

        postElement.append(commentsContainer);
        
    }



})