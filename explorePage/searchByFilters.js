// const searchParams = {
//     countries: [],
//     disciplines: [],
//     grades: [],
//     languages: []
// };
//
// function addToSearchParams(filterName, filterValue) {
//     searchParams[filterName].push(filterValue);
// }
//
// function removeFromSearchParams(filterName, filterValue) {
//     const index = searchParams[filterName].indexOf(filterValue);
//     if (index !== -1) {
//         searchParams[filterName].splice(index, 1);
//     }
// }
//
// async function searchRequest() {
//     const url = 'http://localhost:7280/api/search/search-request';
//
//     try {
//         const requestUrl = `${url}?${getQueryString(searchParams)}`;
//         const response = await performFetchRequest(requestUrl);
//
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// function getQueryString(params) {
//     const queryString = Object.entries(params).map(([key, values]) => {
//         if (values.length > 0) {
//             return `${key}=${values.join(',')}`;
//         }
//         return '';
//     }).filter(query => query !== '').join('&');
//
//     return queryString;
// }
//
// async function performFetchRequest(requestUrl) {
//     const response = await fetch(requestUrl, {
//         method: 'GET',
//         referrerPolicy: 'origin-when-cross-origin',
//         headers: {
//             'content-type': 'application/json; charset=utf-8',
//             'Transfer-Encoding': 'chunked',
//             'Data': new Date().toLocaleString(),
//             'Server': 'localhost',
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         },
//     });
//
//     if (response.ok) {
//         const responseData = await response.json();
//         return responseData;
//
//
//     } else {
//         throw new Error('Произошла ошибка при выполнении запроса.');
//     }
// }
//
// // Пример использования
//
// // При выборе фильтра и нажатии кнопки "Apply"
// addToSearchParams('countries', localStorage.getItem('countriesValues'));
// addToSearchParams('disciplines', localStorage.getItem('subjectsValues'));
// addToSearchParams('grades', localStorage.getItem('gradesValues'));
// addToSearchParams('languages', localStorage.getItem('languagesValues'));
//
// // При удалении значения фильтра
// removeFromSearchParams('countries', localStorage.getItem('countriesValues'));
//
// // Выполнение запроса


// async function searchRequest() {
//     const url = 'http://localhost:7280/api/search/search-request';
// // location
//
//     const requestCountryUrl = `${url}?countries=${localStorage.getItem('countriesValues')}`;
//
//
//     const response = await fetch(requestCountryUrl, {
//         method: 'GET',
//         referrerPolicy: "origin-when-cross-origin",
//         headers: {
//             'content-type': 'application/json; charset=utf-8',
//             'Transfer-Encoding': 'chunked',
//             'Data': new Date().toLocaleString(),
//             'Server': "localhost",
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         },
//     });
//
//     if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//
//
//     } else {
//         throw new Error('Произошла ошибка при выполнении запроса.');
//     }
//
//
// // subjects
//
//     const requestSubjectUrl = `${url}?disciplines=${localStorage.getItem('subjectsValues')}`;
//     const responseSubject = await fetch(requestSubjectUrl, {
//         method: 'GET',
//         referrerPolicy: "origin-when-cross-origin",
//         headers: {
//             'content-type': 'application/json; charset=utf-8',
//             'Transfer-Encoding': 'chunked',
//             'Data': new Date().toLocaleString(),
//             'Server': "localhost",
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         },
//     });
//
//     if (responseSubject.ok) {
//         const responseData = await responseSubject.json();
//         console.log(responseData);
//
//
//     } else {
//         throw new Error('Произошла ошибка при выполнении запроса.');
//     }
//
//
// // grades
//
//     const requestGradesUrl = `${url}?grades=${localStorage.getItem('gradesValues')}`;
//     const responseGrades = await fetch(requestGradesUrl, {
//         method: 'GET',
//         referrerPolicy: "origin-when-cross-origin",
//         headers: {
//             'content-type': 'application/json; charset=utf-8',
//             'Transfer-Encoding': 'chunked',
//             'Data': new Date().toLocaleString(),
//             'Server': "localhost",
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         },
//     });
//
//     if (responseGrades.ok) {
//         const responseData = await responseGrades.json();
//         console.log(responseData);
//
//
//     } else {
//         throw new Error('Произошла ошибка при выполнении запроса.');
//     }
//
// // languages
//
//     const requestLanguagesUrl = `${url}?languages=${localStorage.getItem('languagesValues')}`;
//     const responseLanguages = await fetch(requestLanguagesUrl, {
//         method: 'GET',
//         referrerPolicy: "origin-when-cross-origin",
//         headers: {
//             'content-type': 'application/json; charset=utf-8',
//             'Transfer-Encoding': 'chunked',
//             'Data': new Date().toLocaleString(),
//             'Server': "localhost",
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         },
//     });
//
//     if (responseLanguages.ok) {
//         const responseData = await responseLanguages.json();
//         console.log(responseData);
//
//
//     } else {
//         throw new Error('Произошла ошибка при выполнении запроса.');
//     }
//
// }







async function searchRequest() {
    const baseUrl = 'http://localhost:7280/api/search/search-request';
    const accessToken = localStorage.getItem('accessToken');
    const filters = {};

    const countries = localStorage.getItem('countriesValues');
    const subjects = localStorage.getItem('subjectsValues');
    const grades = localStorage.getItem('gradesValues');
    const languages = localStorage.getItem('languagesValues');

    if (countries || subjects || grades || languages) {
        if (countries) {
            filters.countries = countries;
        }

        if (subjects) {
            filters.disciplines = subjects;
        }

        if (grades) {
            filters.grades = grades;
        }

        if (languages) {
            filters.languages = languages;
        }

        const queryString = new URLSearchParams(filters).toString();
        const requestUrl = `${baseUrl}?${queryString}`;

        await sendRequest(requestUrl, accessToken);
    } else {
        // Логика для случая, когда нет выбранных фильтров
    }
}
async function sendRequest(url, accessToken) {
    const response = await fetch(url, {
        method: 'GET',
        referrerPolicy: 'origin-when-cross-origin',
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': 'localhost',
            'Authorization': `Bearer ${accessToken}`
        },
    });

    if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);



        // classes output by filters

        const getClassSearch = document.querySelector("#requestOutput");

        getClassSearch.innerHTML = '';

        responseData.classProfiles.forEach(classSearch => {
            const teacherPreview = document.createElement('div');
            teacherPreview.className = 'class-preview';


            teacherPreview.innerHTML = `

    <div class="class-preview">
     <div class="class-preview-content">
                    <div class="class-preview-image"><img src="../images/class-preview-image.svg" alt=""></div>
                    <div class="personal-info">
                        <div class="avatar-explorePage"><img src="../images/avatar.svg" alt=""></div>
                        <div class="username">${classSearch.userFullName}</div>
                    </div>
                    <div class="class-preview-text">${classSearch.title}</div>
                    <div class="class-preview-footer">
                        <div class="class-preview-tags">
                            ${classSearch.disciplines}
                        </div>
                    </div>
                </div>
    </div>
   
  `;



            getClassSearch.appendChild(teacherPreview);
        });




    } else {
        throw new Error('Произошла ошибка при выполнении запроса.');
    }

}