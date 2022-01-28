const LinksSocialMidia = {
  github: 'Fabio2502',
  youtube: 'channel/UCl0dk78x-32lFR_hz0gFjEA',
  facebook: 'profile.php?id=100002148214992',
  instagram: 'fabio_baptista2002',
  twitter: 'Fabiou2502'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
