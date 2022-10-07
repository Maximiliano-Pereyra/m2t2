let cardContainer = document.getElementById('cardContainer')

for (let i = 0; i < data.events.length; i++) {
    // console.log(data.currentDate)   
    if ((data.currentDate) < (data.events[i].date)) {
        let divCard = document.createElement('div')
        divCard.classname = 'card gap-2';
        divCard.style.width = '19rem'
        divCard.style.height = "25rem"
        divCard.style.border = 'solid 1px black'
        divCard.innerHTML = ` <div class="d-flex justify-content-between flex-wrap">
    <img src="${data.events[i].image}" class="" alt="..." width="280px" height="200px" </img>
                                   <h5 class="card-title"> ${data.events[i].name}</h5>
                                   <p class="card-text"> ${data.events[i].date}</p>
                                   <p class="card-text"> ${data.events[i].description}</p>
                                   <p>price: ${data.events[i].price}</p>
                                   <a href="./details.html" class="btn btn-primary btnCard">Buy</a>
                                   </div>
                                   `

        cardContainer.appendChild(divCard)
    }
}

console.log(typeof parseInt(data.events[0].date))
console.log(typeof parseInt(data.currentDate))