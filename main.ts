const [word, target, rawCount] = Deno.args;

const count: number = Number(rawCount);

if (
  !word ||
  !target ||
  typeof count !== "number" ||
  !Number.isInteger(count)
) {
  console.error("Usage: deno run main.ts [word] [target] [count]");
  Deno.exit(1);
}

const hike = function* (times: number) {
  let index = 1;
  while (times > index) {
    yield index;
    index++;
  }
  while (index >= 0) {
    yield index;
    index--;
  }
};

for (let times of hike(count)) {
  console.log(
    `${new Array(times).fill(word).join(" ")}${
      times === count ? `  ${target}` : ""
    }`,
  );
}
