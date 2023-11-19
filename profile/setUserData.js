fetchData();

function fetchData() {
    const url = 'http://localhost:7280/api/user/getuserprofile';

    const response = fetch(url, {
        method: 'GET',
        referrerPolicy: "originwhencrossorigin",
        headers: {
            'contenttype': 'application/json; charset=utf8',
            'TransferEncoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': "localhost",
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    });

    if (response.ok) {
        const responseData = response.json();
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
    const listLanguagesElement = document.getElementById('listlanguages');
    const listGradesElement = document.getElementById('listgrades');
    const listSubjectsElement = document.getElementById('listsubjects');

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
        const itemText = item.querySelector("#itemages").textContent;

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
        const itemText = item.querySelector("#itemgrades").textContent;
        console.log(itemText)
        if (grades.includes(itemText)) {
            item.classList.add("checked");
            selectedGrades.push(itemText);
        }
    });

    localStorage.setItem('editedLanguages', selectedGrades)

    //Lessons

    const lessons = userProfile.disciplineTitles;
    selectedLessonsDiv.innerHTML = lessons.map(value => `<span>${value}</span>`).join(", ");

    const dropdownItemsLessons = listSubjectsElement.querySelectorAll('.item');

    dropdownItemsLessons.forEach(item => {
        const itemText = item.querySelector("#itemlessons").textContent;

        console.log(itemText)

        if (lessons.includes(itemText)) {
            item.classList.add("checked");
            selectedLessons.push(itemText);
        }
    });

    localStorage.setItem('editedLanguages', selectedLessons)

}

