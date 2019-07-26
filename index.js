'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: returns input value unchanged 
 * 
 * @param {value} 
 * collection
 */
 
 
 
function identity(value){
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: returns the type of value as a string
 * @param {value}
 **/
 
 function typeOf(value){
      if(Array.isArray(value)){
        return "array";
    }
    if(value === null){
        return "null";
    }
    return typeof value;
 }
 module.exports.typeOf = typeOf;
 
 /**
  * first: returns the first {number} elements in an array. If {number} isn't given or NaN, return the first element in {array}.
  * If {array} doesn't exist, return an empty [] array.
  * @param {array}
  * @param {number}
  **/
  function first(array, number){
      var myarr = [];
    if(!Array.isArray(array)){
        return myarr;
        }
        if(number === undefined || typeof number !== 'number'){
            return array[0];
        }
        else if(number > array.length){
            return array;
        }
        for(var i = 0; i < number; i++){
            myarr.push(array[i]);
        }
        return myarr;
  }
  module.exports.first = first;
  
  
 /**
  * last: returns the last {number} of elements in an array. If {number} isn't given or NaN, return the last element in {array};
  * If {array} doesn't exist, return [].
  * @param {array}
  * @param {number}
 **/
 
 function last(array, number){
     var myarr = [];
    if(!Array.isArray(array)){
        return myarr;
        }
        if(number === undefined || typeof number !== 'number'){
            return array[array.length -1];
        }
        else if(number >= array.length){
            return array;
        }
        if(number < 0){
            return myarr;
        }
        for(var i = array.length -1; i >= number -1; i--){
            myarr.unshift(array[i]);
        }
        return myarr;
 }
 
module.exports.last = last;


/**
 * indexOf: returns the index of the {array} element that is the same as the {value} argument.
 * @param: {array}
 * @param: {value}
**/

function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: returns true if {array} contains {value}, false otherwise.
 *@param: {array}
 * @param: {value}
 **/
 
 function contains(array, value){
     return (indexOf(array, value) === -1) ? false : true;
 }
 module.exports.contains = contains;
 
 /**
  * each: loops through either an object, or array and performs an action(or function) on every element, index, and collection(collection = array or object).
  * @param: {collection}
  * @param: {action}
 **/
 function each(collection, action){
     if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            action(collection[i], i, collection);
        }
           }
        
        else if(typeof collection === 'object'){
         for(var key in collection){
             action(collection[key], key, collection);
             
         }
        }
 }
 module.exports.each = each;
 
 /**
  * unique: Returns a new array of all elements from {array} with duplicates removed
  * @param:{array}
  **/
  function unique(array){
    var myarr = [];
  for(let i = 0; i < array.length; i++){
      if(indexOf(myarr, array[i]) === -1){
          myarr.push(array[i]);
      }
  }
  return myarr;
}
module.exports.unique = unique;

/**
 * filter: Returns a new array of elements that resolved to true once {action} was performed on them.
 * @param: {array}
 * @param: {action}
 **/
 function filter(array, action){
    var filtArr = [];
   each(array, function(ele, i, arr){
       if(action(ele, i, arr) === true) {
       filtArr.push(ele);
          }
    
   });
    return filtArr;}
module.exports.filter = filter;

/**
 * reject: Returns a new array of false elements once {action} was performed.
 * @param:{array}
 * @param:{action}
**/
function reject(array, action){
    let myarr = [];
    each(array, function(ele, i, array){
        if(!action(ele, i, array)){
            myarr.push(ele);
        }
    });
        return myarr;
    }
    module.exports.reject = reject;
    
    /**
     * partition: Returns an arrray of 2 sub arrays. 1 of those Arrays are all truthy values, while the other are all falsy values. All within one BIG array.
     * @param:{array}
     * @param:{action}
     **/

    function partition(array, action){
     var truthyArr = [];
    var falsyArr = [];
each(array, function(ele, i, arr){
if(!action(ele, i, arr)){
    falsyArr.push(ele);
}
else truthyArr.push(ele);
});
    return [truthyArr, falsyArr];
}
     
module.exports.partition = partition;

/**
 * map: Saves the results of {action} performed on every element, i, collection of our {collection} argument into a new array
 * @param: {collection}
 * @param: {action}
**/
function map(collection, action){
    var actArr = [];
   each(collection, function(ele, i, collection){
       actArr.push(action(ele,i, collection));
     
    });
    return actArr;
}
module.exports.map = map;

/**
 * pluck: Returns an array containing the value of all properties
 * @param: {collection}
 * @param: {property}
 **/
 
 function pluck(collection, property){
     var result = map(collection, function(ele){
       return ele[property]; 
    });
    return result;
 }

module.exports.pluck = pluck;

/**
 * every: Checks to see if the return value of {action} on every element is true, if so return true.
 * If even one of them are false; return false.
 * @param: {collection}
 * @param: {action}
 **/
 
 function every(collection, action){
    var bool = true;
    if(typeof action === 'function'){ // check if action is a function
        each(collection, function(ele, i, collection){
            if(!action(ele, i, collection)){ // check if action invoked on element is truthy
             bool = false;
            }
        });
    } else {
        each(collection, function(ele){
          if(!ele) {
              bool = false;
          }
          
        });
    }
    return bool;
}

module.exports.every = every;

/**
 * some: Checks to see if the return value of {action} performed is true for at least one element;
 * if so, return true.
 * if all values are false, return false.
 * if action is not provided, return true if at least one element is truthy, otherwise false;
**/
 function some(collection, action){
    var bool = false;
each(collection, function(ele,i,collection){
    if(action === undefined){
        if(!!ele){
        bool = true;}
    }
     else if(action(ele, i, collection)){  //tests if action performed on 1 element is truthy
    bool = true;}
});
    return bool;
}

module.exports.some = some;

/**
 * reduce: Sets a seed and returns that seed
*    for the next iteration
*   On the very first iteration, use <seed> as the "previous result"
*   If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   After the last iteration, return the return value of the final <function> call
* @param:{array}
* @param:{action}
* @param: {seed}
**/

function reduce(array, action, seed) {
 each(array, function(element, index, array) {
     if(seed === undefined) {
         seed = array[0];
     }
        else if(seed) {
     seed = action(seed, element, index);
       }
   });
       return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Converts however many properties {...objs} has into the {object} argument and returns that new {object}
 * if that property in {object} exists already, override it's value the the property(s) of  {...objs}
 * @param: {object}
 * @param: {...objs}
**/

function extend(object, ...objs){
    for(let i = 0; i < objs.length; i++){
        for(let key in objs[i]){
            object[key] = objs[i][key];
        }
    }
    return object;
}
module.exports.extend = extend;
