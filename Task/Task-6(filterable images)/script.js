// Selecting all required elements
const filterItems = document.querySelectorAll(".item"); // Selecting filter items
const filterImages = document.querySelectorAll(".image"); // Selecting images
const previewBox = document.querySelector(".preview-box"); // Selecting preview box
const imageBox = previewBox.querySelector(".image-box"); // Selecting image box within preview
const title = previewBox.querySelector(".title"); // Selecting title within preview
const closeButton = previewBox.querySelector(".icon"); // Selecting close button within preview
const shadow = document.querySelector(".shadow"); // Selecting shadow overlay

// Function to filter images by category
const filterImagesByCategory = (category) => {
    filterImages.forEach((image) => {
        const imageFilterName = image.getAttribute("data-name");
        if (category === imageFilterName || category === "all") {
            image.classList.remove("hide");
            image.classList.add("show");
        } else {
            image.classList.remove("show");
            image.classList.add("hide");
        }
    });
};

// Function to show the preview box
const showPreview = (category, imageUrl) => {
    title.innerHTML = `Image Category: <p>${category}</p>`;
    imageBox.innerHTML = `<img src="${imageUrl}" alt="" srcset="">`;
    previewBox.classList.add("show");
    shadow.classList.add("show");
};

// Function to close the preview box
const closePreview = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
};

// Function to handle filter item click
const handleFilterClick = (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains("item")) {
        filterItems.forEach((item) => {
            item.classList.remove("active");
        });
        selectedItem.classList.add("active");
        const filterName = selectedItem.getAttribute("data-name");
        filterImagesByCategory(filterName);
    }
};

// Function to handle image click
const handleImageClick = (event) => {
    const clickedImage = event.currentTarget;
    const category = clickedImage.getAttribute("data-name");
    const imageUrl = clickedImage.querySelector("img").getAttribute("src");
    showPreview(category, imageUrl);
};

// Once the window is loaded, set up event listeners and initial state
window.onload = () => {
    filterItems.forEach((item) => {
        item.onclick = handleFilterClick;
    });

    filterImages.forEach((image) => {
        image.onclick = handleImageClick;
    });

    closeButton.onclick = closePreview;
    shadow.onclick = closePreview;

    filterImagesByCategory("all"); // Initially show all images
};
