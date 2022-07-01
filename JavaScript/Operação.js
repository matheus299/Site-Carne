
var pesoBife = 200;
var cont = 0;

//tornar o botao invisivel
var buttonBack = document.querySelector('#buttonBack');
buttonBack.style.display = "none";

function calculo(kilosCarne) {

    var sacolas = (kilosCarne / pesoBife) / 2 +1;

    var bifes = ((kilosCarne / pesoBife) + 1 ).toFixed(0);
    var resultado = sacolas.toFixed(0);

    var texto = document.querySelector('#text-main');
    texto.textContent= `Com essa carne é possivel fazer ${bifes}  bifes e será nessesario  ${resultado} saciolas`;
    
    
}

function get() {
    var kilosCarne = document.getElementById('kilocarne').value;
    calculo(kilosCarne);

    cont += 1;
    
    var button = document.querySelector('#buttonGet');
    if(button.style.display === "none") {
        button.style.display = "block";

    } else {
      button.style.display = "none";
      buttonBack.style.display = 'block';
    }

    calculo(kilosCarne)
    

}

function back() {
    var button = document.querySelector('#buttonGet');

    if(buttonBack.style.display === 'none') {
        buttonBack.style.display = 'block';
    }else {
        buttonBack.style.display = 'none';
        button.style.display = "block";
    }

    var texto = document.querySelector('#text-main');
    texto.innerHTML = `Peso da Carne<input type="number" id="kilocarne" name="kilocarne" placeholder="1000"><br>
    Peso do bife: 200<br>
    Considerando a conta:<br>
    (Carne / bife) / 2 + 1`

}




 /*mudar texto
    var texto = document.querySelector('#text-main');
    texto.textContent= `Essa carne dará ${bifes} bifes e precisará de ${resultado} sacolas`;*/

/*if(cont % 2 === 0) {
        var texto = document.querySelector('#text-main');
        texto.textContent= `Essa carne dará ${bifes} bifes e precisará de ${resultado} sacolas`;
    }else {
        
    }
    console.log(cont)*/