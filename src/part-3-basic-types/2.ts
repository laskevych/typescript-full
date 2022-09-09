//let info: {}
/*let MyName: string = 'Andrew';
MyName = 'Inessa';
console.log(MyName);*/

(() => {
    let info: {
        officeId: number,
        isOpened: boolean,
        contacts: {
            phone: string,
            email: string,
            adress: {
                city: string
            }
        }
    } = {
        officeId: 45,
        isOpened: false,
        contacts: {
            phone: '+380992345678',
            email: 'example@gmail.com',
            adress: {
                city: 'Dnipro'
            }
        }
    
    };
    
    console.log (info);
    
})();

