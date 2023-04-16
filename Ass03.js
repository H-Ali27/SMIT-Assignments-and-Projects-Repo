//IIFE
const loadedLanguage = [];
(async function(){
    const response = await fetch("./data.json");
    const genre = await response.json();
       
    const genreElem    = document.getElementById("Genre");
    const yearElem     = document.getElementById("year");
    const languageElem = document.getElementById("language");
    const ratingElem   = document.getElementById("rating");
    const btnElem      = document.getElementById("searchBtn");
    const tableBody    = document.getElementById("tablebody");

    genre.forEach(function(result,index){
        const optionsTag  = document.createElement("option");
        const yearTag     = document.createElement("option");
        const languageTag = document.createElement("option");
        const ratingTag   = document.createElement("option");
        const tabrow      = document.createElement("tr");

        const releaseDate = result.release_date;
        const releaseYear = releaseDate.slice(0,4);
        
        optionsTag.innerText = result.genres;
        yearTag.innerText    = releaseYear;
        languageTag.innerText = result.original_language;

        const rate = Math.round(result.vote_average);
        ratingTag.innerText = rate;
        
        
        // console.log(releaseYear);

        const tableData = `
        <td>${(index+1)}</td>
        <td> ${result.title}</td>
        <td>${releaseYear}</td>
        `;
        
        tabrow.innerHTML = tableData;
        tableBody.appendChild(tabrow);

        // tableBody.innerHTML = "";
        // results.forEach(function(data){
        //     const tableTag = document.createElement("tr");
        //     const tableData = `
        //     <td>${data.title}</td>
        //     `;
        //     tableTag.innerHTML = tableData;
        //     tableBody.appendChild(tableTag);
        //     console.log(tableTag);
    

        // const arr = result.original_language;
        // loadedLanguage.push(arr)
        // // console.log(loadedLanguage)
        // for(let i=1; i<loadedLanguage.length; i++){
        //     if(loadedLanguage[i] !== loadedLanguage[i]){
        //         console.log("not same")
                // languageTag.innerText = result.original_language;
        //     }else{
        //         return null;
        //     }
        // }   
        yearElem.appendChild(yearTag);
        genreElem.appendChild(optionsTag);            
        languageElem.appendChild(languageTag);            
        ratingElem.appendChild(ratingTag);

    }) 
    function search(){
        const genreValue    = genreElem.value;
        const yearValue     = yearElem.value;
        const languageValue = languageElem.value;
        const ratingValue   = ratingElem.value;
        genre.forEach(function(result){
            const searchResult  = genre.filter(function(data){
                return (genre.genres.includes(genreValue))
            })
            console.log(searchResult);
        })
                
    }
    btnElem.addEventListener("click",search)
  
})();
