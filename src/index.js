/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const url_base = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')

//Internacionalizacion

const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('es-ES',{
        style: "currency",
        currency: "PEN"
    }).format(price)
    return newPrice
}


//web api
//Conectarnos al server
window.fetch(url)
//Procesar la respuesta y convertilra en JSON
.then((respuesta) =>respuesta.json())
//Json -> Data - Renderizar info browser
.then((responseJson)=>{
    const todoslosItems = [];
    responseJson.data.forEach((item) => {
        //crear Imagen
        const imagen = document.createElement('img')
        imagen.src = url_base+item.image;
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        
        //Crear Titulo
        const title = document.createElement('h2')
        title.textContent = item.name;
        title.className = 'text-xl'
        
        //Crear Precio
        const price = document.createElement('div')
        price.textContent = formatPrice(item.price);
        

        const container = document.createElement('div')
        container.append(imagen, title, price)

        todoslosItems.push(container)

    });
    appNode.append(...todoslosItems)
})

/*Utilizando Asyn Await */
/*
async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
} */