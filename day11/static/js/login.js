
document.querySelector('input[type="button"]').onclick = function () {
    let username =  document.querySelector('#username').value;
    window.localStorage.setItem('username', username);
    //当前页面不会触发storage事件
    document.querySelector('#login').innerHTML = `欢迎你，${username}`;

}

window.addEventListener('storage', sto);
function sto() {
    console.log(1);
    document.querySelector('#login').innerHTML = `欢迎你，${localStorage.username}`;
}