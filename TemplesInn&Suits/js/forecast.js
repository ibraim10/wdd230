const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Bethesda&units=imperial&appid=2f24733c28429c899cc5dfafd6c236fb'
// 5 13 21
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const temp1 = jsObject.list[5].main.temp;
        const temp2 = jsObject.list[13].main.temp;
        const temp3 = jsObject.list[21].main.temp;

        const icon1 = `https://openweathermap.org/img/w/${jsObject.list[5].weather[0].icon}.png`;
        const icon2 = `https://openweathermap.org/img/w/${jsObject.list[13].weather[0].icon}.png`;
        const icon3 = `https://openweathermap.org/img/w/${jsObject.list[21].weather[0].icon}.png`;

        const desc1 = jsObject.list[5].weather[0].main;
        const desc2 = jsObject.list[13].weather[0].main;
        const desc3 = jsObject.list[21].weather[0].main;

        const time1 = jsObject.list[5].dt_txt;
        const time2 = jsObject.list[13].dt_txt;
        const time3 = jsObject.list[21].dt_txt;

        document.querySelector("#temp").textContent = temp1;
        document.querySelector('#icon1').setAttribute('src', icon1);
        document.querySelector('#icon1').setAttribute('alt', desc1);
        document.querySelector('#time1').textContent = time1;
        document.querySelector("#temp2").textContent = temp2;
        document.querySelector('#icon2').setAttribute('src', icon2);
        document.querySelector('#icon2').setAttribute('alt', desc2);
        document.querySelector('#time2').textContent = time2;
        document.querySelector("#temp3").textContent = temp3;
        document.querySelector('#icon3').setAttribute('src', icon3);
        document.querySelector('#icon3').setAttribute('alt', desc3);
        document.querySelector('#time3').textContent = time3;
    });