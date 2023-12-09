import { readFile } from "../utils";

type BallSet = { red?: number; green?: number; blue?: number };

const parseData = (data: string) =>
  data.split("; ").map((x) =>
    x.split(", ").reduce<BallSet>((acc, y) => {
      const [number, color] = y.split(" ");
      return { ...acc, [color]: Number(number) };
    }, {})
  );

const solve1 = async () => {
  const lines = await readFile("./src/day2/test-input.txt");

  let sum = 0;

  const restrictionMap = {
    red: 12,
    green: 13,
    blue: 14,
  };

  for await (const line of lines) {
    const [gameId, data] = line.split(": ");
    const id = Number(gameId.split(" ")[1]);

    const sets = parseData(data);

    if (
      sets.every(
        (set) =>
          (set.red ?? 0) <= restrictionMap.red &&
          (set.green ?? 0) <= restrictionMap.green &&
          (set.blue ?? 0) <= restrictionMap.blue
      )
    ) {
      sum += id;
    }
  }

  return sum;
};

const solve2 = async () => {
  const lines = await readFile("./src/day2/input.txt");

  let sum = 0;
  for await (const line of lines) {
    const [_gameId, data] = line.split(": ");

    const sets = parseData(data);

    const red = Math.max(...sets.map((set) => set.red ?? 0));
    const blue = Math.max(...sets.map((set) => set.blue ?? 0));
    const green = Math.max(...sets.map((set) => set.green ?? 0));

    sum += red * blue * green;
  }

  return sum;
};

const main = async () => {
  const res1 = await solve1();
  const res2 = await solve2();

  console.log(`Part 1: ${res1}`);
  console.log(`Part 2: ${res2}`);
};

main();
