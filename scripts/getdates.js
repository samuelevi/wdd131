function displayCurrentYear() {
    const currentDate = new Date();
    
    const currentYear = currentDate.getFullYear();
    
    const yearElement = document.getElementById("currentyear");
    
    yearElement.textContent = currentYear;
}

function displayLastModified() {
    const lastModifiedDate = document.lastModified;
    
    const lastModifiedElement = document.getElementById("lastModified");
    
    lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate}`;
}

displayCurrentYear();

displayLastModified();
