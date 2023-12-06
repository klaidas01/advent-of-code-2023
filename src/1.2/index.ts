import minBy from "lodash/minBy";
import { readFile } from "../utils";

const main = async () => {
  const lines = await readFile("./src/1.2/input.txt");

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

  console.log(sum);
};

main();
