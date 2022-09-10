/** INESSA HOMEWORK */

/**
 * Написать функцию логирования ошибок в консоль.
 * Функция должна уметь принимать одно сообщение об ошибке
 * или массив с ошибками.
 * Если логируем одну ошибку, то текст должен быть '[ERROR] ОШИБКА!'. Сообщение с большой буквы.
 * Если массив ошибок, то [ERRORS] {Ошибка 1; Ошибка 2; Ошибка N;}.
 * Задача* результат логирования список ошибок:
 * 1. Ошибка 1
 * 2. Ошибка 2
 * 3. Ошибка 3
 */


function logErrors(
    errorMessage: string | string[], 
    logType: 'message' | 'list' = 'message'
): void {
    if (typeof errorMessage === 'string') {
        console.log(`[error]: ${errorMessage}!`.toUpperCase());
    } else {
        if (logType === 'message') {
            console.log(`[errors]: ${errorMessage.join('; ')}.`.toUpperCase());
        } else {
            //console.log('[errors]:'.toUpperCase());
            // for (let i = 0; i < errorMessage.length; i++) {
            //     console.log(`${i+1}. ${errorMessage[i]}.`.toUpperCase());
            // }

            let message = '[errors]:'.toUpperCase() + '\n';

            errorMessage.forEach( (error, index, array) => {
                message += `    ${index + 1}. ${error}.`.toUpperCase() + 
                            `${(index < array.length - 1) ? '\n' : ''}`;
            });

            console.log(message);
        }
    }
}

let SingleError: string = 'single error';

let ErrorGroup: string[] = ['error 1', 'error 2', 'error 3'];

logErrors(SingleError);
logErrors(ErrorGroup);
logErrors(ErrorGroup, 'list');

