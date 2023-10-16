// Array of review data
const reviewsData = [
    {image: 'https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'John Doe', job: 'Web Developer', description: 'Passionate about creating web applications.'},
    {image: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Alice Smith', job: 'Graphic Designer', description: 'Designing beautiful and creative graphics.'},
    {image: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Bob Johnson', job: 'Data Analyst', description: 'Analyzing data to gain insights.'},
    {image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Ella Brown', job: 'Marketing Manager', description: 'Driving successful marketing campaigns.'},
    {image: 'https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'David Wilson', job: 'Software Engineer', description: 'Building innovative software solutions.'}
];


// Get DOM elements by their IDs
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const randomBtn = document.getElementById('random-btn');
const profilePic = document.getElementById('profile-pic');
const clientName = document.getElementById('client-name');
const job = document.getElementById('job');
const description = document.getElementById('description');

// Initialize the current review index
let currentReviewIndex = 0;

// Event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadData(currentReviewIndex);    

});

// Event listener for the "Random" button
randomBtn.addEventListener('click', () => {
    // Generate a random index within the range of the reviewsData array
    const dataLength = Math.floor(Math.random() * reviewsData.length);

    // Update the currentReviewIndex with the random index
    currentReviewIndex = dataLength;

    // Load the data for the selected index
    loadData(dataLength);

});

// Event listener for the "Next" button
rightBtn.addEventListener('click', () => { 
     // Increment the current review index
   currentReviewIndex++;  

   // If it goes beyond the last index, wrap around to the first index
   if(currentReviewIndex > reviewsData.length - 1) { 
    currentReviewIndex = 0
   }  

   // Load the data for the updated index
   loadData(currentReviewIndex);  
})

// Event listener for the "Previous" button
leftBtn.addEventListener('click', () => { 

    // Decrement the current review index
    currentReviewIndex--;  

    // If it goes below the first index, wrap around to the last index
    if(currentReviewIndex < 0) { 
        currentReviewIndex = reviewsData.length - 1
       }     
       // Load the data for the updated index
        loadData(currentReviewIndex);  
});

// Function to load review data into the DOM
function loadData(index) {
const review = reviewsData[index];
profilePic.src = review.image;
clientName.textContent = review.name;
job.textContent = review.job;
description.textContent = review.description;
}