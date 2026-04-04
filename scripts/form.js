const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');

    // Populate the product select element
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Using id as value as per requirement
        option.textContent = product.name; // Using name as display text
        productSelect.appendChild(option);
    });

    // Handle form submission (optional, but good for debugging)
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (event) => {
        // Form will naturally submit to review.html via GET
        console.log('Form submitted');
    });
});
