

async function getUserData() {
    const username = document.getElementById('usernameInput').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }

        const userData = await response.json();
        displayUserData(userData);
    } catch (error) {
        alert(error.message);
    }
}

function displayUserData(userData) {
    const userInfoDiv = document.getElementById('userInfo');

    userInfoDiv.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.login}'s profile photo" class="user-photo">
        <div class="user-details">
            <p><strong>Name:</strong> ${userData.name || 'N/A'}</p>
            <p><strong>Login:</strong> ${userData.login}</p>
            <p><strong>GitHub URL:</strong> <a href="${userData.html_url}" target="_blank">${userData.html_url}</a></p>
            <p><strong>Blog:</strong> <a href="${userData.blog || '#'}" target="_blank">${userData.blog || 'N/A'}</a></p>
            <p><strong>Location:</strong> ${userData.location || 'N/A'}</p>
            <p><strong>Email:</strong> ${userData.email || 'No Email'}</p>
            <p><strong>Followers:</strong> ${userData.followers}</p>
            <p><strong>Following:</strong> ${userData.following}</p>
        </div>
    `;
}
