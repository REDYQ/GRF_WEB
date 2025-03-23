async function getUsers() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/REDYQ/GRF_Date/refs/heads/main/Anime_List/USERs/RDL/data.json',
      {
        method: 'GET',
      },
    );

if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

getUsers().then(data => {

  let ol = '<ol>';

  data.forEach(user => {
    ol += `
    <img src="${user.icon}" alt="icon, ${user.name}" width="40%" height="auto" img-align="center"</li>
    <p style="text-align: center"><b>${user.name}</b></p>
      <ul>
        <li>Студия: <b>${user.studio}</b></li>
        <li>Количество (сезоны): <b>${user.seasons}</b></li>
        <li>Количество (все жанры): <b>${user.all_seasons}</b></li>
        <li>Статус: <b>${user.status}</b></li>
      </ul>
    <h1 style="text-align: center"; "text-color: rgba(11,11,11, 1.0)">• • •</h1>
    </li>
    `;
  });

  ol += '</ol>';

  const container = document.getElementById('container');
  container.innerHTML = ol;
});