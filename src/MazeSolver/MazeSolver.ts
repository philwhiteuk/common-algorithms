const directions = [
  {x: 0, y: -1}, // top
  {x: 1, y: 0}, // right
  {x: 0, y: 1}, // bottom
  {x: -1, y: 0}, // left
]

function walk(maze: string[], wall: string, current: Point, end: Point, path: Point[], seen: boolean[][]) {
  // base case

  // reached the end
  if(current.x === end.x && current.y === end.y) {
    path.push(current);
    return true;
  }

  // fell off the map
  if(!maze[current.y] || !maze[current.y][current.x]) {
    return false;
  }

  // hit a wall
  if(maze[current.y][current.x] === wall) {
    return false;
  }

  // already been here
  if(seen[current.y][current.x]) {
    return false;
  }

  // pre recursion
  seen[current.y][current.x] = true;
  path.push(current);

  // recursive case
  for(let i = 0; i < directions.length; i++) {
    if(walk(maze, wall, {x: current.x + directions[i].x, y: current.y + directions[i].y}, end, path, seen)) {
      return true;
    }
  }

  // post recursion
  path.pop();
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const path: Point[] = [];
  const seen: boolean[][] = [];

  for(let y = 0; y < maze.length; ++y) {
    for(let x = 0; x < maze[y].length; ++x) {
      seen.push(Array(x).fill(false));
    }
  }

  walk(maze, wall, start, end, path, seen);

  return path;
}
