const posts = [{
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "/images/images/avatar-vangogh.jpg",
    post: "/images/images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
},
{
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "/images/images/avatar-courbet.jpg",
    post: "/images/images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
},
{
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "/images/images/avatar-ducreux.jpg",
    post: "/images/images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
},
];
let poster_name = document.getElementById("name");
let poster_pic = document.getElementById("poster-pic");
let locations = document.getElementById("location");
let post_pic = document.getElementById("post-details");
let comments = document.getElementById("lol");
let like = document.getElementById("like");
let contents = "";
let content = document.getElementById("content");

function lol() {
for (let i = 0; i < posts.length; i++) {
    contents += ` <div class="poster-detail">
<div id="poster-pic">
<img src="${posts[i].avatar}">
</div>
<div class="poster-body">
   
    <p id="name">${posts[i].name}</p>
    <p id="location"> ${posts[i].location}</p>
</div>
</div>
<div id="post-details">
<img  src="${posts[i].post}">
</div>
<div class="post-reaction">
<img id="likes" src="images/images/icon-heart.png">
<img src="images/images/icon-comment.png">
<img src="images/images/icon-dm.png">
<div class="likes-count">
<p id="like">${posts[i].likes} Likes</p>
</div>
<div class="comment">
<p id="lol">
<span class="bolder">${posts[i].username}</span> ${posts[i].comment}
</p>
</div>
</div>`;

    content.innerHTML = contents;
}
}
lol();