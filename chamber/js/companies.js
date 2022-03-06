const requestURL = '/chamber/companies.json';
const cards = document.querySelector('.cards')

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject)
        const companies = jsonObject['companies'];
        companies.forEach(displayProphets);
    });


function displayProphets(companies){
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let tel = document.createElement('p');
    let website = document.createElement('p');


    //change the text content property of the h2 element to contain the prophet's full name
    h2.textContent = `${companies.name}`;
    address.textContent = `Address: ${companies.address}`;
    tel.textContent = `Telephone: ${companies.tel}`;
    website.textContent = `Web: ${companies.website}`;

    // build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    //(fill in the blank with the appropriate variable).

    logo.setAttribute('src', companies.image);
    logo.setAttribute('alt', `logo of ${companies.name} company`);
    logo.setAttribute('loading', 'lazy');

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(tel);
    card.appendChild(logo);
    card.appendChild(website);
    //add/append the existing HTML div with the cards with the section(card)
    cards.appendChild(card);
}
