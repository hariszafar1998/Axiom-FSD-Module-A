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
                    console.log(data);
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
};

// Event Listners

submitForm.addEventListener('submit', getRandomMeals);