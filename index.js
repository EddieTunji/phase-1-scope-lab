var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(customer) {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some initial value'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'
  }