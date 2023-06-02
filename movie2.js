



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODQ2NDk5MmExMjdjNDRjMjFiMjNlMjhkODU2NTkzYiIsInN1YiI6IjY0NzU4ZDg3ZGQyNTg5MDEwMTdmNjUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jOds0MmhNg8m6r4Jr-GggwvVW8tFRfqbzEyfaYi9jqQ'
    }
};
let gridContainer = document.getElementById('gridContainer');
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => {
        let result = response['results'];
        result.forEach((a) => {


            let id = a['id'];
            let title = a['title'];
            let overview = a['overview'];
            // let poster_path = a['poster_path'];
            let vote_average = a['vote_average'];
            let movie_poster_path = 'https://image.tmdb.org/t/p/w500' + a['poster_path'];

            let temp_html = `

                <div class="grid-item">
                <img src="${movie_poster_path}" alt=""></img>
                <div class='grid-title'>${title}</div>
                
                <div class='overview'>${overview}</div>
              
                <span class='vote_aver'>${vote_average}</span>
                </div>
               
            
             `
            // $('#team-list').append(temp_html)
            gridContainer.insertAdjacentHTML("afterbegin", temp_html)
        })

    })
    .catch(err => console.error(err));


// 필터기능
// let animals = [
//     { species: 'mammalia', name: "cat" },
//     { species: 'reptiles', name: "lizard" },
//     { species: 'amphibia', name: "flog" },
//     { species: 'mammalia', name: "dog" },
//     { species: 'amphibia', name: "salamander" }
// ];

// let result = animals.filter((value) => value.species == 'mammalia')

let input = document.getElementsByClassName('movie_input');
console.log('input='+input);
// let input = document.querySelector('#search');movie_input
let items = document.querySelector('#gridContainer').getElementsByTagName('grid-item');

input[0].addEventListener('keyup', function (ev) {
    let text = ev.target.value;
    let pat = new RegExp(text, 'i');
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (pat.test(item.innerText)) {
            item.classList.remove("hidden");
        }
        else {
            console.log(item);
            item.classList.add("hidden");
        }
    }
});
console.log(result);
