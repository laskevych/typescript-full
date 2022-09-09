(() => {
function getFullName(firstName: string, lastName: string) {
    const result = 'text' + ' ' + firstName + ' ' + lastName;
    const result2 = "text\n" + getSomething();
    const result3 = `
    text
        ${firstName} 
        ${lastName} 
        ${getSomething()}
    `;

    console.log(result, result2, result3);
}

console.log(`${true}`);

getFullName('Inessa', 'Sladost');

function getSomething(): string {
    return 'Super!';
}
})();

