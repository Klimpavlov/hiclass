const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    filter.addEventListener('click', function() {
        // Удаляем класс "active" у всех фильтров
        filters.forEach(filter => {
            filter.classList.remove('active');
        });

        // Добавляем класс "active" к текущему фильтру
        this.classList.add('active');
    });
});

/* dropdowns professional details */

const editInputValueTeacher = document.querySelector('#editTeacherValue').checked;
const editInputValueExpert = document.querySelector('#editExpertValue').checked;
if (editInputValueTeacher === true) {
    localStorage.setItem('editTeacher', true);
}
if(editInputValueTeacher === false) {
    localStorage.setItem('editTeacher', false);
}

if (editInputValueExpert === true) {
    localStorage.setItem('editExpert', true);
}
if(editInputValueExpert === false) {
    localStorage.setItem('editExpert', false);
}


//
// const selectLessonsBtn = document.querySelector('#select-subjects');
// const selectedLessons = [];
// const selectedLessonsDiv = document.querySelector("#output-subjects");
//
//
// selectLessonsBtn.addEventListener("click", () => {
//     selectLessonsBtn.classList.toggle("open");
// });
//
//
// const lessons = document.querySelector('#list-subjects');
//
// let subjectFilterFn = (lesson) => true;
// generateItems(ALL_LESSONS, subjectFilterFn);
//
// function generateItems(items, filterFn) {
//
//     const html = items.filter(filterFn).map(lesson => {
//         return `
//
//  <li class="item">
//         <span class="item-text" id="item-lessons">${lesson.title}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//     })
//
//         .join('');
//
//     lessons.innerHTML = html;
//
//
//     items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("checked");
//             const itemText = item.querySelector("#item-lessons").textContent;
//             if (item.classList.contains("checked")) {
//                 selectedLessons.push(itemText);
//             } else {
//                 const index = selectedLessons.indexOf(itemText);
//                 if (index !== -1) {
//                     selectedLessons.splice(index, 1);
//                 }
//             }
//             selectedLessonsDiv.innerHTML = selectedLessons.map(value => `<span>${value}</span>`).join(", ");
//
//             localStorage.setItem('editedLessons', selectedLessons)
//         });
//
//     })
//
// }
//
//
//
//
//
//
// const selectGradesBtn = document.querySelector('#select-grades');
// const selectedGrades = [];
// const selectedGradesDiv = document.querySelector("#output-grades");
//
//
// selectGradesBtn.addEventListener("click", () => {
//     selectGradesBtn.classList.toggle("open");
// });
//
//
// const grades = document.querySelector('#list-grades');
//
//
// let gradesFilterFn = (grade) => true;
// generateGrades(ALL_GRADES, gradesFilterFn);
//
// function generateGrades(items, filterFn) {
//
//     const html = items.filter(filterFn).map(grade => {
//         return `
//
//  <li class="item">
//         <span class="item-text" id="item-grades">${grade.classNum}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//     })
//
//         .join('');
//
//     grades.innerHTML = html;
//
//
//     // items = document.querySelectorAll('.item');
//     // items.forEach(item => {
//     //     item.addEventListener("click", () => {
//     //         item.classList.toggle("checked");
//     //         const itemText = item.querySelector("#item-grades").textContent;
//     //         if (item.classList.contains("checked")) {
//     //             selectedGrades.push(itemText);
//     //         } else {
//     //             const index = selectedGrades.indexOf(itemText);
//     //             if (index !== -1) {
//     //                 selectedGrades.splice(index, 1);
//     //             }
//     //         }
//     //         selectedGradesDiv.innerHTML = selectedGrades.map(value => `<span>${value}</span>`).join(", ");
//     //
//     //         localStorage.setItem('editedGrades', selectedGrades)
//     //     });
//     //
//     // })
//
//     items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             const checked = item.getAttribute("data-checked") === "true";
//             item.setAttribute("data-checked", !checked);
//             const itemText = item.querySelector("#item-grades").textContent;
//
//             if (!checked) {
//                 selectedGrades.push(itemText);
//             } else {
//                 const index = selectedGrades.indexOf(itemText);
//                 if (index !== -1) {
//                     selectedGrades.splice(index, 1);
//                 }
//             }
//             selectedGradesDiv.innerHTML = selectedGrades.map(value => `<span>${value}</span>`).join(", ");
//
//             localStorage.setItem('editedGrades', selectedGrades)
//         });
//
//     });
//
// }
//
//
//
//
// const selectLanguageBtn = document.querySelector('#select-languages');
// const selectedLanguage = [];
// const selectedLanguageDiv = document.querySelector("#output-languages");
//
//
// selectLanguageBtn.addEventListener("click", () => {
//     selectLanguageBtn.classList.toggle("open");
// });
//
//
// const languages = document.querySelector('#list-languages');
//
//
// let languagesFilterFn = (languages) => true;
// generateLanguages(ALL_LANGUAGES, languagesFilterFn);
// function generateLanguages(items, filterFn) {
//
//     const html = items.filter(filterFn).map(language => {
//         return `
//
//  <li class="item">
//         <span class="item-text" id="item-languages">${language.title}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//     })
//
//         .join('');
//
//     languages.innerHTML = html;
//
//
//     items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             const checked = item.getAttribute("data-checked") === "true";
//             item.setAttribute("data-checked", !checked);
//             const itemText = item.querySelector("#item-languages").textContent;
//
//             if (!checked) {
//                 selectedLanguage.push(itemText);
//             } else {
//                 const index = selectedLanguage.indexOf(itemText);
//                 if (index !== -1) {
//                     selectedLanguage.splice(index, 1);
//                 }
//             }
//             selectedLanguageDiv.innerHTML = selectedLanguage.map(value => `<span>${value}</span>`).join(", ");
//
//             localStorage.setItem('editedLanguages', selectedLanguage)
//         });
//
//     });
//
//
//
//
// }


