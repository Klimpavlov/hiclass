async function fetchData() {
    const url = 'http://localhost:7280/api/user/get-userprofile';

    const response = await fetch(url, {
        method: 'GET',
        referrerPolicy: "origin-when-cross-origin",
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': "localhost",
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    });

    if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('userProfile', JSON.stringify(responseData.value));
    } else {
        throw new Error('Произошла ошибка при выполнении запроса.');
    }
    const editFirstNameElement = document.getElementById('editFirstName');
    const editLastNameElement = document.getElementById('editLastName');
    const editTeacherValueElement = document.getElementById('editTeacherValue');
    const editExpertValueElement = document.getElementById('editExpertValue');
    const countryInputElement = document.getElementById('countryInput');
    const cityInputElement = document.getElementById('cityInput');
    const descriptionElement = document.getElementById('description');
    const changeInstitutionElement = document.getElementById('changeInstitution');
    const listLanguagesElement = document.getElementById('list-languages');
    const listGrades = document.getElementById('list-grades');
    const listSubjects = document.getElementById('list-subjects');

    editFirstNameElement.innerText = "userProfile.firstName";
    editLastNameElement.innerText = "userProfile.lastName";
    editTeacherValueElement.value = true;
    editExpertValueElement.value = false;

    countryInputElement.innerText = "Belarus";
    cityInputElement.innerText = "Minsk";

    descriptionElement.innerText = "userProfile.description";
    changeInstitutionElement.innerText = "Гимназия 5";

    const languages = ['Chemistry', 'Math'];

    const dropdownItems = document.querySelectorAll('.item');

    dropdownItems.forEach(item => {
        const itemText = item.querySelector("#item-ages").textContent;

        if (languages.includes(itemText)) {
            item.classList.add("checked");
            selectedLanguage.push(itemText);
        }
    });

}