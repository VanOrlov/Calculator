let r = document.querySelector('#button')

r.addEventListener('click', res)

function res(){
    let S = +document.getElementById('S').value;

    let h = +document.getElementById('h').value;

    let q = +document.getElementById('q').value;

    let Q2 = +document.getElementById('Q2').value;

    let Q3 = +document.getElementById('Q3').value;

    if (S != "" && h != "" && q != "" && Q2 != "" && Q3 != "" ) {
        let result = document.getElementById('result');
        result.textContent = ((S * h * q)/1000 + Q2 + Q3)
    } else {
        alert("Заполните все поля!")
    }
}
