function oblicz(form, char ){
    let liczba1 = parseFloat(form.liczba1.value);
    let liczba2 = parseFloat(form.liczba2.value);
    let zero;
    
    switch(char){
        case 'dodawanie':
            wynik = liczba1+liczba2;
            break;
        case 'odejmowanie':
            wynik =liczba1-liczba2;
            break;
        case 'mnozenie':
            wynik = liczba1*liczba2;
            break;
        case 'dzielenie':
            if(liczba1==0 || liczba2==0)
            {
                zero = true;
            }
            else
            {
                wynik = liczba1/liczba2;
            }
            break;

        default:
            wynik = 0;
    }

    if(zero){
        document.getElementById("wynik").innerHTML = "Nie dzielimy przez 0";
    }
    else
    {
        document.getElementById("wynik").innerHTML = "Wynik: "+wynik;
    }
}