const getUsers = (e) => {
    e.preventDefault();

    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "users-gender"]').value;
    console.log(usersGender, usersNumber);

    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
    console.log(url);

    fetch(url) //obietnica - pending
        //rozstrzygnieta (spelnione/odrzucone)
        //pozytywnie to wykona się then, jeśli negatywnie to catch
        .then(response => {
            //console.log(response);
            if (response.status !== 200) {
                throw Error("Not a 200 response")
            } else {
                return response.json() //fetch API - json() z body wyodrębnia jsona
            }

        }) // pozytywny pierwszy then to nastepne then
        .then(json => showUsers(json.results))
        .catch(err => console.log(err))
};

const showUsers = (users) => {
    const resultArea = document.querySelector('.results');
    resultArea.textContent = ""; // czyści poprzednie wyniki
    users.forEach(user => {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user_name">${user.name.title} ${user.name.first} ${user.name.last}</div>
        <img class="user_img" src=${user.picture.medium}>`;
        resultArea.appendChild(item);
    });
}


document.querySelector('.generator').addEventListener('submit', getUsers);