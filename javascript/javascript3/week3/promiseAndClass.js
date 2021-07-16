// Getting into promises

async function githubRepos(repository) {
    const fetchLink = `https://api.github.com/search/repositories?q=user:${repository}`
    await fetch(fetchLink)
        .then((res) => res.json())
        .then((data) => {
            const repositoryList = document.querySelector('ul')

            const listItem = document.createElement('li')
            repositoryList.appendChild(listItem)

            const h1 = document.createElement('h1')
            h1.innerHTML = `${repository}'s Repositories`
            listItem.appendChild(h1)

            const allRepos = document.createElement('ul')
            listItem.appendChild(allRepos)

            data.items.forEach(repo => {
                const repos = document.createElement('li')
                repos.innerHTML = `${repo.name} : ${repo.html_url}`
                allRepos.appendChild(repos)
            });
        })
}

function promiseAll() {
    Promise.all([
        githubRepos('BikramRawat'), githubRepos('Sarulathaanbu'), githubRepos('OlenaKasian')
    ])
}

promiseAll()
