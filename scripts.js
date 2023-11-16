let myForm = document.getElementById('form');
let formData = {}
let check = true

function display_data() {
    let info_name = document.querySelector(".info_name");
    let info_surname = document.querySelector(".info_surname");
    let info_employee = document.querySelector('.employee_info');
    let info_employee_img = document.querySelector('.logo');

    info_name.innerHTML = formData.name
    info_surname.innerHTML = formData.surname
    info_employee.innerHTML = "Сотрудник компаний " + formData.company_name + "!";
    info_employee_img.style.display = "block";
    info_employee_img.src = "./img/" + formData.company_name + ".svg";

    let photo = document.getElementById('formFile').files[0];
    let profile = document.querySelector('.profile');

    console.log(formData);
    let employee_status = document.querySelector(".employee_status");
    if (formData.employee_status === undefined) {
        formData.employee_status = "Intern Software Engineer 🫠";
    }
    employee_status.textContent = "Должность: " + formData.employee_status;

    let links = document.getElementById('links');
    links.style.display = "block";

    let github = document.getElementById('github');
    if (formData.github_link != "") {
        github.href = formData.github_link;
        github.target = "_blank";
        let img = document.createElement('img');
        img.src = "./img/icon-github-active.svg";
        img.classList.add('icon-social-link');
        github.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.src = "./img/icon-github.svg";
        img.classList.add('icon-social-link');
        github.appendChild(img);
    }


    let linkedin = document.getElementById('linkedin');
    if (formData.linkedin_link != "") {
        linkedin.href = formData.linkedin_link;
        linkedin.target = "_blank";
        let img = document.createElement('img');
        img.src = "./img/icon-linkedin-active.svg";
        img.classList.add('icon-social-link', 'ms-4');
        linkedin.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.src = "./img/icon-linkedin.svg";
        img.classList.add('icon-social-link','ms-4');
        linkedin.appendChild(img);
    }

    let instagram = document.getElementById('instagram');
    if (formData.instagram_link != "") {
        instagram.href = formData.instagram_link;
        instagram.target = "_blank";
        let img = document.createElement('img');
        img.src = "./img/icon-instagram-active.svg";
        img.classList.add('icon-social-link','ms-4');
        instagram.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.src = "./img/icon-instagram.svg";
        img.classList.add('icon-social-link', 'ms-4');
        instagram.appendChild(img);
    }

    let telegram = document.getElementById('telegram');
    if (formData.telegram_link != "") {
        telegram.href = formData.telegram_link;
        telegram.target = "_blank";
        let img = document.createElement('img');
        img.src = "./img/icon-telegram-active.svg";
        img.classList.add('icon-social-link','ms-4');
        telegram.appendChild(img);
    } else {
        let img = document.createElement('img');
        img.src = "./img/icon-telegram.svg";
        img.classList.add('icon-social-link','ms-4');
        telegram.appendChild(img);
    }

    let img = document.createElement('img');
    img.src = URL.createObjectURL(photo);
    profile.appendChild(img);

}

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let surname = document.getElementById('surname');

    formData.name = name.value;
    formData.surname = surname.value;
    // name
    let valid_name = document.querySelector('.name-valid');
    if (name.value.trim() === "") {
        valid_name.style.display = "block";
        valid_name.textContent = "Введите ваше имя. Поле не может быть пустым!"
        check = false
    }

    name.addEventListener('keypress', function(e){
        valid_name.style.display = "none";
    })

    // surname
    let valid_surname = document.querySelector('.surname-valid');
    if (surname.value.trim() === "") {
        
        valid_surname.style.display = "block";
        valid_surname.textContent = "Введите вашу фамилию. Поле не может быть пустым!"
        check = false;
    }

    surname.addEventListener('keypress', function(e){
        valid_surname.style.display = "none";
    })
    
    // select
    let select_company = document.querySelector('.form-select');

    let valid_select_company = document.querySelector('.valid_select_company');
    if (select_company.value == "") {
        valid_select_company.style.display = "block";
        valid_select_company.textContent = "Выберите компанию";
        check = false;
    }

    
    // GitHub
    let github_link = document.getElementById('github-link');
    let valid_github = document.querySelector('.github-valid');

    if (!github_link.value.startsWith('https://github.com/') && !github_link.value=="") {
        
        valid_github.style.display = 'block';
        valid_github.textContent = 'Введите корректную ссылку GitHub!'
        check = false;
    }

    github_link.addEventListener('keypress', function(e){
        valid_github.style.display = "none";
    })

    // linkedin
    let linkedin_link = document.getElementById('linkedin-link');
    let valid_linkedin = document.querySelector('.linkedin-valid');

    if (!linkedin_link.value.startsWith('https://www.linkedin.com/') && !linkedin_link.value=="") {
        
        valid_linkedin.style.display = 'block';
        valid_linkedin.textContent = 'Введите корректную ссылку Linkedin!'
        check = false;
    }

    linkedin_link.addEventListener('keypress', function(e){
        valid_linkedin.style.display = "none";
    })

    // Instagram
    let instagram_link = document.getElementById('instagram-link');
    let valid_instagram = document.querySelector('.instagram-valid');

    if (!instagram_link.value.startsWith('https://www.instagram.com/') && !instagram_link.value=="") {
        valid_instagram.style.display = 'block';
        valid_instagram.textContent = 'Введите корректную ссылку Instagram!';
        check = false;
    }
    
    instagram_link.addEventListener('keypress', function(e){
        valid_instagram.style.display = "none";
    }) 


    // Telegram
    let telegram_link = document.getElementById('telegram-link');
    let valid_telegram = document.querySelector('.telegram-valid');

    if (!telegram_link.value.startsWith('https://t.me/') && !telegram_link.value=="") {
        valid_telegram.style.display = 'block';
        valid_telegram.textContent = 'Введите корректную ссылку Telegram!';
        check = false;
    }

    telegram_link.addEventListener('keypress', function(e){
        valid_telegram.style.display = "none";
    })

    formData.github_link = github_link.value;
    formData.linkedin_link = linkedin_link.value;
    formData.instagram_link = instagram_link.value;
    formData.telegram_link = telegram_link.value;

    
    if (check == true) {
        display_data();
    }
    
    console.log(formData)
});



function submit_activate_animation() {
    let submit = document.getElementById('submit-form');
    submit.classList.remove('animate__bounceOut');
    submit.classList.add('animate__bounceOut');
}

function select_company(company_name) {
    let form_select = document.querySelector('.form-select');
    let form_logo = document.getElementById('logo');

    if (company_name == "") {
        form_select.classList.remove('.active')
        form_logo.style.display = "none";
    } else {
        formData.company_name = company_name;
        let valid_select_company = document.querySelector('.valid_select_company');
        valid_select_company.style.display = "none";
        form_logo.style.display = "block";
        form_logo.src=`./img/${company_name}.svg`
        check = true;
    }
}


function check_job_title(job_title) {
    emoji = {
        "intern" : "🫠",
        "junior" : "😇",
        "middle" : "😎",
        "senior" : "🧐"
    }

    function clear_label() {
        for (let i in emoji) {
            let temp_label = document.getElementById(i);
            if (temp_label.textContent.endsWith(emoji[i])) {
                temp_label.textContent = temp_label.textContent.slice(0, -2);
            }
        }             
    }

    clear_label()
    let label = document.getElementById(job_title);
    label.innerHTML = label.textContent + " " + emoji[job_title];
    formData.employee_status = label.textContent;
    check = true;
}

