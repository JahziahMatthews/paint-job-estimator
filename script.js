function calculatePaintJob() {
  const wallHeight = parseFloat(document.getElementById("wallHeight").value);
  const wallWidth = parseFloat(document.getElementById("wallWidth").value);
  const numWalls = parseInt(document.getElementById("numWalls").value);

  const doorHeight = parseFloat(document.getElementById("doorHeight").value);
  const doorWidth = parseFloat(document.getElementById("doorWidth").value);
  const numDoors = parseInt(document.getElementById("numDoors").value);

  const windowHeight = parseFloat(document.getElementById("windowHeight").value);
  const windowWidth = parseFloat(document.getElementById("windowWidth").value);
  const numWindows = parseInt(document.getElementById("numWindows").value);

  const paintPrice = parseFloat(document.getElementById("paintPrice").value);

  if (
    isNaN(wallHeight) || isNaN(wallWidth) || isNaN(numWalls) ||
    isNaN(doorHeight) || isNaN(doorWidth) || isNaN(numDoors) ||
    isNaN(windowHeight) || isNaN(windowWidth) || isNaN(numWindows) ||
    isNaN(paintPrice)
  ) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  const SQFT_PER_GALLON = 300;
  const HOURS_PER_GALLON = 8;
  const LABOR_RATE = 20;

  const wallArea = wallHeight * wallWidth * numWalls;
  const doorArea = doorHeight * doorWidth * numDoors;
  const windowArea = windowHeight * windowWidth * numWindows;
  const paintArea = wallArea - (doorArea + windowArea);

  const gallonsRequired = Math.ceil(paintArea / SQFT_PER_GALLON);
  const laborHours = gallonsRequired * HOURS_PER_GALLON;
  const paintCost = gallonsRequired * paintPrice;
  const laborCost = laborHours * LABOR_RATE;
  const totalCost = paintCost + laborCost;


  document.getElementById("results").classList.remove("hidden");
  document.getElementById("wallArea").textContent = `Square feet walls: ${wallArea.toFixed(1)}`;
  document.getElementById("doorArea").textContent = `Square feet doors: ${doorArea.toFixed(1)}`;
  document.getElementById("windowArea").textContent = `Square feet windows: ${windowArea.toFixed(1)}`;
  document.getElementById("paintArea").textContent = `Area to be painted: ${paintArea.toFixed(1)} sq ft`;
  document.getElementById("gallons").textContent = `Gallons of paint required: ${gallonsRequired}`;
  document.getElementById("hours").textContent = `Hours of labor required: ${laborHours}`;
  document.getElementById("paintCost").textContent = `Cost of paint: $${paintCost.toFixed(2)}`;
  document.getElementById("laborCost").textContent = `Labor charges: $${laborCost.toFixed(2)}`;
  document.getElementById("totalCost").textContent = `Total cost of paint job: $${totalCost.toFixed(2)}`;
}