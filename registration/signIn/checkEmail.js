function checkEmail() {

    let checkEmail = document.createElement('div');
    document.body.append(checkEmail)
    checkEmail.innerHTML = `
    <div class="checkEmail">
  <div class="title-and-subtle">
    <div class="title">Check your email</div>
    <div class="label-and-CTA">
      <div class="label">We’ve sent an email to lisa@wonderworld.com. Please make sure:</div>
      </div>
  </div>
 <div class="content-body">
        <div class="inputs">
            <div class="first-name">
                <div class="">
                    <label><input class="first-name-input" id="resetCode" type="text"
                                  placeholder="Enter your code from email"></label>
                </div>
            </div>
        </div>
        <button class="primary-button" id="check-email-btn">Continue</button>
    </div>
    `

    document.querySelector('.dialog').replaceWith(checkEmail);

    let checkEmailContinueBtn = document.querySelector('#check-email-btn');
    checkEmailContinueBtn.addEventListener('click', function() {
        postCheckCodeFromEmail()
        resetPassword()
    })

    // checkEmail.addEventListener('click', function (event) {
    //     if (event.target.classList.contains('primary-button')) {
    //         checkEmail.remove();
    //     }
    //     if (event.target.classList.contains('close-button')) {
    //         checkEmail.remove();
    //     }
    // });
}



//
// async function removeItem() {
//     // const promise = openDialog('Ты хочешь удалить меня?');
//     // promise.then((answer) => {
//     //   alert(answer);
//     // });
//
//     const answer = await openDialog('Ты хочешь удалить меня?');
//     if(answer) {
//         // delete
//     }
//     alert(answer);
//
// }
//
// const DEFAULT_TEXT = 'Do you really want to delete this item? This process can\'t be undone.';
//
// function openDialog(text = DEFAULT_TEXT) {
//     return new Promise((resolve, reject) => {
//         let dialog = document.createElement('div');
//         document.body.append(dialog);
//         dialog.innerHTML = `
//   <div class="dialog_container">
// <div class="are_you_sure">
//   <button class="x_button close-button">x</button>
//   <span class="img">x</span>
//   <p class="large_text">Are you sure?</p>
//   <p class="small_text">${text}</p>
//   <div class="buttons">
//     <button class="gray_button close-button"">Cancel</button>
//     <button class="confirm-button">Confirm</button>
//   </div>
// </div>
// </div>
//   `;
//
//         dialog.addEventListener('click', function (event) {
//             if (event.target.classList.contains('confirm-button')) {
//                 dialog.remove();
//                 setTimeout(() => resolve(true));
//             }
//             if (event.target.classList.contains('close-button')) {
//                 dialog.remove();
//                 setTimeout(() => resolve(false));
//             }
//         });
//     });
// }