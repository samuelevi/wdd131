document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const gallery = document.querySelector(".gallery");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      hamburger.textContent = "✕";
    } else {
      hamburger.textContent = "☰";
    }
  });

  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      hamburger.textContent = "☰";
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      hamburger.contains(event.target) || navMenu.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.textContent = "☰";
    }
  });

  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  const lastModifiedSpan = document.getElementById("last-modified");
  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  lastModifiedSpan.textContent = formattedDate;

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Rome Italy",
      location: "Rome Italy",
      dedicated: "2025, May, 25",
      area: 17362,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59729-thumb.jpg",
    },
    {
      templeName: "Anchorage Alaska",
      location: "Anchorage, Alaska",
      dedicated: "1999, January, 10",
      area: 11937,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-57454.jpg",
    },
    {
      templeName: "Alabang Philippines",
      location: "Alabang Philippines",
      dedicated: "2026, January, 18",
      area: 35998,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg",
    },
  ];

  function createTempleCard(temple) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  }

  function displayTemples(filteredTemples) {
    gallery.innerHTML = "";
    filteredTemples.forEach(createTempleCard);
  }

  function filterTemples(criteria) {
    let filtered = [];
    const currentYear = new Date().getFullYear();

    switch (criteria) {
      case "old":
        filtered = temples.filter((temple) => {
          const dedicatedYear = new Date(temple.dedicated).getFullYear();
          return dedicatedYear < 1900;
        });
        break;
      case "new":
        filtered = temples.filter((temple) => {
          const dedicatedYear = new Date(temple.dedicated).getFullYear();
          return dedicatedYear > 2000;
        });
        break;
      case "large":
        filtered = temples.filter((temple) => temple.area > 90000);
        break;
      case "small":
        filtered = temples.filter((temple) => temple.area < 10000);
        break;
      case "home":
      default:
        filtered = temples;
        break;
    }
    displayTemples(filtered);
  }

  displayTemples(temples);

  document
    .getElementById("nav-menu")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        const filterType = event.target.getAttribute("href").substring(1);
        filterTemples(filterType);
      }
    });
});
