window.onload = function() {
    const login_btn = document.getElementById('login_btn');
    const register_btn = document.getElementById('register_btn');
    const form = document.getElementById('form');
}

login_btn.onclick = (event) => {
    form.action = event.target.dataset.endpoint;
    console.log(form.action);
}

register_btn.onclick = (event) => {
    form.action = event.target.dataset.endpoint
}

