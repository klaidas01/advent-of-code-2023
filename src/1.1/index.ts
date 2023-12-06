import { readFile } from "../utils";

const main = async () => {
  const lines = await readFile("./src/1.1/input.txt");

  let sum = 0;

  for await (const line of lines) {
    const first = [...line].find((x) => !isNaN(Number(x)));
    const last = [...line].findLast((x) => !isNaN(Number(x)));

    sum += Number(`${first}${last}`);
  }

  console.log(sum);
};

main();
