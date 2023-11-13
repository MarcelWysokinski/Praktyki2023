function Druga() {

    const arr = ["Marcel", "bum", "Roszpunka"]; //tab 1
    const arr2 = [1, 2, 3]; // tab2
    let numer;
    let numer1;

    if (typeof arr[0] === 'string') { //do tab1
        for (let i = 0; i <= arr.length; i++) {
            const wynik = arr.sort((a, b) => b.length - a.length);
            console.log(wynik[1]);
        }
    } 
    else if (typeof arr[0] === 'number') {
        for (let i = 0; i <= arr.length; i++) {
            arr.sort();
            arr.reverse();
            numer = arr[1];
        }
        console.log(numer);
    }


    if (typeof arr2[0] === 'string') { //do tab2
        for (let i = 0; i <= arr2.length; i++) {
            const wynik = arr2.sort((a, b) => b.length - a.length);
            console.log(wynik[1]);
        }
    } 
    else if (typeof arr2[0] === 'number') {
        for (let i = 0; i <= arr2.length; i++) {
            arr.sort();
            arr.reverse();
            numer1 = arr2[1];
        }
        console.log(numer1);
    }


}