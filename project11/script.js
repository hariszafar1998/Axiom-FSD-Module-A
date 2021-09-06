const inputQuery = document.getElementById('inputquery');
const postsContainer = document.getElementById('posts');
const loader = document.getElementById('loader');

let limit = 5;
let page = 1;

async function fetchPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json();
    return data;
};

async function renderPosts() {
    const posts = await fetchPosts();
    posts.forEach( post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('postcontainer');
        postDiv.innerHTML = `
            <div class="post">
                <div class="postnumber"><h3>${post.id}</h3></div>
                <h3 class="posttitle">${post.title}</h3>
                <p class="postcontent">${post.body}</p>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
};

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if ( scrollTop + clientHeight >= scrollHeight ) {
        loader.classList.add('show');
        setTimeout(() => {
            loader.classList.remove('show');
        }, 800);
        page++;
        renderPosts();
    }
});

inputQuery.addEventListener('input', e => {
    const query = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.postcontainer');
    posts.forEach( post => {
        const title = post.querySelector('.posttitle').innerText.toUpperCase();
        const body = post.querySelector('.postcontent').innerHTML.toUpperCase();
        if ( title.indexOf(query) > -1 || body.indexOf(query) > -1 ) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
});

renderPosts();