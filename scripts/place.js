function calculateWindChill(temp, windSpeed, unit = 'metric') {
    if (unit === 'metric') {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
    } else {
        return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
    }
}

function displayWindChill() {
    const tempCelsius = 28;   
    const tempFahrenheit = 82;   
    const windSpeedKmh = 12;     
    const windSpeedMph = 7.5;    

  
    const metricConditionsMet = tempCelsius <= 10 && windSpeedKmh > 4.8;
    
    const imperialConditionsMet = tempFahrenheit <= 50 && windSpeedMph > 3;

    const windChillElement = document.getElementById('windChillDisplay');


    if (metricConditionsMet) {
        const windChillC = calculateWindChill(tempCelsius, windSpeedKmh, 'metric');
        windChillElement.textContent = `${windChillC}°C`;
    } else if (imperialConditionsMet) {
        const windChillF = calculateWindChill(tempFahrenheit, windSpeedMph, 'imperial');
        windChillElement.textContent = `${windChillF}°F`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

function displayCurrentYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

function displayLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}


document.addEventListener('DOMContentLoaded', function() {
  
    displayCurrentYear();
    
    displayLastModifiedDate();
    
    displayWindChill();
    
    console.log('Page initialized successfully');
    console.log('Delta State, Nigeria - Place Assignment');
});


console.log('Wind Chill Calculator Loaded');
console.log('Metric conditions: Temperature <= 10°C AND Wind speed > 4.8 km/h');
console.log('Imperial conditions: Temperature <= 50°F AND Wind speed > 3 mph');
console.log('Note: Delta State has a warm tropical climate, so wind chill is typically N/A');
