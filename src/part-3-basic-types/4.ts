/**
 * 1. Создать массив из 3 животных: кот, собака, тигр
 * 
 * 2. Создать функцию, которая принимает массив строк 
 * и возвращает этот массив без последнего элемента.
 * Например, передаем ['test', 'test2']
 * Возвращает: ['test']
 * 
 * 3. Создать функцию, которая принимает массив строк 
 * и возвращает строку состоящую из элементов массива,
 * которые будут идти с конца и будут разделены знаком <> с пробелами
 * Например, передаем ['test', 'test2']
 * Возвращает: test2 <> test
 */


const animalsList: string[] = ['cat', 'dog', 'tiger'];

(() => {
    function deleteLastElement(items: string[]): string[] {
        items.pop()
    
        return items;
    };
    
    function editArray(items: string[]): string {
        items.reverse();
    
        return items.join(' <> ');
    };
    
    console.log(editArray(animalsList));
    
})();




