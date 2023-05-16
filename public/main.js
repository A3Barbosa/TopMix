//user will click for temp. and get back the weather from any country or city they type in, using API.

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let drink = document.querySelector('input').value
  const url = `https://api.api-ninjas.com/v1/cocktail?name=${drink}`
  fetch(url, { headers: { "X-Api-Key": `gZj7oqxaYlhcPggSrza1pAwRItxWgi9H4YPxJDJG` } })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#show').innerText = data[0].instructions
      for (let i = 0; i <=data[0].ingredients.length; i++){
        let item = document.createElement('li')
        document.querySelector('ul').appendChild(item)
        item.innerText= data[0].ingredients[i]
      }
    })


    .catch(err => {

      console.log(`error ${err})`)


    })
}


document.querySelector('input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getDrink()
  }
}
)





