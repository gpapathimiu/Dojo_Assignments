var likeCount = 3;
var likes = document.querySelector('#likes');


function likesUp() {
    likeCount++;
    likes.innerHTML = likeCount + ' like(s)'
}