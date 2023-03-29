//input utente
let travelDistance = prompt("Quanto è lungo il viaggio? (in Km)");
let age = prompt("Quanti anni hai?");
travelDistance = parseFloat(travelDistance);
    console.log(travelDistance + " Km");
age = parseInt(age);
//Controllo Input utente
let travelDistanceControl = !isNaN(travelDistance);
let ageControl = !isNaN(age);
//Calcolo prezzo biglietto
if (travelDistanceControl && ageControl) {
    let discount = 0, price;
    price = 0.21 * travelDistance;
    price = parseFloat(price);
        console.log(price.toFixed(2) + " EUR in tutto");
    if(age < 18) {
        discount = (price / 100) * 20;
            console.log(discount.toFixed(2) + " EUR di sconto");
        price = price - discount;
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price.toFixed(2)}&#8364;`; 
    }else if(age > 65){
        discount = (price / 100) * 40;
            console.log(discount.toFixed(2) + " EUR di sconto");
        price = price - discount;
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price.toFixed(2)}&#8364;`;
    }else {
            console.log(discount.toFixed(2) + " EUR di sconto");
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price.toFixed(2)}&#8364;`;
    }
}else {
    console.log("Gli input inseriti non sono validi, riesegui il programma!");
    document.getElementById('ticketPrice').innerHTML = "Spiacente :( i valori inseriti non sono validi... Riaggiorna la pagina e Riprova!";
}   