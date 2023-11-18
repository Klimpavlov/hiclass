// const subjectBtnFilter = document.querySelector('#select-subjects');
// const subjectFilterValues = [];
// const subjectFilterValuesDiv = document.querySelector(".selected-values");
//
// subjectBtnFilter.addEventListener("click", () => {
//     subjectBtnFilter.classList.toggle("open");
// });
//
//
// const lessons = document.querySelector('#list-subjects');
//
// let filterFn = (lesson) => true;
// generateItems(ALL_LESSONS);
//
// function generateItems(items) {
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
//                 subjectFilterValues.push(itemText);
//             } else {
//                 const index = subjectFilterValues.indexOf(itemText);
//                 if (index !== -1) {
//                     subjectFilterValues.splice(index, 1);
//                 }
//             }
//             // selectedValuesDiv.innerHTML = subjectFilterValues.map(value => `<span>${value}</span>`).join(", ");
//
//             // localStorage.setItem('editedLessons', subjectFilterValues)
//         });
//
//     })
//
//     const dropdownButtons = document.createElement('div');
//     dropdownButtons.classList.add('dropdown-buttons');
//     dropdownButtons.innerHTML = `
//     <button class="clearButton">Clear All</button>
//     <button class="applyButton">Apply</button>
//   `;
//     lessons.appendChild(dropdownButtons);
//
// }
//
//
//
//
//
//
// const gradesBtnFilter = document.querySelector('#select-grades');
// const gradesFilterValues = [];
// const gradesFilterValuesDiv = document.querySelector(".selected-values");
//
//
// gradesBtnFilter.addEventListener("click", () => {
//     gradesBtnFilter.classList.toggle("open");
// });
//
//
// const grades = document.querySelector('#list-grades');
//
//
// generateGrades(ALL_GRADES);
//
// function generateGrades(items) {
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
//     items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         item.addEventListener("click", () => {
//             item.classList.toggle("checked");
//             const itemText = item.querySelector("#item-grades").textContent;
//             if (item.classList.contains("checked")) {
//                 gradesFilterValues.push(itemText);
//             } else {
//                 const index = gradesFilterValues.indexOf(itemText);
//                 if (index !== -1) {
//                     gradesFilterValues.splice(index, 1);
//                 }
//             }
//             // gradesFilterValuesDiv.innerHTML = gradesFilterValues.map(value => `<span>${value}</span>`).join(", ");
//
//             // localStorage.setItem('editedGrades', gradesFilterValues)
//         });
//
//     })
//
//     const dropdownButtons = document.createElement('div');
//     dropdownButtons.classList.add('dropdown-buttons');
//     dropdownButtons.innerHTML = `
//     <button class="clearButton">Clear All</button>
//     <button class="applyButton">Apply</button>
//   `;
//     grades.appendChild(dropdownButtons);
//
// }
//
//
//
//
// const languageBtnFilter = document.querySelector('#select-languages');
// const languageFilterValues = [];
// const languageFilterValuesDiv = document.querySelector("#output-languages");
//
//
// languageBtnFilter.addEventListener("click", () => {
//     languageBtnFilter.classList.toggle("open");
// });
//
//
// const languages = document.querySelector('#list-languages');
//
//
// generateLanguages(ALL_LANGUAGES);
//
// function generateLanguages(items) {
//
//     const html = items.filter(filterFn).map(language => {
//         return `
//
//  <li class="item">
//         <span class="item-text" id="item-ages">${language.title}</span>
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
//             item.classList.toggle("checked");
//             const itemText = item.querySelector("#item-ages").textContent;
//             if (item.classList.contains("checked")) {
//                 languageFilterValues.push(itemText);
//             } else {
//                 const index = languageFilterValues.indexOf(itemText);
//                 if (index !== -1) {
//                     languageFilterValues.splice(index, 1);
//                 }
//             }
//             // selectedLanguageDiv.innerHTML = languageFilterValues.map(value => `<span>${value}</span>`).join(", ");
//             //
//             // localStorage.setItem('editedLanguages', languageFilterValues)
//         });
//
//     })
//
//     const dropdownButtons = document.createElement('div');
//     dropdownButtons.classList.add('dropdown-buttons');
//     dropdownButtons.innerHTML = `
//     <button class="clearButton">Clear All</button>
//     <button class="applyButton">Apply</button>
//   `;
//     languages.appendChild(dropdownButtons);
//
// }
//
//
//
//
//
//
// const applyButton = document.querySelector(".applyButton");
// applyButton.addEventListener("click", () => {
//     console.log('apply')
//     const selectedTags = subjectFilterValues.map(value => `<div class="tag">${value}</div>`).join("");
//     subjectFilterValuesDiv.innerHTML = selectedTags;
// });
//
//
// const clearButton = document.querySelector('.clearButton');
// clearButton.addEventListener("click", () => {
//     subjectFilterValuesDiv.innerHTML = "";
// })





