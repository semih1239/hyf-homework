let info = [{       // User name array
    name: ""
}]

let todolist = []       // Todo list array

function getReply(command) {
    let arr = []        // Users inputs arrays
    command1 = command.split(' ')
    arr.push(command1)

    switch (arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3]) {

        // Introduce inputs

        case 'Hellomynameis':
            if (info[0].name == arr[0][4]) {
                console.log(`Okey okey i got it. Your name is ${info[0].name}. You dont need to repeat that.`)
            }
            else {
                info[0].name = arr[0][4]
                console.log(`Nice to meet you ${info[0].name}`)
            }
            break

        // User name

        case 'Whatismyname':
            if (info[0].name == "") {
                console.log('How can i know that. You dont introduce yourself!!!')
            }
            else {
                console.log(`Your name is ${info[0].name}`)
            }
            break

        // Set Timer

        case 'Setatimerfor':
            if (arr[0][5] == 'minutes') {
                time = arr[0][4] * 60000
            }
            else if (arr[0][5] == 'seconds') {
                time = arr[0][4] * 1000
            }
            else if (arr[0][5] == 'hours') {
                time = arr[0][4] * 3600000
            }
            else { console.log('You write to wrong timer!!!') }
             console.log(`Timer set for ${arr[0][4]} ${arr[0][5]}`)
            setTimeout(function () {
                console.log('Timer Done!!!');
            }, time);
            break

        // Random number

        case 'Sayanumberbetween' :
            let min = Number(arr[0][4])
            let max = Number(arr[0][6])
            let random = min + Math.random() * (max-min)
            console.log(Math.floor(random))
    }

    // Another switch function

    lngth = arr[0].length

    switch (arr[0][0] + arr[0][lngth - 3] + arr[0][lngth - 2] + arr[0][lngth - 1]) {

        // Add to todo list

        case 'Addtomytodo':
            todolist.push(arr[0].slice(1, lngth - 3))
            console.log(`${arr[0].slice(1, lngth - 3).join(' ')} added to your todo`)
            break

        // Remove from todo list

        case 'Removefrommytodo':
            let number = todolist[0].indexOf(arr[0].slice(1, lngth - 3))
            todolist[0].splice(number, 1)
            console.log(`Removed ${arr[0].slice(1, lngth - 3)} from your todo`)
            break

        // See todo list elements

        case 'Whatonmytodo?':
            for (i = 0; i < todolist.length; i++) {
                if (todolist[i] != "") {
                    console.log(todolist[i].join(' '))
                }
            }
            break

        // Todays Date 

        case 'Whatisittoday?':
            console.log(new Date().toDateString())
            break
    }

    // Simple Math operations

    if (arr[0][3] == "*") {
        console.log(arr[0][2] * arr[0][4])
    }
    else if (arr[0][3] == "/") {
        console.log(arr[0][2] / arr[0][4])
    }
    else if (arr[0][3] == "+") {
        console.log(arr[0][2] + arr[0][4])
    }
    else if (arr[0][3] == "-") {
        console.log(arr[0][2] - arr[0][4])
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


