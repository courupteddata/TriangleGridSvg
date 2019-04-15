var svg = document.getElementById("theTriangleGrid");

function createSquare(centerPointx, centerPointy, size, id, svg){
  const half_size = size / 2;

  var top_tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  top_tri.setAttribute("id", id + "_top");
  var points = String(centerPointx) + "," + String(centerPointy) + " " + String(centerPointx - half_size) + "," + String(centerPointy - half_size) + " " + String(centerPointx + half_size) + "," + String(centerPointy - half_size);
  top_tri.setAttribute("points", points);

  svg.appendChild(top_tri);

  var bottom_tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  bottom_tri.setAttribute("id", id + "_bottom");
  var points = String(centerPointx) + "," + String(centerPointy) + " " + String(centerPointx - half_size) + "," + String(centerPointy + half_size) + " " + String(centerPointx + half_size) + "," + String(centerPointy + half_size);
  bottom_tri.setAttribute("points", points);

  svg.appendChild(bottom_tri);

  var left_tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  left_tri.setAttribute("id", id + "_left");
  points = String(centerPointx) + "," + String(centerPointy) + " " + String(centerPointx - half_size) + "," + String(centerPointy + half_size) + " " + String(centerPointx - half_size) + "," + String(centerPointy - half_size);
  left_tri.setAttribute("points", points);

  svg.appendChild(left_tri);


  var right_tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  right_tri.setAttribute("id", id + "_left");
  points = String(centerPointx) + "," + String(centerPointy) + " " + String(centerPointx + half_size) + "," + String(centerPointy + half_size) + " " + String(centerPointx + half_size) + "," + String(centerPointy - half_size);
  right_tri.setAttribute("points", points);

  svg.appendChild(right_tri);
}

function createGrid(num_rows, num_cols, square_size) {
  for(let x = 0; x < num_cols; x++) {
    for(let y= 0; y < num_rows; y++) {
      createSquare(x * square_size + square_size, y * square_size + square_size, square_size, "test" + x + "_" + y, svg);
    }
  }
};

createGrid(100, 100, 40);