// const dropdowns = [
//     {
//         btnFilter: document.querySelector('#select-subjects'),
//         itemsContainer: document.querySelector('#list-subjects'),
//         filterValues: [],
//         items: ALL_LESSONS
//     },
//     {
//         btnFilter: document.querySelector('#select-grades'),
//         itemsContainer: document.querySelector('#list-grades'),
//         filterValues: [],
//         items: ALL_GRADES
//     },
//     {
//         btnFilter: document.querySelector('#select-languages'),
//         itemsContainer: document.querySelector('#list-languages'),
//         filterValues: [],
//         items: ALL_LANGUAGES
//     },
//     // {
//     //     btnFilter: document.querySelector('#select-location'),
//     //     itemsContainer: document.querySelector('#list-location'),
//     //     filterValues: [],
//     //     items:[]
//     // }
//
// ];
//
// const filterValuesDiv = document.querySelector('.selected-values'); // Общий элемент для всех выбранных значений
//
// dropdowns.forEach(dropdown => {
//     const { btnFilter, itemsContainer, filterValues, items } = dropdown;
//
//     if (btnFilter) {
//         btnFilter.addEventListener('click', () => {
//             btnFilter.classList.toggle('open');
//         });
//     }
//
//     if (itemsContainer) {
//         generateItems(itemsContainer, items, filterValues);
//     }
// });
//
// function generateItems(container, items, filterValues) {
//     container.innerHTML = '';
//     items.forEach(item => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('item');
//         itemElement.innerHTML = `
//       <span class="item-text">${item.title || item.classNum}</span>
//       <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     `;
//
//         itemElement.addEventListener('click', () => {
//             itemElement.classList.toggle('checked');
//             const itemText = item.title || item.classNum;
//
//             if (itemElement.classList.contains('checked')) {
//                 filterValues.push(itemText);
//             } else {
//                 const index = filterValues.indexOf(itemText);
//                 if (index !== -1) {
//                     filterValues.splice(index, 1);
//                 }
//             }
//         });
//
//         container.appendChild(itemElement);
//     });
//
//     const dropdownButtons = document.createElement('div');
//     dropdownButtons.classList.add('dropdown-buttons');
//     dropdownButtons.innerHTML = `
//     <button class="clearButton">Clear All</button>
//     <button class="applyButton">Apply</button>
//   `;
//     container.appendChild(dropdownButtons);
//
//     const clearButton = dropdownButtons.querySelector('.clearButton');
//     clearButton.addEventListener('click', () => {
//         filterValues.length = 0;
//         updateSelectedValues(); // Обновление выбранных значений
//     });
// }
//
// function updateSelectedValues() {
//     filterValuesDiv.innerHTML = "";
//
//     dropdowns.forEach((dropdown) => {
//         const { filterValues } = dropdown;
//
//         filterValues.forEach((value) => {
//             const tagElement = document.createElement("div");
//             tagElement.classList.add("tag");
//             tagElement.textContent = value;
//
//             const deleteTag = document.createElement("span");
//             deleteTag.classList.add("delete-tag");
//             deleteTag.innerHTML = "&times;";
//
//             deleteTag.addEventListener("click", () => {
//                 const index = filterValues.indexOf(value);
//                 if (index !== -1) {
//                     filterValues.splice(index, 1);
//                     updateSelectedValues(); // Обновление выбранных значений
//                 }
//             });
//
//             tagElement.appendChild(deleteTag);
//             localStorage.setItem('filterValues', filterValues)
//             filterValuesDiv.appendChild(tagElement);
//         });
//     });
// }
//
// const applyButtons = document.querySelectorAll('.applyButton');
// applyButtons.forEach(applyButton => {
//     applyButton.addEventListener('click', () => {
//         updateSelectedValues();
//     });
// });



