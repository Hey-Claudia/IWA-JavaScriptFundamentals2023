const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// Select the book elements from html div elements and update their properties
const book1 = document.getElementById('book1');
const book2 = document.getElementById('book2');
const book3 = document.getElementById('book3');

// Update the properties for each book
function updateBookProperties(bookElement, status) {
    const statusElement = bookElement.querySelector('.status');  //select the element with the class "status" within the book element to change the text color
    const buttons = bookElement.querySelectorAll('button'); //selects all the buttons within the book element

    if (STATUS_MAP.hasOwnProperty(status)) {    //checks if the STATUS_MAP object has a property corresponding to the provided status
        const statusInfo = STATUS_MAP[status];
        statusElement.style.color = statusInfo.color;

        buttons.forEach((button, index) => {
            switch (index) {
                case 0: // Reserve
                    button.disabled = !statusInfo.canReserve;
                    break;
                case 1: // Checkout
                    button.disabled = !statusInfo.canCheckout;
                    break;
                case 2: // CheckIn
                    button.disabled = !statusInfo.canCheckIn;
                    break;
            }
        });
    }
}

// Update properties for each book
updateBookProperties(book1, 'overdue');
updateBookProperties(book2, 'reserved');
updateBookProperties(book3, 'shelf');