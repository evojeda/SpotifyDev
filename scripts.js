document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'},
        {name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
        {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg'}
    ];

    const albumData = [
        {name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'O ceu explica tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-racionais.jpg'},
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Ellish', image: './img/album-hit-me.jpg'},
        {name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg'},
        {name: 'Escandalo Intimo', artist: 'Luisa Sonza', image: './img/album-escandalo.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    // essa função vai item por item do const
    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <div>
        <h3>${artist.name}</h3>
        <p>artista</p>
        </div>
        ` 
        artistGrid.appendChild(artistCard)
    })
    
    albumData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${album.image}" alt="${album.name}">
        <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
        </div>
        ` 
        albumsGrid.appendChild(albumCard)
    })

} )

