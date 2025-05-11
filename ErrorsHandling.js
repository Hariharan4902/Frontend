//Errrorhandling

let a = undefined;

try {
    console.log(a.name);

} catch (error) {
    console.log('error has occured');

}

//Promise

iaHalwa

function waitInQueue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isHalwaThere) {
                resolve('buy 1kg Halwa')
            }
            else {
                reject('Halwa Finish');
            }
        }, 1000);
    });
}


async function buyHalwa(){
    try {
        let result = await waitInQueue();
        console.log(result);

        
    } catch (error) {
        console.log('Halwa Over');
        
    }
    
}


function buyHalwa() {
    waitInQueue().then((message) => {
        console.log(message);

    })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Go home');

        })
}

buyHalwa();
console.log('Halwa wala');

