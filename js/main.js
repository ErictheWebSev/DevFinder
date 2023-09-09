document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('search');
  const searchBtn = document.getElementById('searchBtn');
  const image = document.getElementById('image');
  const name = document.getElementById('name');
  const date = document.getElementById('date');
  const description = document.getElementById('description');
  const repoNum = document.getElementById('repos');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');
  const errorCon = document.getElementById('error-con');
  const error = document.getElementById('error');
  const display = document.getElementById('display');
  const user = document.getElementById('username');
  const email = document.getElementById('email');
  const twitter = document.getElementById('twitter');
  
  searchBtn.addEventListener('click', () => {
    document.body.classList.add('dark');
    console.log(searchInput.value);
    const username = searchInput.value.trim();
    if (username === '') {
      errorCon.classList.remove('hidden');
      error.textContent = 'Enter A Username!'
      return;
    } else {
      errorCon.classList.add('hidden');
    }
    
    fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      if (data.message == 'Not Found') {
        display.style.display = 'hidden';
        errorCon.classList.remove('hidden');
        error.textContent = `Error: ${username} ${data.message}`;
      } else {

function formatDate(dateStr) {
    const date = new Date(dateStr);

    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const year = date.getFullYear();
    const month = date.getMonth(); // 0-based, so January is 0
    const day = date.getDate();

    const formattedDate = `${monthNames[month]} ${day}, ${year}`;
    return formattedDate;
}


      console.log(data);
      display.classList.remove('hidden');
      name.textContent = data.name;
      user.textContent = data.login;
      description.textContent = data.bio;
      image.src = data.avatar_url;
      date.textContent = ` Joined at ${formatDate(data.created_at)}`;
      repoNum.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      email.innerHTML = `<i class="fas fa-location"></i> ${data.location || 'Unavailable'}`;
      twitter.innerHTML = `<i class="fab
                fa-twitter"></i> ${data.twitter_username || 'Unavailable'}`;
      }
    })
    .catch(error => {
      display.classList.add('hidden');
      errorCon.classList.remove('hidden');
      error.textContent = `Error: ${error}`;
    });
  });
  
  /*********  Dark mode   *********/
  
const toggleButton = document.getElementById('toggle');
const textDiv = document.querySelector('.text');
  const darkTextDiv = document.querySelector('.text-dark');
  const testElement = document.getElementById('test-element');
  const h2 = document.getElementById('h2');
  
function toggleThemePreference() {
  document.body.classList.toggle('dark');
  textDiv.classList.toggle('hidden');
  darkTextDiv.classList.toggle('hidden');
  const isDark = testElement.classList.toggle('darkm');
  const isDarkText = h2.classList.toggle('darkt');
  const isDarkBtn = toggleButton.classList.toggle('darkb');
  
  localStorage.setItem('darkModeText', isDarkText);
  localStorage.setItem('darkMode', isDark);
  localStorage.setItem('darkModeBtn', isDarkBtn);
  
// const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     testElement.classList.toggle('dark', isDarkMode);
//const isDarkModeText = localStorage.getItem('darkModeText') === 'true';
 //   h2.classList.toggle('darkt', isDarkModeText);
//     
// const isDarkModeBtn = localStorage.getItem('darkModeBtn') === 'true';
//     toggleButton.classList.toggle('dark', isDarkModeBtn);


}

  toggleButton.addEventListener('click', toggleThemePreference);
const isDarkMode = localStorage.getItem('darkMode') === 'true';
    testElement.classList.toggle('dark', isDarkMode);
const isDarkModeText = localStorage.getItem('darkModeText') === 'true';
    h2.classList.toggle('darkt', isDarkModeText);
    
const isDarkModeBtn = localStorage.getItem('darkModeBtn') === 'false';
    toggleButton.classList.toggle('darkb', isDarkModeBtn);
  
});

    
    
    

    