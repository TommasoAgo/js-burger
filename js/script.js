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
    console.log(finalPrice);
    }
})
