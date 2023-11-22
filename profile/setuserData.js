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
    const listGradesElement = document.getElementById('list-grades');
    const listSubjectsElement = document.getElementById('list-subjects');

    let userProfile = JSON.parse(localStorage.getItem('userProfile'));

    editFirstNameElement.value = userProfile.firstName;
    editLastNameElement.value = userProfile.lastName;
    editTeacherValueElement.value = userProfile.isATeacher;
    editExpertValueElement.value = userProfile.isAnExpert;

    countryInputElement.value = userProfile.countryTitle;
    cityInputElement.value = userProfile.cityTitle;

    descriptionElement.value = userProfile.description;
    changeInstitutionElement.value = userProfile.institution.title;

    //Languages
    const languages = userProfile.languageTitles;
    selectedLanguageDiv.innerHTML = languages.map(value => `<span>${value}</span>`).join(", ");

    const dropdownItemsLang = listLanguagesElement.querySelectorAll('.item');

    dropdownItemsLang.forEach(item => {
        const itemText = item.querySelector("#item-languages").textContent;

        if (languages.includes(itemText)) {
            item.classList.add("checked");
            selectedLanguage.push(itemText);
        }
    });

    localStorage.setItem('editedLanguages', selectedLanguage)

    //Grades
    const grades = userProfile.gradeNumbers;
    selectedGradesDiv.innerHTML = grades.map(value => `<span>${value}</span>`).join(", ");

    const dropdownItemsGrades = listGradesElement.querySelectorAll('.item');

    dropdownItemsGrades.forEach(item => {
        const itemText = item.querySelector("#item-grades").textContent;
        if (grades.includes(itemText)) {
            item.classList.add("checked");
            selectedGrades.push(itemText);
        }
    });

    localStorage.setItem('editedGrades', selectedGrades)

    //Lessons

    const lessons = userProfile.disciplineTitles;
    selectedLessonsDiv.innerHTML = lessons.map(value => `<span>${value}</span>`).join(", ");

    const dropdownItemsLessons = listSubjectsElement.querySelectorAll('.item');

    dropdownItemsLessons.forEach(item => {
        const itemText = item.querySelector("#item-lessons").textContent;

        if (lessons.includes(itemText)) {
            item.classList.add("checked");
            selectedLessons.push(itemText);
        }
    });

    localStorage.setItem('editedLessons', selectedLessons)

}

document.addEventListener('DOMContentLoaded', fetchData)
