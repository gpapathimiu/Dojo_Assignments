var likes1 = document.querySelector('#likes1');
var likes2 = document.querySelector('#likes2')
var likes3 = document.querySelector('#likes3')
var likeCount1 = 9;
var likeCount2 = 12;



function likesUp1() {
    likeCount1++;
    likes1.innerText = likeCount1 + ' like(s)';
    console.log(likeCount1)
}

function likesUp2() {
    likeCount2++;
    likes2.innerText = likeCount2 + ' like(s)';
}


function likesUp3() {
    likeCount1++;
    likes3.innerText = likeCount1 + ' like(s)';
}
