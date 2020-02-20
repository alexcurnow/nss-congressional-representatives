const senators = [
  {
    image: 'https://www.govtrack.us/static/legislator-photos/300002-100px.jpeg',
    name: 'Lamar Alexander',
    job: 'Senior Senator for Tennesee',
    party: 'Republican'
  },
  {
    image: 'https://www.govtrack.us/static/legislator-photos/400032-100px.jpeg',
    name: 'Marsha Blackburn',
    job: 'Junior Senator for Tennesee',
    party: 'Republican'
  }
]

senators.forEach(e => {
  document.querySelector('main').innerHTML += `<article class="representative">
  <section class="rep__basic-info">
    <img class="rep__image" src="${e.image}">
    <h6 class="rep__name">${e.name}</h6>
    <p class="rep__district">${e.job}</p>
    <p class="rep__legislation">${e.party}</p>
  </section>
  </article>`
})

// for (i of senators) {
//   template += `<article class="representative">
//   <section class="rep__basic-info">
//     <img class="rep__image" src="${i.image}">
//     <h6 class="rep__name">${i.name}</h6>
//     <p class="rep__district">${i.job}</p>
//     <p class="rep__legislation">${i.party}</p>
//   </section>
//   </article>`
// }
