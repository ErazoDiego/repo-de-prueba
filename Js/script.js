
let base_de_datos =[
    {   
        imagen:"/img/Bajonera.jpeg",
        descripcion:"Bajonera",
        precio:375.00,
        id:1,
    },
    {
        imagen:"/img/Taparterias.jpeg",
        descripcion:"Taparterias",
        precio:375.00,
        id:2,
    },
    {
        imagen:"/img/Palta Burger.jpeg",
        descripcion:"Palta Burger",
        precio:375.00,
        id:3,
    },
 
];

const carrito=[];

const contenedor_de_productos=document.getElementById("contenedor_productos");

base_de_datos.forEach((producto)=>{
    const div=document.createElement('div');
    div.classList.add('producto');
    div.innerHTML=`
    <div>
        <img src="${producto.imagen}" alt=""class="cart-img">
    </div>
    <h3>${producto.descripcion}</h3>
    <p>$${producto.precio}</p>
    <button id="agregar${producto.id}" class="btn-agregar">Agregar Carrito</button>
    `;
    contenedor_de_productos.appendChild(div);
    const btn_agregar=document.getElementById(`agregar${producto.id}`);
    btn_agregar.addEventListener("click",()=>{
        agregar_carrito(producto.id);
    });
});

const agregar_carrito=(producto_id)=>{
    const item= base_de_datos.find((prod) => prod.id === producto_id);
    carrito.push(item);
    console.log(carrito)
};



let modal_carrito=document.getElementById("modal-carrito-contenedor");
let btn_cerrar=document.getElementById("cerrar-carrito");
let btn_modal_carrito=document.getElementById("btn-carrito");
var body=document.getElementById("body");

btn_modal_carrito.addEventListener("click",()=>{
    modal_carrito.style.display="block";
    body.style.position="static";
    body.style.height="100%";
    body.style.overflow="hidden";
}) 

    

btn_cerrar.addEventListener("click",()=>{
    modal_carrito.style.display="none";
    body.style.position="inherit";
    body.style.height="auto";
    body.style.overflow="visible";

})

   

