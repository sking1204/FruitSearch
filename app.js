const input = document.querySelector('#fruit');

input.addEventListener('input',searchHandler)

const suggestionsList = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


/*Instead of hardcoding or ul and li's we want to us JavaScript to do this  */

/* We have the fruit array and we want to detect anytime the user enters anything into the input box.
We will add an event listener to the input element which will be triggered everytime the user
types anything

To test if this works, console.log input.value. Everytime we change the input field we should see it in the console.

*/

function searchHandler(){
    clearFilteredList();
    // console.log(input.value)
    const inputVal=input.value.toLowerCase();

    if(inputVal.length === 0) return;

    const filteredFruits=[];

   fruits.forEach((fruitStr)=>{
    if(fruitStr.substring(0,inputVal.length).toLowerCase()===inputVal)
    filteredFruits.push(fruitStr)
   });

//    console.log(filteredFruits)
   createFruitAutocomplete(filteredFruits);
}

/* Now we want to store the value of whatever is in our input
into a variable. We will convert it to lowercase. 
We want to make everything case insensitive.

We want to use for each to loop over the fruit strings and compare it to the input value
value, if we have a match, we want to add it to a new list
of filtered elements.

We will use for each function..
We will use substring to compare what is typed and set
it to lowercase as well for comparison

(To check if this works, console.log filteredFruits.) */

/* Now we want to create our autocomplete dropdown list.
using JavaScript to create our ul, and li's */

function createFruitAutocomplete(filteredList){
    const fruitUl=document.createElement('ul')
   fruitUl.className='suggestions-list';
   fruitUl.id='suggestions-list';



/* Add and event listener to the fruitLi element and pass through the liClick
function so that whenever a li is clicked on, the li text is what we 
will see in the input */

   filteredList.forEach((fruit)=>{
    const fruitLi=document.createElement('li')
    fruitLi.innerHTML=fruit;
    fruitLi.addEventListener("click",liClick)
    fruitUl.append(fruitLi);


/*Outside of the createFruitAutocomplete function, write a function
to set the input text to the li text (we'll then pass this to the
event listener so that it is triggered when an li is clicked) */


/* Append the li to the ul and append the ul to the suggestions wrapper
so that we see the list on the page */ 

   })

   document.querySelector('#suggestions-wrapper').append(fruitUl);

}

/* Write a function to set the input text to
whatever text the button clicked on has as its text.

Once an item is clicked on from the dropdown,
we want to all the clearFilteredList function to clear the list.
*/


function liClick(e){     
    const liElement =e.target;
    input.value=liElement.innerHTML;

    clearFilteredList();
}

/* Write a function to clear the fruit suggestions list after an item is clicked on */


function clearFilteredList(){
const fruitSuggestionsList=document.querySelector('#suggestions-list')
 if(fruitSuggestionsList)
 fruitSuggestionsList.remove();
}

























