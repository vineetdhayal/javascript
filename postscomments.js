const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

const fetchData = async () => {
    let [posts, comments] = await Promise.all([fetch(POSTS_URL).then((res) => res.json()), fetch(COMMENTS_URL).then((res) => res.json())]);

    console.log(posts, comments);
}

fetchData();