import React from 'react'
import { InputContextProvider } from './inputContext'
import UserNames from './userName'

const UserInput = () => {
    const [searchedWord, changeSearchedWord] = React.useState('')
    const [userDatas, changeUserDatas] = React.useState([])
    const [loading, changeLoading] = React.useState(false)

    React.useEffect(() => {
        const getResults = async () => {
            if (searchedWord === '') {
                changeUserDatas(['No Result'])
            }
            else {
                changeLoading(true)
                await fetch(`https://api.github.com/search/users?q=${searchedWord}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.items) {
                            changeUserDatas(data.items)
                            if (data.items.length === 0) {
                                changeUserDatas(['No Result'])
                            }
                        }
                        else if (data.message) {
                            changeUserDatas([data.message])
                        }
                        changeLoading(false)

                    })
            }
        }
        getResults()
    }, [searchedWord])

    const githubResults = {
        searchedWord: searchedWord,
        userDatas: userDatas,
        loading: loading
    }

    return <div className={'main'}>
        <InputContextProvider value={githubResults}>
            <h1>Github User Searcher</h1>
            <input type='text' placeholder='Search for user' onChange={(e) => changeSearchedWord(e.target.value)} />
            <UserNames />
        </ InputContextProvider>
    </div>
}

export default UserInput