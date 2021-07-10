// Getting into promises

async function githubRepos(repository) {
    const fetchLink = `https://api.github.com/search/repositories?q=user:${repository}`
    await fetch(fetchLink)
        .then((res) => res.json())
        .then((data) => {
            const ul = document.querySelector('ul')

            const li = document.createElement('li')
            ul.appendChild(li)

            const h1 = document.createElement('h1')
            h1.innerHTML = `${repository}'s Repositories`
            li.appendChild(h1)

            const ul2 = document.createElement('ul')
            li.appendChild(ul2)

            data.items.forEach(repo => {
                const li = document.createElement('li')
                li.innerHTML = `${repo.name} : ${repo.html_url}`
                ul2.appendChild(li)
            });
        })
}

function promiseAll() {
    Promise.all([
        githubRepos('BikramRawat'), githubRepos('Sarulathaanbu'), githubRepos('OlenaKasian')
    ])
}

promiseAll()
