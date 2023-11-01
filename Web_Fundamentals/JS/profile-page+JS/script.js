var JaneDoe = document.querySelector('#JaneDoe');
var philE = document.getElementById('philE');
var requestNumber = document.getElementById('requestNumber');
var toddE = document.getElementById('toddE');
var connectionNumber = document.getElementById('connectionNumber');

function changeName() {
    JaneDoe.innerHTML = 'Mia Wallace';
}

function deleteRequest(deleteReq) {
    deleteReq.remove(philE);
    deleteReq.remove(toddE);
    requestNumber.innerHTML--;
}


function acceptRequest(acceptReq) {
    acceptReq.remove(philE,toddE);
    connectionNumber.innerHTML++;
    requestNumber.innerHTML--;

}
