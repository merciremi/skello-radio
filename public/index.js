// const bob = (event) => {
//   console.log('Bob');
// }

// const bindBob = (element) => {
//   document.querySelectorAll
// }


// document.querySelectorAll(".load-button").forEach((post) => {
//   post.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log('Bob');
//   });
// });


document.querySelectorAll(".load-button").forEach((article) => {
  article.addEventListener("click", (event) => {
    event.preventDefault();
    let rightContainer = document.querySelector(".right-container")
    rightContainer.insertAdjacentHTML('afterend', '<%= @comments %>');
  });
});
