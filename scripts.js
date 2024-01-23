function showReviews(restaurantName) {
    document.getElementById("selectedRestaurant").innerText = restaurantName;
    document.getElementById("reviews").style.display = "block";
    document.getElementById("reviewList").innerHTML = "";
    const reviews = [
        "Fresh fruits and vegetables",
        "Long wait time",
        "Average experience, could be better."
    ];

    const reviewList = document.getElementById("reviewList");

    reviews.forEach(review => {
        const li = document.createElement("li");
        li.innerText = review;
        reviewList.appendChild(li);
    });
}
