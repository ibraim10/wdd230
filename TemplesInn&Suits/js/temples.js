const requestURL = 'json/temples.json';
const cards = document.querySelector('.cards')
let temples;
let spotlightList
let random;

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject)
        temples = jsonObject['temples'];
        temples.forEach(displayCompanies);
    });


function displayCompanies(temples){
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let pic = document.createElement('img');
    let address = document.createElement('p');
    let tel = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinance = document.createElement('p');
    let session = document.createElement('p');
    let closure = document.createElement('p');
    let btn = document.createElement('button');
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    let div = document.createElement('div');

    //change the text content property of the h2 element to contain the prophet's full name
    h2.textContent = `${temples.name}`;
    address.textContent = `Address: ${temples.address}`;
    tel.textContent = `Telephone: ${temples.tel}`;
    email.textContent = `Email: ${temples.email}`;
    services.textContent = `Services: ${temples.services}`;
    history.textContent = `History: ${temples.history}`;
    ordinance.textContent = `Ordinance schedule: ${temples.ordinance}`;
    session.textContent = `Session schedule: ${temples.session}`;
    closure.textContent = `Temple closure schedule: ${temples.closure}`;
    span.textContent = `More info`;
    span2.textContent = `less info`;
    


    // build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    //(fill in the blank with the appropriate variable).

    pic.setAttribute('src', temples.image);
    pic.setAttribute('alt',  `photo of ${temples.name} company`);
    pic.setAttribute('loading', 'lazy');
    email.setAttribute("href", temples.email);
    email.setAttribute('target', "_blank");
    btn.setAttribute('id', 'templeBtn')
    div.setAttribute('id', 'primary')

    
    btn.appendChild(span)
    btn.appendChild(span2)

    

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(pic);
    card.appendChild(btn);
    div.appendChild(address);
    div.appendChild(tel);
    div.appendChild(email);
    div.appendChild(services);
    div.appendChild(history);
    div.appendChild(ordinance);
    div.appendChild(session);
    div.appendChild(closure);
    card.appendChild(div);
    //add/append the existing HTML div with the cards with the section(card)
    cards.appendChild(card);
}
