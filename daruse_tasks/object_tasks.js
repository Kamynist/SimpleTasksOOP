

function OObjects(num) {
    switch (num) {
        case 1:
            //У нас есть объект, в котором хранятся зарплаты нашей команды:
            // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
            // Если объект salaries пуст, то результат должен быть 0.

            let salaries = {
                John: 100,
                Ann: 160,
                Pete: 130
            }
            let summ = 0

            for (let key in salaries) {
                if (Object.keys(salaries).length === 0) {
                    console.log('Пустой')
                } else {
                    summ += salaries[key]
                    console.log(summ)
                }
            }
            break

        case 2:
            //Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
            // Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
            // P.S. Используйте typeof для проверки, что значение свойства числовое.


            // до вызова функции
            let menu = {
                width: 200,
                height: 300,
                title: "My menu"
            };

            function multiplyNumeric(obj) {
                for (let key in obj) {
                    if ((typeof obj[key]) === 'number') {
                        obj[key] *= 2
                    }
                }
                console.log(menu)
            }

            multiplyNumeric(menu)
            break

        case 3:
            //  Написать объект ladder - объект, который позволяет подниматься вверх и спускаться.
            // Пример работы должен быть таким:

            // ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
            // ladder.up();
            // ladder.up();
            // ladder.showStep(); // 2
            // ladder.down();
            // ladder.showStep(); // 1

            let ladder = {
                y: 0,
                up(){this.y++},
                down(){this.y--},

                showStep(){
                    console.log(this.y)
                }
            };

            ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
            ladder.up();
            ladder.up();
            ladder.showStep(); // 2
            ladder.down();
            ladder.showStep(); // 1
            break
    }
}

OObjects(3)