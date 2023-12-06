import { readFile } from "../utils";

const solve1 = async () => {
  const lines = await readFile("./src/day1/input.txt");

  let sum = 0;

  for await (const line of lines) {
    const first = [...line].find((x) => !isNaN(Number(x)));
    const last = [...line].findLast((x) => !isNaN(Number(x)));

    sum += Number(`${first}${last}`);
  }

  return sum;
};

const solve2 = async () => {
  const lines = await readFile("./src/day1/input.txt");

  let sum = 0;

  for await (const line of lines) {
    const adjusted = line
      .replaceAll("one", "o1e")
      .replaceAll("two", "t2o")
      .replaceAll("three", "t3e")
      .replaceAll("four", "f4r")
      .replaceAll("five", "f5e")
      .replaceAll("six", "s6x")
      .replaceAll("seven", "s7n")
      .replaceAll("eight", "e8t")
      .replaceAll("nine", "n9e");
    const first = [...adjusted].find((x) => !isNaN(Number(x)));
    const last = [...adjusted].findLast((x) => !isNaN(Number(x)));

    sum += Number(`${first}${last}`);
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
