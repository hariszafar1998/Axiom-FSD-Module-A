const submitForm = document.getElementById('submit');
const searchQuery = document.getElementById('searchtext');
const randomBtn = document.getElementById('random');
const resultsHeading = document.getElementById('results-heading');
const mealsElement = document.getElementById('meals-element');
const selectedInfo = document.getElementById('selected-meal-info');

// Functions

function getRandomMeals(e) {
    e.preventDefault();
    const newQuery = searchQuery.value.trim();
    if ( newQuery ) {
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newQuery}`)
            .then ( res => res.json() )
            .then ( data => {
                if ( data.meals ) {
                    const meals = data.meals;
                    resultsHeading.innerHTML = `<h2>Search results for ${newQuery}</h2>`;
                    // console.log(data);
                    mealsElement.innerHTML = data.meals.map( meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    ` ).join('');

                } else {
                    resultsHeading.innerHTML = `<h2>No results for ${newQuery}</h2>`;
                }
            } )

    } else {
        alert('Please enter a keyword')
    }
    searchQuery.value = '';
};

let ingredientsAll = [];

function renderIngredients(data) {
    for ( let i = 1; i <= 20; i++ ) {
        // console.log(data[`strIngredient${i}`]);
        if ( data[`strIngredient${i}`] ) {
        const sigleData = `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
        // console.log(sigleData);
        ingredientsAll.push(sigleData);
        } else {
            break;
        }
    }
    // console.log(ingredientsAll);
    const newDivForIng = document.createElement('div');
    selectedInfo.appendChild(newDivForIng);
    newDivForIng.classList.add('newDivForIng');
    newDivForIng.innerHTML = ingredientsAll.map( ing => `<p>${ing}</p>` ).join('');
};

function randomRecipe() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then( res => res.json() )
        .then( data => {
            // console.log(data);
            const mealData = data.meals[0];
            resultsHeading.innerHTML = `<h2>${mealData.strMeal}</h2><h3>${mealData.strArea} Recipe</h3><h3>Category: ${mealData.strCategory}</h3>`
            mealsElement.innerHTML = '';
            selectedInfo.innerHTML = `<img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" /><h3 class="instructions">Instructions</h3><p class="instructions">${mealData.strInstructions}</p><h3 class="instructions">Ingredients</h3>`;
            renderIngredients(mealData);
        } )
};

// Event Listners

submitForm.addEventListener('submit', getRandomMeals);

mealsElement.addEventListener('click', e => {
    const mealInfo = e.path.find( item => {
        if ( item.classList ) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    } )
    // console.log(mealInfo);
    const mealID = mealInfo.getAttribute('data-mealID');
    // console.log(mealID);
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then( res => res.json() )
        .then( data => {
            const mealData = data.meals[0];
            resultsHeading.innerHTML = `<h2>${mealData.strMeal}</h2><h3>${mealData.strArea} Recipe</h3><h3>Category: ${mealData.strCategory}</h3>`
            mealsElement.innerHTML = '';
            selectedInfo.innerHTML = `<img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" /><h3 class="instructions">Instructions</h3><p class="instructions">${mealData.strInstructions}</p><h3 class="instructions">Ingredients</h3>`;
            renderIngredients(mealData);
        } )

});

randomBtn.addEventListener('click', randomRecipe);