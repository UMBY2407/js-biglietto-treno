//input utente
    let travelDistance = prompt("Quanto è lungo il viaggio? (in Km)");
    let age = prompt("Quanti anni hai?");
    travelDistance = parseFloat(travelDistance);
    console.log(travelDistance);
    age = parseInt(age);
//Controllo Input utente

//Calcolo prezzo biglietto
    let discount = 0, price;
    price = 0.21 * travelDistance;
    price = parseFloat(price);
    console.log(price);
    if(age < 18) {
        discount = (price / 100) * 20;
        console.log(discount);
        price = price - discount;
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price}&#8364;`; 
    }else if(age > 65){
        discount = (price / 100) * 40;
        console.log(discount);
        price = price - discount;
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price}&#8364;`;
    }else {
        console.log(discount);
        document.getElementById('ticketPrice').innerHTML = `Il tuo biglietto costa: ${price}&#8364;`;
    }
