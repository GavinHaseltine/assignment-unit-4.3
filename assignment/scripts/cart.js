console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket =[]
console.log(basket);
let i = 0;

//Function to add an item to the basket array 
//start addItem
function addItem( item ){
console.log( 'In addItem ', item );
//push an item into the basket array
basket.push( item );
return true;
} //End addItem

addItem("Fruit"); //end Fruit
addItem("Milk"); //end Milk

//Function to list the items in the basket array
function listItems(){
    console.log( 'In listItems', basket);
while(i < basket.length){
    console.log(basket[i]);
    i++
    
}
} //end listItems

listItems(); 

//function to empty the basket array
function empty(){
     basket = [];
    console.log("In empty", basket);
}

empty();
console.log(basket);






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
