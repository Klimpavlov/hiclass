async function postEditPersonalInfo() {
    const url = 'http://localhost:7280/api/edituser/personal-info';
    let updatedLocation =document.querySelector('#editLocation').value;
    const currentFirstName = document.querySelector('#editFirstName').value;
    const currentLastName = document.querySelector('#editLastName').value;
    const currentDescription = document.querySelector('#description').value;

    // Обновляем только измененные значения
    const data = {
        IsATeacher: true,
        IsAnExpert: false,
        FirstName: currentFirstName !== '' ? currentFirstName : undefined,
        LastName: currentLastName !== '' ? currentLastName : undefined,
        CityTitle: updatedLocation.split(' ')[0],
        CountryTitle: updatedLocation.split(' ')[1],
        Description: currentDescription !== '' ? currentDescription : undefined,
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
            'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
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