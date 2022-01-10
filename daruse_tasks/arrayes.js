
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}





// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все
// элементы четные, если бы хотя бы один элемент не четный, то false.
function all_mult_2(){
    let arr = []
    let n = 20
    let bub = 0

    for(let i = 1; i <=20; i++){
        arr.push(getRandomInt(2, 50))
    }

    for(let ar in arr){
        if((arr[ar] % 2) == 0){
            bub++
        }

    }
    console.log(arr)
    if(bub == n){
        console.log('True')
    } else {
        console.log('False')
    }
}


// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
// если хотя бы один элемент нечетный, если все четные, то false.
function one_mult_2(){
    let arr = []
    let check = 0

    for(let i = 0; i <=20; i++){
        arr.push(getRandomInt(1, 10))
    }

    for(let ar in arr){
        if((arr[ar] % 2) == 0){
            console.log('true')
            check++
            break
        }
        if (check < 0){
            console.log('false')
        }

    }
}


// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
// где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
function all_mult_5(){
    let arr = []
    let itog = []

    for(let i = 0; i <=50; i++){
        arr.push(getRandomInt(1, 40))
    }
    console.log('До сортировки = ' + arr)


    for(let ar in arr){
        if((arr[ar] % 5) == 0){
            itog.push(arr[ar])
        }
    }

    console.log('После сортировки = ' + itog)
}


// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое

function middle_arif() {
    let arr = []
    let middle = 0

    for(let i = 0; i <=50; i++){
        arr.push(getRandomInt(1, 40))
        middle += arr[i]
    }
    middle = middle/arr.length.toFixed(2)
    console.log('Среднее арифметическое из \n' + arr + '\n == ' + (middle/arr.length).toFixed(2))
}


// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и
// переносит первый элемент массива в конец (например можно засунуть первый
// элемент в конец, затем удалить первый элемент),

function swift_and_push() {
    let arr = []
    for(let i = 0; i <= 5; i++){
        arr.push(getRandomInt(1, 40))
    }

    console.log(arr)

    let shifted = arr.shift()
    let poped = arr.pop()
    arr.push(shifted)
    arr.unshift(poped)

    console.log(arr)
}



// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст
// ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из
// себя строку "Имя: Иван, возвраст: 23".




function factory_and_workers(num){
    switch (num){
        case 1: // Верное решение 1
        function workers() {
            function createWorker() {
                let names = [
                    'Дмитрий', 'Федор', 'Алексей',
                    'Николай', 'Жендос', 'Женек',
                    'Евгений', 'Артемий', 'Артем',
                ]

                this.object = {
                    name: names[getRandomInt(0, names.length)],
                    age: getRandomInt(18, 65),

                    toString: function() {
                        return 'Имя: ' + this.name + ', возраст: ' + this.age
                    }
                }

                return this.object
            }

            let arr = []


            for(let i = 0; i <= 10; i++) {
                arr.push(createWorker())
            }
            console.log(arr)
        }
            break

        case 2:
            // Верное решение 2
            function createWorker() {
            let names = [
                'Дмитрий', 'Федор', 'Алексей',
                'Николай', 'Жендос', 'Женек',
                'Евгений', 'Артемий', 'Артем',
            ]

            this.object = {
                name: names[getRandomInt(0, names.length)],
                age: getRandomInt(18, 65),

                toString: function() {return 'Имя: ' + this.name + ', возраст: ' + this.age}
            }

            return this.object
            }


            let people = []

            for(let i = 0; i <= 10; i++) {people.push(createWorker())}

            let arr = []

            function createArr(workers) {

            for(let i = 0; i <= workers.length; i++) {
                arr.push(workers[i])
            }
            return arr
            }

            createArr(people)
            console.log(arr)
            break
    }
}

let see_all = 0

if (see_all == 1) {
    console.log('\n all_mult_2()')
    all_mult_2()

    console.log('\n one_mult_2()')
    one_mult_2()

    console.log('\n all_mult_5()')
    all_mult_5()

    console.log('\n middle_arif()')
    middle_arif()

    console.log('\n swift_and_push()')
    swift_and_push()

} else{
    console.log('\n factory_and_workers(1/2)')
    // 1 программа корректно работает, но не по задачи.
    // 2 по тз
    factory_and_workers(1)
}





