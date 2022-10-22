let r = document.querySelector('#button')

r.addEventListener('click', res)

function res(){
    let S = +document.getElementById('S').value;

    let h = +document.getElementById('h').value;

    let q = +document.getElementById('q').value;

    let Q2 = +document.getElementById('Q2').value;

    let Q3 = +document.getElementById('Q3').value;

    if (S != 0 && h != 0 && q != 0 && Q2 != 0 && Q3 != 0) {
        let result = document.getElementById('result');
        let resulttxt = ((S * h * q)/1000 + Q2 + Q3)
        result.textContent = (Math.round((resulttxt * .95 ) * 100) / 100) + " - " + (Math.round((resulttxt * 1.15 )* 100) / 100) + " Вт"
        let btu = document.getElementById('btu');
        let btutxt = ((S * h * q)/1000 + Q2 + Q3) * 3.41;
        btu.textContent = (Math.round((btutxt * .95 ) * 100) / 100) + " - " + (Math.round((btutxt * 1.15 )* 100) / 100) + " BTU/час";
    } else {
        alert("Заполните все поля!")
    }
}

