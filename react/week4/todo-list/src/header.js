import React from "react";
import UserInput from "./SearchUser";


const UserInput = () => {
    const [searchedWord, changeSearchedWord] = React.useState('semih12')
    const [userDatas, changeUserDatas] = React.useState('')

    const contextValue = React.useContext(inputContext)

    // const  fetchResults = async () => {
    function fetchResults() {
        fetch(`https://api.github.com/search/users?q=${searchedWord}`)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    changeUserDatas(data.items.map(data => data.login))
                }
            })
    }

    console.log(userDatas)
    // changeUserDatas(userDatas.concat(data.login))

    const githubResults = {
        searchWord: searchedWord

    }

    const inputValue = (e) => {
        changeSearchedWord(e.target.value)
        // console.log(searchedWord)
        fetchResults()
    }

    // console.log(userDatas)

    return <div>
            <div>
                <h1>Github User Searcher</h1>
            </div>
            <div>
                <input type='text' placeholder='Search for user' onKeyUp={inputValue} />
            </div>
            <div></div>
    </div>
}

export default UserInput