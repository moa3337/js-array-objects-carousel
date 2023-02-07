/*
 Dato un array di oggetti letterali con: immagine, titolo, descrizione. 
 Creare un carosello.
 Creare prima il markup statico: costruire il container e inserire
 l'immagine grande in modo da poter stilare lo slider. 
 Poi rimuovere i contenuti statici e usare l'array di oggetti letterali
 per popolare dinamicamente il carosello.
 Al click dell'utente sulle frecce verso sinistra o destra, l'immagine
 attiva diventerà visibile e dovremo aggiungervi titolo e testo.
 Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura
 attiva è la prima e l'utente clicca la freccia verso destra, la miniatura
 che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
 se l'utente clicca la freccia verso sinistra.
*/

// CREO UN AARAY DI OGETTI, CON FOTO E TITOLO
const images = [
    {
        image: 'pictures/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'pictures/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'pictures/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'pictures/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'pictures/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// DICHIARO UNA VARIABILE PER L'IMMAGINE CORRENTE
let currentImg = 0;

// AGGANCIO AGLI "id" PER IMMAGINE E TITOLO DAL HTML
const imageEl = document.getElementById("image");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
// AGGANCIO ANCHE AGLI "id" DEI BOTTONI DAL HTML
const btnPrevEl = document.getElementById("prev");
const btnNextEl = document.getElementById("next");

// FUNZIONE PER IL PER LO SCAMBIO DEGLI ELEMENTI:
// "img", "title" e "description"
function updateCarousel() {
    const currentImage = images[currentImg];
    imageEl.src = currentImage.image;
    titleEl.innerText = currentImage.title;
    descriptionEl.innerText = currentImage.text;
}

// FUNZIONE PER L'EVENTO AL "click" DEL BOTTONE "prev"
btnPrevEl.addEventListener('click', () => {
    currentImg =
        currentImg === 0 ? images.length - 1 : currentImg - 1;
    updateCarousel();
});

// FUNZIONE PER L'EVENTO AL "click" DEL BOTTONE "next"
btnNextEl.addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    updateCarousel();
});

updateCarousel();