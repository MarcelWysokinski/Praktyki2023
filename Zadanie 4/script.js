function sortString(str) {
    return str.split('').sort().join('');
}

function areAnagrams(slowo1, slowo2) {
    return sortString(slowo1) === sortString(slowo2);
}

function Anagram() {
    const slowo1 = document.getElementById('slowo1').value;
    const slowo2 = document.getElementById('slowo2').value;

    if (!slowo1 || !slowo2) {
        alert('Wpisz oba słowa');
        return false;
    }
    return areAnagrams(slowo1, slowo2);
}