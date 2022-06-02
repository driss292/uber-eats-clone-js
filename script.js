const listings = document.querySelectorAll(".listings");

// Fonction Slider

const handleSlider = (listing) => {
  const listingsGrid = listing.querySelectorAll(".listings-grid")[0];
  const arrowLeft = listing.querySelectorAll(".left")[0];
  const arrowRight = listing.querySelectorAll(".right")[0];

  if (!arrowLeft || !arrowRight || !listingsGrid) {
    return;
  }

  arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    handleClassSwitch("right");
    listingsGrid.scrollTo({
      left: listingsGrid.offsetWidth,
      behavior: "smooth",
    });
  });
  arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    handleClassSwitch("left");

    listingsGrid.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  });

  const handleClassSwitch = (direction) => {
    if (direction === "right") {
      arrowRight.classList.remove("darker");
      arrowLeft.classList.add("darker");
    } else if (direction === "left") {
      arrowLeft.classList.remove("darker");
      arrowRight.classList.add("darker");
    }
  };
};

// Je boucle à travers listings

listings.forEach((listing) => handleSlider(listing));
