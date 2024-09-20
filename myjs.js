// Fetch mock travel packages
const travelPackages = [
    {id: 'paris-adventure', title: 'Paris Adventure', price: 1200, rating: 4.5, description: 'Explore Paris...'},
    {id: 'bali-explorer', title: 'Bali Explorer', price: 1500, rating: 5.0, description: 'Discover Bali...'},
    // more packages...
];

function viewPackage(packageId) {
    const selectedPackage = travelPackages.find(pkg => pkg.id === packageId);
    document.getElementById('package-title').innerText = selectedPackage.title;
    document.getElementById('package-description').innerText = selectedPackage.description;
    document.getElementById('package-price').innerText = $${selectedPackage.price};
    document.getElementById('package-rating').innerText = selectedPackage.rating;
    document.getElementById('package-details').style.display = 'block';
}


if(){
    document.getElementById('searchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const budget = document.getElementById('budget').value;
        
        // Filter logic to show packages matching criteria
        const filteredPackages = travelPackages.filter(pkg => 
            (!destination || pkg.title.toLowerCase().includes(destination.toLowerCase())) &&
            (!budget || pkg.price <= budget)
        );
    
        // Render filtered packages
        // ...
    });
}


document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('traveler-name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        alert("Booking successful!");
    } else {
        alert("Please fill all required fields.");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("Travel Agency Website Loaded");
});
