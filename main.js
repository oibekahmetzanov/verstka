
let catalog = document.querySelector('.catalog')
fetch('http://localhost:3000/cards')
.then((response)=>response.json())
.then((json) => json.foreach((item)=>{
    let image = document.createElement('img')
    image.setAttribute('src',item.image)
    image.setAttribute('alt', item.title)
    catalog.append(image)

}))
.catch((err)=> console.log(err))