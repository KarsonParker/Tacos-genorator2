const tacoButton = document.getElementById('tacoButton');
const tacoImage = document.getElementById('tacoImage');

// Function to fetch random taco pictures
async function getRandomTaco() {
  try {
    // Fetch a random taco-related image from Unsplash
    const response = await fetch('https://source.unsplash.com/featured/?taco');
    tacoImage.src = response.url; // Update the image source with the fetched URL
    tacoImage.alt = 'A delicious taco'; // Set an alt description for accessibility
  } catch (error) {
    console.error('Error fetching taco image:', error);
    tacoImage.alt = 'Failed to load taco image.';
  }
}

// Add an event listener to the button to fetch images on click
tacoButton.addEventListener('click', getRandomTaco);