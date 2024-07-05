var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = 'new value';
    } catch (error) {
        console.log("Error: Cannot reassign a constant variable");
    }
}