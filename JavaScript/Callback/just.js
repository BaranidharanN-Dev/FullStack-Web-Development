const posts = [
    {tittle:'Post One',body:'This is Post One'},
    {tittle:'Post Two', body:'This is Post Two'}
];

function getPosts() {
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.tittle}</li>`
        });

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


// ⭐ START HERE
createPost(
    {tittle:'Post Three', body:'This is Post Three'},
    getPosts
);

// ↑
// | 1. Jump into createPost()
// |
function createPost(post, callback) {

    setTimeout(() => {

        // ↑
        // | 2. After 2 seconds, continue here
        //
        posts.push(post);

        // ↑
        // | 3. callback() means getPosts()
        //
        callback();

    }, 100);
}

// ↑
// | 4. Jump into getPosts()
//
function getPosts() {

    setTimeout(() => {

        // ↑
        // | 5. After 1 second, continue here
        //
        let output = '';

        // ↑
        // | 6. Loop through posts
        //
        posts.forEach((post, index)=> {

            output += `<li>${post.tittle}</li>`

        });

        // ↑
        // | 7. Display the result
        //
        document.body.innerHTML = output;

    }, 1000);
}

// 🏁 FINISH