var globalSVG = document.getElementById("theTriangleGrid");

function createTriangle(id, points){
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
};

function createSquare(svg, centerPointx, centerPointy, size, id, svg){
  const HALF_SIZE = size / 2;
  const TRIS = ["_top", "_bottom", "_left", "_right"]

  let points = [[centerPointx, centerPointy],
                [centerPointx - HALF_SIZE, centerPointy - HALF_SIZE],
                [centerPointx + HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTriangle(id + TRIS[0], points))

  points = [[centerPointx,centerPointy],
            [centerPointx - HALF_SIZE, centerPointy + HALF_SIZE], 
            [centerPointx + HALF_SIZE, centerPointy + HALF_SIZE]];
  svg.appendChild(createTriangle(id + TRIS[1], points))

  points = [[centerPointx, centerPointy],
            [centerPointx - HALF_SIZE, centerPointy + HALF_SIZE],
            [centerPointx - HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTriangle(id + TRIS[2], points))

  points = [[centerPointx, centerPointy],
            [centerPointx + HALF_SIZE, centerPointy + HALF_SIZE],
            [centerPointx + HALF_SIZE, centerPointy - HALF_SIZE]];
  svg.appendChild(createTriangle(id + TRIS[3], points))
};

function createGrid(svg, num_rows, num_cols, square_size) {
  for(let x = 0; x < num_cols; x++) {
    for(let y = 0; y < num_rows; y++) {
      createSquare(svg, 
        x * square_size + square_size, 
        y * square_size + square_size, 
        square_size, 
        "test_" + x + "_" + y, svg);
    }
  }
};

const WIDTH = 1000; //In Pixels
const HEIGHT = 700; //In Pixels
const SQUARE_SIZE = 40; //In Pixels

const HALF_SQUARE_SIZE = 0.5 * SQUARE_SIZE;

//Make sure that the width and height are a multiple of the square size.
const ADJUSTED_WIDTH = WIDTH <= 0 ? SQUARE_SIZE : SQUARE_SIZE * Math.ceil(WIDTH / SQUARE_SIZE);
const ADJUSTED_HEIGHT = HEIGHT <= 0 ? SQUARE_SIZE : SQUARE_SIZE * Math.ceil(HEIGHT / SQUARE_SIZE);

const NUM_COLS = ADJUSTED_WIDTH / SQUARE_SIZE;
const NUM_ROWS = ADJUSTED_HEIGHT / SQUARE_SIZE;

globalSVG.setAttribute("height", ADJUSTED_HEIGHT + HALF_SQUARE_SIZE);
globalSVG.setAttribute("width", ADJUSTED_WIDTH + HALF_SQUARE_SIZE);

createGrid(globalSVG, NUM_ROWS, NUM_COLS, SQUARE_SIZE);

