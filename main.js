class Clock {
    constructor(template) {
        this.template = template;
    }

    render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours + ' ';

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes + ' ';

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds + ' ';


        console.log(hours, minutes, seconds);

    }

    start(){
        this.render()
        this.timer = setInterval(() => this.render(), 1000)
    }
}

function choose_primitive(num) {
    switch (num){
        // Задание на функцию
        case 1:
            let name = prompt('Write your name prop');

            let user = {
                name,
                surname: 'Anefok',
                age: 12,


                test_method() {
                    console.log('\n\n\n' + name + 'This is method')
                }
            };

            function write() {
                for (let i = 0; i < 20; i++) {
                    user.age += i

                    user.name = name + i

                    if (user.age == 16) {delete user.age}
                    console.log(user)

                    if (i == 19) {user.test_method()}
                }
            }

            write()
            break
        // Задание на усечение строки
        case 2:
            truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)

            truncate("Всем привет!", 20)

            function truncate(str, max_length) {
                    if (str.length > max_length) {
                        str = str.slice(0, max_length) + '..'
                    }
                    console.log(str)
                }
            break
        // Задание на
        case 3:

            break
    }
}

function choose_array(num){
    switch (num){
        // shift/unshift/push
        case 1:
            let styles = ['Джаз', 'Блюз'];
            styles.push('Рок-н-ролл')

            styles[Math.floor((styles.length - 1) / 2) ] = 'Классика'
            console.log(styles.shift())

            styles.unshift('Рэп', 'Регги')
            console.log(styles)
            break
        //Сумма введенных чисел
        case 2:
            let arr = []
            while (true) {
                let value = prompt("Введите число", 0);
                // Прекращаем ввод
                if (value === "" || value === null || !isFinite(value)) break;

                arr.push(+value);
            }
            console.log(arr)

            let sum = 0
            for (let num of arr){
                sum += num;
            }
            console.log(sum)
            break
        //Подмассив наибольшей суммы
        case 3:
            getMaxSubSum([-1, 2, 3, -9])
            getMaxSubSum([2, -1, 2, 3, -9])
            getMaxSubSum([-1, 2, 3, -9, 11])
            getMaxSubSum([-2, -1, 1, 2])
            getMaxSubSum([100, -9, 2, -3, 5])
            getMaxSubSum([1, 2, 3])

            // Моя медленная версия
            function getMaxSubSum(arr) {
                let summ = 0; // если элементов не будет - возвращаем 0
                for (let i = 0; i < arr.length; i++) {
                    let buff = 0;
                    for (let j = i; j < arr.length; j++) {
                        buff += arr[j];
                        summ = Math.max(summ, buff);
                    }
                }
                console.log(maxSum)

            }

            // Не моя не медленная версия
            function getMaxSubSum_Fast(arr) {
                let maxSum = 0;
                let partialSum = 0;

                for (let item of arr) { // для каждого элемента массива
                    partialSum += item; // добавляем значение элемента к partialSum
                    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
                    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
                }
                return maxSum;
            }
            break
        //


    }

}

function choose_classes(num){
    switch (num) {
        case 1:

            break
        case 2:

            break
        case 3:

            break
        case 4:

            break
        case 5:

            break

    }
}