const selectedLanguages = [];
const selectedGrades = [];
const selectedLessons = [];

function setupDropdown(dropdownId, outputId, listId, itemsArray, selectedItems) {
    const selectBtn = document.querySelector(`#${dropdownId}`);
    const selectedDiv = document.querySelector(`#${outputId}`);
    const list = document.querySelector(`#${listId}`);

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });

    generateItems(itemsArray);

    function generateItems(items) {
        const html = items.map((item) => {
            return `
        <li class="item">
          <span class="item-text">${item.title || item.classNum}</span>
          <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
        </li>
      `;
        }).join('');

        list.innerHTML = html;

        const listItems = list.querySelectorAll('.item');
        listItems.forEach(item => {
            item.addEventListener("click", () => {
                const checked = item.classList.toggle("checked");
                const itemText = item.querySelector(".item-text").textContent;

                if (checked) {
                    selectedItems.push(itemText);
                } else {
                    const index = selectedItems.indexOf(itemText);
                    if (index !== -1) {
                        selectedItems.splice(index, 1);
                    }
                }

                selectedDiv.innerHTML = selectedItems.map(value => `<span>${value}</span>`).join(", ");
                localStorage.setItem(`edited${outputId.charAt(7).toUpperCase() + outputId.slice(8)}`, selectedItems);
            });
        });
    }
}

setupDropdown('select-languages', 'output-languages', 'list-languages', ALL_LANGUAGES, selectedLanguages);
setupDropdown('select-grades', 'output-grades', 'list-grades', ALL_GRADES, selectedGrades);
setupDropdown('select-lessons', 'output-lessons', 'list-lessons', ALL_LESSONS, selectedLessons);




/* api search */


async function fetchInstitution(searchText) {
    let response = await fetch(`https://search-maps.yandex.ru/v1/?text=${searchText}&type=biz&lang=ru_RU&apikey=6d742c7a-847a-40eb-b9a2-ae34493ad1f8
    
`);

    let data = await response.json();
    return data;
}

function renderInstitution(items) {
    console.log(items);
    let target = document.querySelector('.institution-items')
    const html = items.map(item => {
        return `

 <li class="item">
        <span class="item-text">${item.properties.description}</span>
    </li>
    `;
    })
        .join('');

    target.innerHTML = html;
    target.style.display = items.length > 0 ? 'block' : 'none';

    const itemElements = document.querySelectorAll('.item');
    itemElements.forEach(item => {
        item.addEventListener('click', () => {
            const selectedValue = item.querySelector('.item-text').textContent;
            document.querySelector('#changeInstitution').value = selectedValue;

            localStorage.setItem('selectedValue', selectedValue);
        });
    });

}


async function searchInstitution() {
    const searchInput = document.querySelector('#changeInstitution');
    const text = searchInput.value.toLowerCase();
    const response = await fetchInstitution(text);
    let items = response.features.filter(item => {
        return item.properties.description.toLowerCase();
    });
    console.log(items);

    renderInstitution(items)
}



// get countries

var countriesData = []; // Local variable to store the countries data
var citiesData = []; // Local variable to store the cities data

function getCountries() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://countriesnow.space/api/v0.1/countries", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            countriesData = response.data.map(function (item) {
                return item.country;
            });
            console.log(countriesData); // Output countries data in the console
        } else if (xhr.readyState === 4) {
            console.error("Error: " + xhr.status);
        }
    };

    xhr.send();
}

