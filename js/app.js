/** @format */

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    let content = document.querySelector('#content');
    const form = document.forms.userForm;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const date = form.date.value;
    const gender = form.gender.value;
    const city = form.city.value;
    const address = form.address.value;
    const languages = getLanguages(form);

    const userData = {
      name,
      lastName,
      date,
      gender,
      city,
      address,
      languages,
    };
    const table = createTable(userData);
    content.innerHTML = '';
    content.appendChild(table);
  });
});
