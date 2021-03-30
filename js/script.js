// Devo calcolare il prezzo del panino partendo da un prezzo di base 
// e sommando il prezzo degli ingredienti che man mano vengono aggiunti. 
// Alla fine, applicare uno sconto al panino se il codice inserito corrisponde
// a quello di un coupon presente in un Array.

// Devo dare un nome al panino
var burgerName = document.getElementById('burger-name').value;

// Aggiungo l'evento al bottone "Calculate"
var calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', function() {
    
    // Devo stabilire un prezzo base per il burger
    var finalPrice = 50;   
    // Stabilsico il prezzo degli ingredienti
    var ingredients = document.getElementsByClassName('ingredient'); 

    // Creo un loop per controllare le checkbox
    for ( var i = 0; i < ingredients.length; i++ ) {
    var ingredientPrice = ingredients[i];

        // Se 'checked' è true allora aggiungi il valore di ingredientPrice allo startPrice
        if ( ingredientPrice.checked == true ) {
        finalPrice = finalPrice + parseInt(ingredientPrice.value);
        }
    }

    // Creo un array per i coupon
    var coupons = ['ggabc', 'gaigg', 'ggoku'];

    // Creo una variabile che contiene il valore inserito dall'utente nell'input coupon
    var userDiscount = document.getElementById('discount').value;


    // Creo un ciclo for per verificare i vari elementi dell'Array
    for ( var i = 0; i < coupons.length; i++ ) {
        // Creo uno if statement in cui confronto l'input con gli i dell'Array
        if ( userDiscount == coupons[i] ) {
            finalPrice = finalPrice - ( finalPrice * 0.20 );
        } else {
            finalPrice = finalPrice;
        }
    }

    // Stampo il prezzo finale del Burger
    document.getElementById('final-price').innerHTML = '$' + '' + finalPrice;

});

