let userName = ''

let todolist = []       // Todo list array

function getReply(command) {
    const commandWords = command.toLowerCase().split(' ')       // Users inputs arrays

    switch (commandWords[0] + commandWords[1] + commandWords[2] + commandWords[3]) {

        // Introduce inputs

        case 'hellomynameis':
            if (userName == commandWords[4]) {
                console.log(`Okey okey i got it. Your name is ${userName}. You dont need to repeat that.`)
            }
            else {
                userName = commandWords[4]
                console.log(`Nice to meet you ${userName}`)
            }
            break

        // User name

        case 'whatismyname':
            if (userName == "") {
                console.log('How can i know that. You dont introduce yourself!!!')
            }
            else {
                console.log(`Your name is ${userName}`)
            }
            break

        // Set Timer

        case 'setatimerfor':
            const timeNumber = commandWords[4]
            const timeWord = commandWords[5]
            if (timeWord == 'minutes') {
                time = timeNumber * 60000
            }
            else if (timeWord == 'seconds') {
                time = timeNumber * 1000
            }
            else if (timeWord == 'hours') {
                time = timeNumber * 3600000
            }
            else { console.log('You write to wrong timer!!!') }
             console.log(`Timer set for ${timeNumber} ${timeWord}`)
            setTimeout(function () {
                console.log('Timer Done!!!');
            }, time);
            break

        // Random number

        case 'sayanumberbetween' :
            const lowestNumber = Number(commandWords[4])
            const highestNumber = Number(commandWords[6])
            const random = lowestNumber + Math.random() * (highestNumber-lowestNumber)
            console.log(Math.floor(random))
    }

    // Another switch function

    const lngth = commandWords.length

    switch (commandWords[0] + commandWords[lngth - 3] + commandWords[lngth - 2] + commandWords[lngth - 1]) {

        // Add to todo list

        case 'addtomytodo':
            const newTodoItem = commandWords.slice(1, lngth - 3)
            todolist.push(newTodoItem)
            console.log(`${newTodoItem} added to your todo`)
            break

        // Remove from todo list

        case 'removefrommytodo':
            const number = todolist[0].indexOf(commandWords.slice(1, lngth - 3))
            todolist[0].splice(number, 1)
            console.log(`Removed ${commandWords.slice(1, lngth - 3)} from your todo`)
            break

        // See todo list elements

        case 'whatonmytodo?':
            for (i = 0; i < todolist.length; i++) {
                if (todolist[i] != "") {
                    console.log(todolist[i].join(' '))
                }
            }
            break

        // Todays Date 

        case 'whatisittoday?':
            console.log(new Date().toDateString())
            break
    }

    // Simple Math operations
    const mathOperator = commandWords[3]
    const firstOperator = commandWords[2]
    const secondOperator = commandWords[4]
    if (mathOperator == "*") {
        console.log(firstOperator * secondOperator)
    }
    else if (mathOperator == "/") {
        console.log(firstOperator / secondOperator)
    }
    else if (mathOperator == "+") {
        console.log(firstOperator + secondOperator)
    }
    else if (mathOperator == "-") {
        console.log(firstOperator - secondOperator)
    }
}


getReply("Hello my name is Semih")
getReply("What is my name")
getReply("Add fishing to my todo")
getReply("Add singing in the shower to my todo")
getReply("Remove fishing from my todo")
getReply("What is on my todo?")
getReply("What day is it today?")
getReply("what is 4 * 12")
getReply("what is 120 / 3")
getReply('Set a timer for 3 seconds')
getReply('Say a number between 0 and 100')


