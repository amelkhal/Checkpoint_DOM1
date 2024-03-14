document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      const likeBtn = item.querySelector('.like-btn');
      const quantityDisplay = item.querySelector('.quantity');
      const price = parseFloat(item.querySelector('.price').innerText.slice(1));
      let quantity = parseInt(quantityDisplay.innerText);
  
      likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('liked');
      });
  
      item.querySelector('.plus').addEventListener('click', function() {
        quantity++;
        quantityDisplay.innerText = quantity;
        updateTotal();
      });
  
      item.querySelector('.minus').addEventListener('click', function() {
        if (quantity > 0) {
          quantity--;
          quantityDisplay.innerText = quantity;
          updateTotal();
        }
      });
  
      item.querySelector('.delete-btn').addEventListener('click', function() {
        item.remove();
        updateTotal();
      });
    });
  
    function updateTotal() {
      let totalPrice = 0;
      items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        const price = parseFloat(item.querySelector('.price').innerText.slice(1));
        totalPrice += quantity * price;
      });
      document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    }
  });
  