// filter subjects

const subjectBtnFilter = document.querySelector('#select-subjects');
const subjectFilterValues = [];
const subjectFilterValuesDiv = document.querySelector(".selected-subjects");

subjectBtnFilter.addEventListener("click", () => {
    subjectBtnFilter.classList.toggle("open");
});


const lessons = document.querySelector('#list-subjects');

let subjectFilterFn = (lesson) => true;
generateItems(ALL_LESSONS, subjectFilterFn);

function generateItems(items, filterFn) {

    const html = items.filter(filterFn).map(lesson => {
        return `

<li class="item" data-checked="false">
        <span class="item-text" id="item-subjects">${lesson.title}</span>
        <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
    </li>
    `;
    })

        .join('');

    lessons.innerHTML = html;


    items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener("click", () => {
            const checked = item.getAttribute("data-checked") === "true";
            item.setAttribute("data-checked", !checked);
            const itemText = item.querySelector("#item-subjects").textContent;

            if (!checked) {
                subjectFilterValues.push(itemText);
            } else {
                const index = subjectFilterValues.indexOf(itemText);
                if (index !== -1) {
                    subjectFilterValues.splice(index, 1);
                }
            }
        });
    });


    const dropdownButtons = document.createElement('div');
    dropdownButtons.classList.add('dropdown-buttons');
    dropdownButtons.innerHTML = `
    <button class="clearButton" id="subjects-clear">Clear All</button>
    <button class="applyButton" id="subjects-apply">Apply</button>
  `;
    lessons.appendChild(dropdownButtons);

}
const applyButton = document.querySelector(".applyButton");
applyButton.addEventListener("click", () => {
    console.log('apply')
    const selectedTags = subjectFilterValues.map(value =>
        `<div class="tag">${value}
                 <span class="delete-tag" id="deleteSubject">&times;</span></div>`).join("");
    subjectFilterValuesDiv.innerHTML = selectedTags;
    const tagCloseButtons = document.querySelectorAll("#deleteSubject");
    tagCloseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tag = button.parentNode;
            const tagText = tag.textContent.trim();
            const index = subjectFilterValues.indexOf(tagText);
            if (index !== -1) {
                subjectFilterValues.splice(index, 1);
            }
            tag.remove();
        });
    });
    localStorage.setItem('subjectsValues', subjectFilterValues)
    searchRequest();
});


const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener("click", () => {
    subjectFilterValuesDiv.innerHTML = "";
})



//  filter grades


const gradesBtnFilter = document.querySelector('#select-grades');
const gradesFilterValues = [];
const gradesFilterValuesDiv = document.querySelector(".selected-grades");

gradesBtnFilter.addEventListener("click", () => {
    gradesBtnFilter.classList.toggle("open");
});


const grades = document.querySelector('#list-grades');

let gradesFilterFn = (grade) => true;
generateGrades(ALL_GRADES, gradesFilterFn);

