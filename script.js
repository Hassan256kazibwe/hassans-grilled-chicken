// HASSAN'S GRILLED CHICKEN ORDER SYSTEM

// Chicken prices in Uganda Shillings
const prices = {
    "Whole Chicken": 25000,
    "Half Chicken": 15000,
    "Chicken Piece": 5000
};

// Calculate chicken price
function calculatedPrice() {
    const chicken = document.getElementById("chickenType").value;
    const quantity = Number(document.getElementById("quantity").value);

    const total = prices[chicken] * quantity;

    document.getElementById("totalPrice").textContent =
        "Total Price: UGX " + total.toLocaleString();
}

// Calculate price when selection or quantity changes
document.getElementById("chickenType").addEventListener("change", calculatedPrice);
document.getElementById("quantity").addEventListener("input", calculatedPrice);

// Handle customer order
document.getElementById("orderForm").addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Collect customer information
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const chicken = document.getElementById("chickenType").value;
    const quantity = Number(document.getElementById("quantity").value);
    const location = document.getElementById("deliveryLocation").value;
    const instructions = document.getElementById("instructions").value;

    // Calculate total price
    const total = prices[chicken] * quantity;

    // Display total price
    document.getElementById("totalPrice").textContent =
        "Total Price: UGX " + total.toLocaleString();

    // Prepare WhatsApp order message
    const message = `NEW CHICKEN ORDER

Customer: ${name}
Phone: ${phone}
Chicken: ${chicken}
Quantity: ${quantity}
Delivery Location: ${location}
Instructions: ${instructions}
Total: UGX ${total.toLocaleString()}`;

    // Open WhatsApp
    const whatsappNumber = "256741865236";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
