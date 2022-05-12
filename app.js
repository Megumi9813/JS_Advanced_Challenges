/* Question #1 */

function showRating(rate) {
    let result = '';
    while (rate >= 1) {
        result += '* ';
        rate -= 1;
    }
    if (rate === 0.5) {
        result += '.';
    }
    return result;
    // console.log(rate);
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

/* Question #1 */

/* Question #2 */

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

/* Question #2 */

/* Question #3 */

function sortHighToLow(obj) {
    return obj.sort((a, b) => b.price - a.price);
}

console.log(sortHighToLow([
    {id: 1, price: 50}, 
    {id: 2, price: 100}, 
    {id: 3, price: 60}, 
    {id: 4, price: 10}
]));

/* Question #3 */

/* Question #5 */

async function postsByUser(userId) {
    const link = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await link.json();
    const posts = response.filter(elem => elem.userId === userId);
    
    console.log(posts);
}

postsByUser(4);

/* Question #5 */
