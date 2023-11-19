async function postCheckCodeFromEmail() {
    const url = 'http://localhost:7280/api/user/check-reset-password-code';

    // const data = {
    //     Email: document.getElementById("current-email").value,
    // };

    const queryUrl = `${url}?code=${document.getElementById("resetCode").value}`;

    // console.log(JSON.stringify(data));

    fetch(queryUrl, {
        method: 'POST',
        referrerPolicy: "origin-when-cross-origin",
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'Transfer-Encoding': 'chunked',
            'Data': new Date().toLocaleString(),
            'Server': "localhost",
            'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
        },
        // body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Произошла ошибка при выполнении запроса.');
            }
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.log(error);
        });
}