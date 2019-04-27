var svg = document.getElementById("theTriangleGrid");

function createTri(id, points){
  let tri = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  tri.setAttribute("id", id);
  /*
  Although the standard allows commas inplace of spaces, your milage may vary and you many need
  one of these.
  Alternative 1:
    let point_string = String(points[0][0]) + "," + String(points[0][1]) + " " +
                       String(points[1][0]) + "," + String(points[1][1]) + " " +
                       String(points[2][0]) + "," + String(points[2][1]);
  
  Since it's only a triangle I think it's worth just writing out the three pairs
  instead of using a loop.
  Alternative 2:
    for (pair of points){
      point_string += String(pair[0]) + "," + String(pair[1]) + " ";
    }
  */
  tri.setAttribute("points", points);
  return tri;
}

function createSquare(centerPointx, centerPointy, size, id, svg){
  const HALF_SIZE = size / 2;
  const TRIS = ["_top", "_bottom", "_left", "_right"]

  let points = [[centerPointx, centerPointy],
                [centerPointx - HALF_SIZE, centerPointy - HALF_SIZE],
                [centerPointx + HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTri(id + TRIS[0], points))

  points = [[centerPointx,centerPointy],
            [centerPointx - HALF_SIZE, centerPointy + HALF_SIZE], 
            [centerPointx + HALF_SIZE, centerPointy + HALF_SIZE]];
  svg.appendChild(createTri(id + TRIS[1], points))

  points = [[centerPointx, centerPointy],
            [centerPointx - HALF_SIZE, centerPointy + HALF_SIZE],
            [centerPointx - HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTri(id + TRIS[2], points))

  points = [[centerPointx, centerPointy],
            [centerPointx + HALF_SIZE, centerPointy + HALF_SIZE],
            [centerPointx + HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTri(id + TRIS[3], points))
}

function createGrid(num_rows, num_cols, square_size) {
  for(let x = 0; x < num_cols; x++) {
    for(let y = 0; y < num_rows; y++) {
      createSquare(x * square_size + square_size, y * square_size + square_size, square_size, "test" + x + "_" + y, svg);
    }
  }
};

createGrid(100, 100, 40);

