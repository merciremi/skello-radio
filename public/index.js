document.querySelectorAll('.load-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    let comments = button.parentNode.nextElementSibling;
    button.classList.toggle('green-placeholder');
    comments.classList.toggle('hidden');
  });
});