function filterCountries() {
    var countryInput = document.getElementById("countryInput").value.toLowerCase();
    var filteredCountries = countriesData.filter(function (country) {
        return country.toLowerCase().startsWith(countryInput);
    });

    var dropdown = document.getElementById("countryDropdown");
    dropdown.innerHTML = "";

    filteredCountries.forEach(function (country) {
        var option = document.createElement("div");
        option.className = "dropdown-list-item";
        option.textContent = country;
        option.addEventListener("click", function () {
            document.getElementById("countryInput").value = country;
            dropdown.style.display = "none";
            getCities();
        });
        dropdown.appendChild(option);
    });

    if (filteredCountries.length > 0) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function getCities() {
    var countryName = document.getElementById("countryInput").value;
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://countriesnow.space/api/v0.1/countries/cities", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            citiesData = response.data;
            console.log(citiesData); // Output cities data in the console
        } else if (xhr.readyState === 4) {
            console.error("Error: " + xhr.status);
        }
    };

    var requestBody = JSON.stringify({ country: countryName });
    xhr.send(requestBody);
}

function filterCities() {
    var cityInput = document.getElementById("cityInput").value.toLowerCase();
    var filteredCities = citiesData.filter(function (city) {
        return city.toLowerCase().startsWith(cityInput);
    });

    var dropdown = document.getElementById("cityDropdown");
    dropdown.innerHTML = "";

    filteredCities.forEach(function (city) {
        var option = document.createElement("div");
        option.className = "dropdown-list-item";
        option.textContent = city;
        option.addEventListener("click", function () {
            document.getElementById("cityInput").value = city;
            dropdown.style.display = "none";
        });
        dropdown.appendChild(option);
    });

    if (filteredCities.length > 0) {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
function showCityDropdown() {
    var dropdown = document.getElementById("cityDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Загрузка списка стран при загрузке страницы
window.addEventListener("DOMContentLoaded", function () {
    getCountries();
});

// const inputValueCountry = document.querySelector('#countryInput').value;
// localStorage.setItem('locationCountry', inputValueCountry);
// const inputValueCity = document.querySelector('#cityInput').value;
// localStorage.setItem('locationCity', inputValueCity);



/* render login&security page */

let profileInfoBtn = document.querySelector('.profile-info')
let loginAndSecurityBtn = document.querySelector('.profile-login');
let settingsProfileHTML = document.querySelector('.content').innerHTML;
loginAndSecurityBtn.addEventListener("click",  () => {
    let loginAndSecurity = document.createElement('div');
    document.body.append(loginAndSecurity)
    loginAndSecurity.innerHTML = `
    <div class="content">
        <div class="email-address">
            <div class="position-verification-title">Email address</div>
            <div class="position-verification-text">
                <span>Lorem ipsum dolor sit amet consectetur. Diam amet eget nam porttitor vitae non viverra.</span>
            </div>
            <div class="description">
                <div class="input-title">Email</div>
                <div class="">
                    <label><input name="institution-name" class="institution-name-input" type="text"
                                 id="new-email" placeholder=""></label>
                </div>
            </div>
            <div class="update">
                <button onclick="postChangeEmail()" class="update-btn">Update</button>
            </div>
        </div>
        <div class="password-reset">
            <div class="position-verification-title">Password reset</div>
            <div class="position-verification-text">
                <span>Lorem ipsum dolor sit amet consectetur. Diam amet eget nam porttitor vitae non viverra.</span>
            </div>
            <div class="reset">
                <div class="input-title">Old password</div>
                <div class="">
                    <label><input name="institution-name" class="institution-name-input" type="password"
                                  placeholder="Enter your old password"></label>
                </div>
            </div>
            <div class="reset">
                <div class="input-title">New password</div>
                <div class="">
                    <label><input name="institution-name" class="institution-name-input" type="password"
                                 id="new-password" placeholder="At least 6 characters"></label>
                </div>
            </div>
            <div class="reset">
                <div class="input-title">Confirm new password</div>
                <div class="">
                    <label><input name="institution-name" class="institution-name-input" type="password"
                                  placeholder="Re-enter new password"></label>
                </div>
            </div>
            <div class="update">
                <button onclick="postChangePassword()" class="update-btn">Change password</button>
            </div>
        </div>
        <div class="delete-account">
            <div class="position-verification-title">Delete account</div>
            <div class="position-verification-text">
                <span>You will not be able to restore your account</span>
            </div>
            <div class="delete">
                <button onclick="deleteUser()" class="delete-btn">Delete account</button>
            </div>
        </div>
        </div>

    `

    profileInfoBtn.addEventListener('click', () => {
        document.querySelector('.content').innerHTML = settingsProfileHTML;
    });

    document.querySelector('.content').replaceWith(loginAndSecurity);

})


