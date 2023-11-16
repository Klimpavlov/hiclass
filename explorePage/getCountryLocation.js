async function getCountryLocation() {
    const url = 'http://localhost:7280/api/Location/all-country-locations';

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
        console.log(responseData);

        // const countryValues =  document.querySelector("#list-location");
        // countryValues.textContent = `${responseData.coutryTitles}`;

        // const dropdownLocation = dropdowns.find(dropdown => dropdown.btnFilter === document.querySelector('#select-location'));
        // generateItems(dropdownLocation.itemsContainer, responseData.coutryTitles, dropdownLocation.filterValues);

        const countriesBtnFilter = document.querySelector('#select-location');
        const countriesFilterValues = [];
        const countriesFilterValuesDiv = document.querySelector(".selected-values");

        countriesBtnFilter.addEventListener("click", () => {
            countriesBtnFilter.classList.toggle("open");
        });


        const location = document.querySelector('#list-location');

        let filterFn = (lesson) => true;
        generateItems(responseData.coutryTitles);

        function generateItems(items) {

            const html = items.filter(filterFn).map(country => {
                return `

 <li class="item" id="item-countries-container">
        <span class="item-text" id="item-countries">${country}</span>
        <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
    </li>
    `;
            })

                .join('');

            location.innerHTML = html;


            items = document.querySelectorAll('#item-countries-container');
            items.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.toggle("checked");
                    const itemText = item.querySelector("#item-countries").textContent;
                    if (item.classList.contains("checked")) {
                        countriesFilterValues.push(itemText);
                    } else {
                        const index = countriesFilterValues.indexOf(itemText);
                        if (index !== -1) {
                            countriesFilterValues.splice(index, 1);
                        }
                    }
                    // selectedValuesDiv.innerHTML = subjectFilterValues.map(value => `<span>${value}</span>`).join(", ");

                    // localStorage.setItem('editedLessons', subjectFilterValues)
                });

            })

            const dropdownButtons = document.createElement('div');
            dropdownButtons.classList.add('dropdown-buttons');
            dropdownButtons.innerHTML = `
    <button class="clearButton">Clear All</button>
    <button class="applyButton">Apply</button>
  `;
            location.appendChild(dropdownButtons);

        }

        // const applyButton = document.querySelector(".applyButton");
        // applyButton.addEventListener("click", () => {
        //     console.log('apply')
        //     const selectedTags = countriesFilterValues.map(value => `<div class="tag">${value}</div>`).join("");
        //     countriesFilterValuesDiv.innerHTML = selectedTags;
        // });
        //
        //
        // const clearButton = document.querySelector('.clearButton');
        // clearButton.addEventListener("click", () => {
        //     countriesFilterValuesDiv.innerHTML = "";
        // })

    } else {
        throw new Error('Произошла ошибка при выполнении запроса.');
    }


}

document.addEventListener('DOMContentLoaded', getCountryLocation);


