const posts = [
    {tittle:'Post One',body:'This is Post One'},
    {tittle:'Post Two', body:'This is Post Two'}
];

function getPosts() {
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.tittle}</li>`
        } );

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({tittle:'Post Three', body:'This is Post Three'},getPosts);