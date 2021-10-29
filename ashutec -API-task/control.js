

const addSpinner = function () {
    const html = `<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`
    document.querySelector('section').insertAdjacentHTML('afterbegin', html)
}

const add_item = function (item) {
    const html = ` <div id="${item.id}">
    <h4>${item.first_name} ${item.last_name}</h4>
    <p>${item.email}</p>
    <image class="user_img" src="${item.avatar}"></image>
    <div class="buttons">
        
        <button  id="${item.id}" type="button" class="btn btn-secondary view-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    View</button>
        <button class="update btn btn-secondary" >Update</button>
        <button class="delete btn btn-secondary">Delete</button>
    </div>
</div>`
    document.querySelector('.gridUI').insertAdjacentHTML('beforeend', html);
}

const getAPI = async function () {


    const res = await Promise.all([
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users/?&page=2')])
    if (res) {
        document.querySelector('.text-center').remove()
    }
    let [data1, data2] = await Promise.all(res.map(e => e.json()));
    let page1 = data1.data;
    // page1.forEach(el => add_item(el));
    let page2 = data2.data;
    // page2.forEach(el => add_item(el));

    const data = [...page1, ...page2]
    data.forEach(el => add_item(el));

    const Buttons_view = document.querySelectorAll('.view-button')
    Buttons_view.forEach(el => {
        el.addEventListener('click', function (e) {
            const title = document.querySelector('.modal-title')
            const email = document.querySelector('.email')
            const image = document.querySelector('.image')
            const modal_window = document.querySelector('.modal-content')
            const id = e.target.id;
            const model = async function () {
                try {

                    const response = await fetch(`https://reqres.in/api/users/${id}`);
                    let response_data = await response.json()
                    response_data = response_data.data;
                    if (response) {
                        title.innerHTML = `${response_data.first_name} ${response_data.last_name}`;
                        email.innerHTML = response_data.email;
                        image.src = `${response_data.avatar}`;
                        console.log(response_data);
                    }

                } catch (err) {
                    modal_window.innerHTML = ""
                    modal_window.textContent = new Error('Can not find user!💥💥💥💥💥💥');
                }
            }
            model();

        })
    })
}

getAPI();
window.addEventListener('load', addSpinner);



