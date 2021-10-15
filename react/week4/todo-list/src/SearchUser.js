import React from 'react'
import { InputContextProvider } from './inputContext'
import UserNames from './userName'
import GetInput from './GetInput'
import Loading from './loading'

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
        loading: loading,
        changeSearchedWord: changeSearchedWord
    }

    return <InputContextProvider value={githubResults}>
        <div className={'main'}>
            <h1>Github User Searcher</h1>
            <GetInput />
            <Loading />
            <UserNames />
        </div>
    </ InputContextProvider>
}

export default UserInput