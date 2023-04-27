let imagesDirectory = 'Images';
let fileExtension = '.jpg'; // or whatever extension your images have
let imageArray = [];

// Loop through the images directory and get the pathway for each image
for (let i = 1; i <= 10; i++) { // assuming you have 10 images named 1.jpg, 2.jpg, 3.jpg, etc.
  let imagePath = `${imagesDirectory}/${i}${fileExtension}`;
  imageArray.push(imagePath);
}

// Output the file pathway for each image
for (let i = 0; i < imageArray.length; i++) {
  console.log(imageArray[i]);
}

function getImage(imageArray) {
    if (document.getElementsByClassName("final").length !== 0) {
      let removeContainer = document.getElementsByClassName("container")[0]
      removeContainer.removeChild(removeContainer.firstChild);
    };
  
    if (imageArray.length === 0) {
      console.error("No images found in imageArray.");
      return;
    }
  
    let randomNum = Math.floor(Math.random() * imageArray.length);
  
    if (randomNum >= imageArray.length) {
      console.error(`randomNum out of range (max: ${imageArray.length - 1}).`);
      return;
    }
  
    let randomImage = imageArray[randomNum];
    let container = document.getElementsByClassName("container")[0]
    let myImage = new Image(560, 840)
    myImage.src = `${randomImage}`
  
    let finalImage = container.appendChild(myImage)
    finalImage.className = "final";
  };