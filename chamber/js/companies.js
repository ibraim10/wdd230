const requestURL = 'data.json';
const cards = document.querySelector('.cards')
let companies;
let spotlightList
let random;

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject)
        companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
        spotlightList = companies.filter(status => status.status === "Gold" || status.status === "Silver" );
        console.log(spotlightList);
        random = randomSpotlight(spotlightList); 

    });


function displayCompanies(companies){
    //create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let tel = document.createElement('p');
    let website = document.createElement('a');


    //change the text content property of the h2 element to contain the prophet's full name
    h2.textContent = `${companies.name}`;
    address.textContent = `Address: ${companies.address}`;
    tel.textContent = `Telephone: ${companies.tel}`;

    website.textContent = `${companies.name}.com`;

    // build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    //(fill in the blank with the appropriate variable).

    logo.setAttribute('src', companies.image);
    logo.setAttribute('alt', `logo of ${companies.name} company`);
    logo.setAttribute('loading', 'lazy');
    website.setAttribute("href", companies.website);
    website.setAttribute('target', "_blank");

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(tel);
    card.appendChild(website);
    //add/append the existing HTML div with the cards with the section(card)
    cards.appendChild(card);
}
//Add an event listener
document.getElementById('companies-list').addEventListener('click', function () {
    document.getElementById('companies-list').classList.add('active');
    document.getElementById('companies-grid').classList.remove('active');
    cards.classList.add('companies-list')
    table = `<table>
        <tbody>
        </tbody>
    </table>`;

    cards.innerHTML = table;
    companies.forEach((companies) => {
        let name = document.createElement('th');
        let address = document.createElement('th');
        let tel = document.createElement('th');
        let website = document.createElement('th');
        let tr = document.createElement('tr');

        name.textContent = companies.name;
        address.textContent = companies.address;
        tel.textContent = companies.tel;
        website.textContent = companies.website;

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(tel);
        tr.appendChild(website);
        
    document.querySelector('tbody').appendChild(tr);
    });
});

document.getElementById('companies-grid').addEventListener('click', function(){
    document.getElementById('companies-grid').classList.add('active');
    document.getElementById('companies-list').classList.remove('active');
    cards.classList.remove('companies-list');
    cards.innerHTML="";
    companies.forEach(displayCompanies);
})

