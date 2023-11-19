async function defaultSearchRequest() {


    const url = 'http://localhost:7280/api/search/default-search-request';



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


            // classProfilesByCountry

        const getTeachers = document.querySelector("#getClassByCountry");

        responseData.classProfilesByCountry.forEach(userTeacher => {
            const teacherPreview = document.createElement('div');
            teacherPreview.className = 'class-preview';


            teacherPreview.innerHTML = `
    <div class="class-preview">
     <div class="class-preview-content">
                    <div class="class-preview-image"><img src="../images/class-preview-image.svg" alt=""></div>
                    <div class="personal-info">
                        <div class="avatar-explorePage"><img src="../images/avatar.svg" alt=""></div>
                        <div class="username">${userTeacher.userFullName}</div>
                    </div>
                    <div class="class-preview-text">${userTeacher.title}</div>
                    <div class="class-preview-footer">
                        <div class="class-preview-tags">
                            ${userTeacher.disciplines}
                        </div>
                    </div>
                </div>
    </div>
  `;



            getTeachers.appendChild(teacherPreview);
        });


        // classProfilesByDisciplines

        const getClass = document.querySelector("#getClassByGeography");

        responseData.classProfilesByDisciplines.forEach(userTeacher => {
            const teacherPreview = document.createElement('div');
            teacherPreview.className = 'class-preview';


            teacherPreview.innerHTML = `
    <div class="class-preview">
     <div class="class-preview-content">
                    <div class="class-preview-image"><img src="../images/class-preview-image.svg" alt=""></div>
                    <div class="personal-info">
                        <div class="avatar-explorePage"><img src="../images/avatar.svg" alt=""></div>
                        <div class="username">${userTeacher.userFullName}</div>
                    </div>
                    <div class="class-preview-text">${userTeacher.title}</div>
                    <div class="class-preview-footer">
                        <div class="class-preview-tags">
                            ${userTeacher.disciplines}
                        </div>
                    </div>
                </div>
    </div>
  `;
            getClass.appendChild(teacherPreview);
        });

    } else {
        throw new Error('Произошла ошибка при выполнении запроса.');
    }


}

document.addEventListener('DOMContentLoaded', defaultSearchRequest);
