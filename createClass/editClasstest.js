// function editClass() {
//
//     let editClass = document.createElement('div');
//     document.body.append(editClass)
//     editClass.innerHTML = `
//     <div class="modal" id="modal">
//     <div class="modal-top">
//         <div class="createClass">Create class</div>
//         <div class=""><img src="../images/Cross.svg" alt=""></div>
//     </div>
//     <div class="modal-bar">
//         <div class="modal-bar-section">
//             <div class="class-photo-header">Class photo (required)</div>
//         </div>
//         <div class="modal-bar-column">
//             <div class="class-title">
//                 <div class="input-title">Title</div>
//                 <div class="">
//                     <label><input name="institution-name" class="class-title-input" type="text"
//                                 id="class-title"  placeholder="Class title"></label>
//                 </div>
//             </div>
//             <div class="class-grade-and-age">
//                 <div class="grade-title">
//                     <div class="input-title">Grade</div>
//                     <div class="select-btn" id="select-grades">
//                         <span class="btn-text" id="output-grades">${localStorage.getItem('grades')}</span>
//                         <span class="arrow-dwn">
//         <img src="../images/chevron-down.svg" alt="">
//     </span>
//                     </div>
//                     <ul class="list-items" id="list-grades">
//
//                     </ul>
//                 </div>
//                 <div class=age-title">
//                     <div class="input-title">Age</div>
//                     <div class="select-btn" id="select-ages">
//                         <span class="btn-text" id="output-ages">Select</span>
//                         <span class="arrow-dwn">
//         <img src="../images/chevron-down.svg" alt="">
//     </span>
//                     </div>
//                     <ul class="list-items" id="list-ages">
//
//                     </ul>
//                 </div>
//             </div>
//             <div class="class-subjects">
//                 <div class="input-title">Subjects</div>
//                 <div class="select-btn" id="select-subjects">
//                     <span class="btn-text" id="output-subjects">${localStorage.getItem('disciplines').split(', ')}</span>
//                     <span class="arrow-dwn">
//         <img src="../images/chevron-down.svg" alt="">
//     </span>
//                 </div>
//                 <ul class="list-items" id="list-subjects">
//
//                 </ul>
//             </div>
//             <div class="class-description">
//                 <div class="input-title">Description</div>
//                 <div class="">
//                     <label><input name="institution-name" class="class-title-input" type="text"
//                                   placeholder="Class description" id="class-description"></label>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="modal-bottom">
//         <div class="cancel-btn">cancel</div>
//         <div class="update-btn" id="update-class-btn">save changes</div>
//     </div>
// </div>
//
//     `
//
//
//     let cancelButton = document.querySelector('.cancel-btn');
//     cancelButton.addEventListener('click', () => {
//         closeModal();
//     })
//
//
//     const inputDescription = document.querySelector('#class-description');
//
//     const selectBtn = document.querySelector('#select-subjects');
//     const selectedValues = [];
//     const selectedValuesDiv = document.querySelector("#output-subjects");
//
//
//     selectBtn.addEventListener("click", () => {
//         selectBtn.classList.toggle("open");
//     });
//
//
//     const lessons = document.querySelector('#list-subjects');
//
//     let filterFn = (lesson) => true;
//     generateItems(ALL_LESSONS);
//
//     function generateItems(items) {
//
//         const html = items.filter(filterFn).map(lesson => {
//             return `
//
//  <li class="item">
//         <span class="item-text" id="item-lessons">${lesson.title}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//         })
//
//             .join('');
//
//         lessons.innerHTML = html;
//
//
//
//
//         items = document.querySelectorAll('.item');
//         items.forEach(item => {
//             item.addEventListener("click", () => {
//                 item.classList.toggle("checked");
//                 const itemText = item.querySelector("#item-lessons").textContent;
//                 if (item.classList.contains("checked")) {
//                     selectedValues.push(itemText);
//                 } else {
//                     const index = selectedValues.indexOf(itemText);
//                     if (index !== -1) {
//                         selectedValues.splice(index, 1);
//                     }
//                 }
//                 selectedValuesDiv.innerHTML = selectedValues.map(value => `<span>${value}</span>`).join(", ");
//
//                 localStorage.setItem('disciplines', selectedValues)
//             });
//
//
//         })
//
//     }
//
//
//
//
//
//
//     const selectGradesBtn = document.querySelector('#select-grades');
//     const selectedGrades = [];
//     const selectedGradesDiv = document.querySelector("#output-grades");
//
//
//     selectGradesBtn.addEventListener("click", () => {
//         selectGradesBtn.classList.toggle("open");
//     });
//
//
//     const grades = document.querySelector('#list-grades');
//
//
//     generateGrades(ALL_GRADES);
//
//     function generateGrades(items) {
//
//         const html = items.filter(filterFn).map(grade => {
//             return `
//
//  <li class="item">
//         <span class="item-text" id="item-grades">${grade.classNum}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//         })
//
//             .join('');
//
//         grades.innerHTML = html;
//
//
//
//
//         items = document.querySelectorAll('.item');
//         items.forEach(item => {
//             item.addEventListener("click", () => {
//                 item.classList.toggle("checked");
//                 const itemText = item.querySelector("#item-grades").textContent;
//                 if (item.classList.contains("checked")) {
//                     selectedGrades.push(itemText);
//                 } else {
//                     const index = selectedGrades.indexOf(itemText);
//                     if (index !== -1) {
//                         selectedGrades.splice(index, 1);
//                     }
//                 }
//                 selectedGradesDiv.innerHTML = selectedGrades.map(value => `<span>${value}</span>`).join(", ");
//
//                 localStorage.setItem('grades', selectedGrades)
//
//             });
//
//         })
//
//     }
//
//
//
//
//     const selectAgeBtn = document.querySelector('#select-ages');
//     const selectedAge = [];
//     const selectedAgeDiv = document.querySelector("#output-ages");
//
//
//     selectAgeBtn.addEventListener("click", () => {
//         selectAgeBtn.classList.toggle("open");
//     });
//
//
//     const ages = document.querySelector('#list-ages');
//
//
//     generateAges(ALL_GRADES);
//
//     function generateAges(items) {
//
//         const html = items.filter(filterFn).map(age => {
//             return `
//
//  <li class="item">
//         <span class="item-text" id="item-ages">${age.age}</span>
//         <span class="checkbox"><i class="fa-solid fa-check check-icon"></i></span>
//     </li>
//     `;
//         })
//
//             .join('');
//
//         ages.innerHTML = html;
//
//
//         items = document.querySelectorAll('.item');
//         items.forEach(item => {
//             item.addEventListener("click", (key, value) => {
//                 item.classList.toggle("checked");
//                 const itemText = item.querySelector("#item-ages").textContent;
//                 if (item.classList.contains("checked")) {
//                     selectedAge.push(itemText);
//                 } else {
//                     const index = selectedAge.indexOf(itemText);
//                     if (index !== -1) {
//                         selectedAge.splice(index, 1);
//                     }
//                 }
//                 selectedAgeDiv.innerHTML = selectedAge.map(value => `<span>${value}</span>`).join(", ");
//             });
//
//
//         })
//
//     }
//
//     const updateClassBtn = document.querySelector('#update-class-btn');
//     updateClassBtn.addEventListener('click', () => {
//         updateClass();
//     })
// }
//
//
//
// function updateClass() {
//     const editedClassBlock = document.createElement('div');
//     editedClassBlock.classList.add('editedClassBlock');
//
//     editedClassBlock.innerHTML = `
//     <div class="class-preview">
//       <div class="class-preview-image">
//         <img src="../images/class-preview-image.svg" alt="">
//       </div>
//       <div class="class-preview-text"></div>
//       <div class="class-preview-footer">
//         <div class="class-preview-tags" id="updatedDisciplines">
//          ${localStorage.getItem('disciplines').split(',').map(value => `<span class="class-preview-tag">${value}</span>`).join("")}
//         </div>
//         <div class="menu-action">
//           <img src="../images/menu-action.svg" alt="">
//           <div class="pop-over-menu">
//             <div class="edit-class-btn">Edit</div>
//             <div class="delete-class-btn">Delete</div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-delete-overlay">
//       <div class="modal-delete-top">
//         <div class="modal-delete-content">
//           <p>Deleting this class will remove it from your account forever. Are you sure you want to continue?</p>
//         </div>
//         <div class="modal-delete-buttons">
//           <button class="cancel-button">Cancel</button>
//           <button class="delete-button">Delete</button>
//         </div>
//       </div>
//     </div>
//   `
//
//     classBlock.replaceWith(editedClassBlock)
//     closeModal()
//
//
// }
//