function generateGrades(items, filterFn) {

    const html = items.filter(filterFn).map(grade => {
        return `

  <li class="item" data-checked="false">
        <span class="item-text" id="item-grades">${grade.classNum}</span>
        <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
    </li>
    `;
    })

        .join('');

    grades.innerHTML = html;


    items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener("click", () => {
            const checked = item.getAttribute("data-checked") === "true";
            item.setAttribute("data-checked", !checked);
            const itemText = item.querySelector("#item-grades").textContent;

            if (!checked) {
                gradesFilterValues.push(itemText);
            } else {
                const index = gradesFilterValues.indexOf(itemText);
                if (index !== -1) {
                    gradesFilterValues.splice(index, 1);
                }
            }
        });
    });

    const dropdownButtons = document.createElement('div');
    dropdownButtons.classList.add('dropdown-buttons');
    dropdownButtons.innerHTML = `
    <button class="clearButton" id="grades-clear">Clear All</button>
    <button class="applyButton" id="grades-apply">Apply</button>
  `;
    grades.appendChild(dropdownButtons);

}
const applyButtonGrades = document.querySelector("#grades-apply");
applyButtonGrades.addEventListener("click", () => {
    console.log('grade')
    const selectedTags = gradesFilterValues.map(value =>
        `<div class="tag">${value}
                 <span class="delete-tag" id="deleteGrade">&times;</span></div>`).join("");
    gradesFilterValuesDiv.innerHTML = selectedTags;
    const tagCloseButtons = document.querySelectorAll("#deleteGrade");
    tagCloseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tag = button.parentNode;
            const tagText = tag.textContent.trim();
            const index = gradesFilterValues.indexOf(tagText);
            if (index !== -1) {
                gradesFilterValues.splice(index, 1);
            }
            tag.remove();
        });
    });
    localStorage.setItem('gradesValues', gradesFilterValues)
    searchRequest();
});


const clearButtonGrades = document.querySelector('#grades-clear');
clearButtonGrades.addEventListener("click", () => {
    gradesFilterValuesDiv.innerHTML = "";
})


// languages


const languagesBtnFilter = document.querySelector('#select-languages');
const languagesFilterValues = [];
const languagesFilterValuesDiv = document.querySelector(".selected-languages");

languagesBtnFilter.addEventListener("click", () => {
    languagesBtnFilter.classList.toggle("open");
});


const languages = document.querySelector('#list-languages');

let languagesFilterFn = (language) => true;
generateLanguages(ALL_LANGUAGES, languagesFilterFn);
function generateLanguages(items, filterFn) {

    const html = items.filter(filterFn).map(language => {
        return `

 <li class="item">
        <span class="item-text" id="item-languages">${language.title}</span>
        <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
    </li>
    `;
    })

        .join('');

    languages.innerHTML = html;


    items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            const itemText = item.querySelector("#item-languages").textContent;
            if (item.classList.contains("checked")) {
                languagesFilterValues.push(itemText);
            } else {
                const index = languagesFilterValues.indexOf(itemText);
                if (index !== -1) {
                    languagesFilterValues.splice(index, 1);
                }
            }
            // selectedValuesDiv.innerHTML = subjectFilterValues.map(value => `<span>${value}</span>`).join(", ");

            // localStorage.setItem('editedLessons', subjectFilterValues)
        });

    })

    const dropdownButtons = document.createElement('div');
    dropdownButtons.classList.add('dropdown-buttons');
    dropdownButtons.innerHTML = `
    <button class="clearButton" id="languages-clear">Clear All</button>
    <button class="applyButton" id="languages-apply">Apply</button>
  `;
    languages.appendChild(dropdownButtons);

}
const applyButtonLanguages = document.querySelector("#languages-apply");
applyButtonLanguages.addEventListener("click", () => {

    const selectedTags = languagesFilterValues.map(value =>
        `<div class="tag">${value}
                 <span class="delete-tag" id="deleteLanguage">&times;</span></div>`).join("");
    languagesFilterValuesDiv.innerHTML = selectedTags;
    const tagCloseButtons = document.querySelectorAll("#deleteLanguage");
    tagCloseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tag = button.parentNode;
            const tagText = tag.textContent.trim();
            const index = languagesFilterValues.indexOf(tagText);
            if (index !== -1) {
                languagesFilterValues.splice(index, 1);
            }
            tag.remove();
        });
    });
    localStorage.setItem('languagesValues', languagesFilterValues)
    searchRequest();
});


const clearButtonLanguages = document.querySelector('#languages-clear');
clearButtonLanguages.addEventListener("click", () => {
    languagesFilterValuesDiv.innerHTML = "";
})