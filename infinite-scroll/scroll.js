const posts = document.getElementById('posts-container');
const loader = document.getElementById('loader');

const mockPosts = [
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 3',
    'Post 3',
    'Post 3',
    // Add more posts here
];

let curr = 1;
const p = 3;

function displayPosts(p) {
    console.log('p came here', p);
    p.forEach((z) => {
        const x = document.createElement('div');
        x.textContent = z;
        x.classList.add('post');
        posts.appendChild(x);
    })
}

function loadMoreData() {
    const s = (curr - 1) * p;
    const e = s + p;
    const newPosts = mockPosts.slice(s, e);
    console.log(newPosts);
    if (newPosts.length > 0) {
        displayPosts(newPosts);
        curr = curr + 1;
    }
    else {
        window.removeEventListener('scroll', checkScroll);
    }
}

function checkScroll() {
    console.log(document.documentElement);
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    console.log(scrollTop, clientHeight, scrollHeight);

    if (clientHeight+scrollTop >= scrollHeight - 20) {
        setTimeout(() => {
            loader.style.display = 'none';
            loadMoreData();
        }, 1000)
    }
}

loadMoreData();

window.addEventListener('scroll', checkScroll);
