const searchParams = {
    countries: [],
    disciplines: [],
    grades: [],
    languages: []
};

function addToSearchParams(filterName, filterValue) {
    searchParams[filterName].push(filterValue);
}

function removeFromSearchParams(filterName, filterValue) {
    const index = searchParams[filterName].indexOf(filterValue);
    if (index !== -1) {
        searchParams[filterName].splice(index, 1);
    }
}

async function searchRequest() {
    const url = 'http://localhost:7280/api/search/search-request';

    try {
        const requestUrl = `${url}?${getQueryString(searchParams)}`;
        const response = await performFetchRequest(requestUrl);

        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

function getQueryString(params) {
    const queryString = Object.entries(params).map(([key, values]) => {
        if (values.length > 0) {
            return `${key}=${values.join(',')}`;
        }
        return '';
    }).filter(query => query !== '').join('&');

    return queryString;
}

async function performFetchRequest(requestUrl) {
    const response = await fetch(requestUrl, {
        method: 'GET',
        referrerPolicy: 'origin-when-cross-origin',
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': 'localhost',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    });

    if (response.ok) {
        const responseData = await response.json();
        return responseData;


    } else {
        throw new Error('Произошла ошибка при выполнении запроса.');
    }
}

// Пример использования

// При выборе фильтра и нажатии кнопки "Apply"
addToSearchParams('countries', localStorage.getItem('countriesValues'));
addToSearchParams('disciplines', localStorage.getItem('subjectsValues'));
addToSearchParams('grades', localStorage.getItem('gradesValues'));
addToSearchParams('languages', localStorage.getItem('languagesValues'));

// При удалении значения фильтра
removeFromSearchParams('countries', localStorage.getItem('countriesValues'));

// Выполнение запроса
searchRequest()