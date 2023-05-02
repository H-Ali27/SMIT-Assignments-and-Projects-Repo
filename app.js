const inputElem = document.getElementById("searchInput");
const btnElem = document.getElementById("searchBtn");
const listElem = document.getElementById("recipe-list");
const detailsElem = document.getElementById("recipeDetailsContainer");


const loadRecipeDetails = recipe => {
    
    detailsElem.innerHTML = `
    <h2 class="title">${recipe.title}</h2>
    <h3>Ingredients: </h3>
    <ul>
        ${recipe.ingredients.map(function(ingredient){
            return "<li>" + ingredient + "</li>"
        }).join("")}
    </ul>
    <h3>Ingredients: </h3>
    <div>${recipe.instructions}</div>
    `;
}

const displaySearchResults = results => {
    listElem.innerHTML = "";
    detailsElem.innerHTML ="";
    results.forEach(function(recipe){
        const li = document.createElement("li");
        const listItem = `
        <div class="title">${recipe.title}</div>
        <div class= "description">${recipe.description}</div>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click",function(){
            loadRecipeDetails(recipe);
        })
        listElem.appendChild(li);
    })
}

const  recipe = async () => {
    const response = await fetch("./recipes.json");
    const recipes = await response.json();
    // console.log(recipes);
    const search = () => {
        const query = inputElem.value.toLowerCase();

        const results = recipes.filter(function(recipe){
            return (recipe.title.toLowerCase().includes(query) || 
            recipe.ingredients.join(" ").toLowerCase().includes(query));
            // console.log(recipes);
        })
        displaySearchResults(results);
    }
    btnElem.addEventListener("click",search);
}
recipe();
 
//function hierarchy
/* function recipe =>  (main function) 
      search function =>  (child function 1)
         display function =>   (child function 2)
            load recipeDetail function  (child function 3)
 */