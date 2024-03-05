/** @format */

function createTable(userData) {
  const table = document.createElement('table');
  for (const key in userData) {
    if (userData[key] !== '' && userData[key] !== 'undefined') {
      const tr = document.createElement('tr');
      const tdKey = document.createElement('td');
      tdKey.textContent = key;
      tr.appendChild(tdKey);
      const tdValue = document.createElement('td');
      tdValue.textContent = userData[key];
      tr.appendChild(tdValue);
      table.appendChild(tr);
    }
  }
  return table;
}

function getLanguages(form) {
  let languages = [];
  form.languages.forEach((language) => {
    if (language.checked) {
      languages.push(language.value);
    }
  });
  if (languages.length == 0) {
    languages = '';
  }
  return languages;
}
