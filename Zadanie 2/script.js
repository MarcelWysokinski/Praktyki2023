function palindrome(form){

    let wyraz = form.slowo.value;
    let odwrot = "";

    for(let i=wyraz.length-1; i>=0; i--){
        odwrot+=wyraz[i];
    }

    if(wyraz==odwrot){
        console.log(true);
        document.getElementById("wynik").innerHTML = "To jest palindorm";
    }else{
        console.log(false);
        document.getElementById("wynik").innerHTML = "To nie jest palindorm";
    }
}