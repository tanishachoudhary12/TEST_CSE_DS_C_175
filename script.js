function calculateTotal() {
    const price = 1500;
    const quantity = document.getElementById('quantity').value;
    const total = price * quantity;
    
    // Display the total on the page
    document.getElementById('total').textContent = total;
  
    // Display alert with total cost
    alert(`You added ${quantity} items to your cart for Rs. ${total}`);
  }