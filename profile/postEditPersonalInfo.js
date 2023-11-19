async function postEditPersonalInfo() {
    const url = 'http://localhost:7280/api/edituser/personal-info';
    const currentFirstName = document.querySelector('#editFirstName').value;
    const currentLastName = document.querySelector('#editLastName').value;
    const currentDescription = document.querySelector('#description').value;
    // let editExpertValue = localStorage.getItem('editExpert')
    // let editTeacherValue = localStorage.getItem('editTeacher')
    // if (!currentFirstName || !currentLastName || !currentDescription) {
    //     alert('Пожалуйста, заполните все поля.');
    //     return; // Останавливаем выполнение функции, чтобы запрос не отправлялся
    // }

    // внести сюда поля страну и город

    // Обновляем только измененные значения
    const data = {
        // IsATeacher: JSON.parse(editTeacherValue),
        // IsAnExpert: JSON.parse(editExpertValue),
        IsATeacher: true,
        IsAnExpert: false,
        FirstName: currentFirstName,
        LastName: currentLastName,
        CityTitle: document.querySelector("#cityInput").value,
        CountryTitle: document.querySelector("#countryInput").value,
        Description: currentDescription,
    };


    console.log(JSON.stringify(data));

    fetch(url, {
        method: 'PUT',
        referrerPolicy: "origin-when-cross-origin",
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': "localhost",
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Произошла ошибка при выполнении запроса.');
            }
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        });
}