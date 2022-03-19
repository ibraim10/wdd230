const requestURL = 'data.json';
const spot = document.querySelector('.spot')

let companies;
let spotlightList
let random;

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        //console.table(jsonObject)
        companies = jsonObject['companies'];
        spotlightListGold = companies.filter(companie => companie.status === "Gold"  );
        spotlightListSilver = companies.filter(companie => companie.status === "Silver" );
        //console.log(spotlightList);
        randomSpotlight(); 
        //spotlightList.forEach(randomSpotlight);

        function randomSpotlight(companie){
            let randomSpot = spotlightListGold[Math.floor(Math.random() * spotlightListGold.length)];
            let randomSpot2 = spotlightListSilver[Math.floor(Math.random() * spotlightListSilver.length)];
        
            //console.log(randomSpot);
            displaySpotlight(randomSpot)
            displaySpotlight(randomSpot2)
        }

        function displaySpotlight(random){
        
            //create elements to add to the document
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let logo = document.createElement('img');
            let address = document.createElement('p');
            let tel = document.createElement('p');
            let website = document.createElement('a');
        
        
            //change the text content property of the h2 element to contain the prophet's full name
            h3.textContent = `${random.name}`;
            address.textContent = `Address: ${random.address}`;
            tel.textContent = `Telephone: ${random.tel}`;
        
            website.textContent = `${random.name}.com`;
        
            // build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
            //(fill in the blank with the appropriate variable).
        
            logo.setAttribute('src', random.image);
            logo.setAttribute('alt', `logo of ${random.name} company`);
            logo.setAttribute('loading', 'lazy');
            website.setAttribute("href", random.website);
            website.setAttribute('target', "_blank");
        
            //add/append the section(card) with the h2 element
            div.appendChild(h3);
            div.appendChild(logo);
            div.appendChild(address);
            div.appendChild(tel);
            div.appendChild(website);
            //add/append the existing HTML div with the cards with the section(card)
            spot.appendChild(div);
            
            
        }  

    });
