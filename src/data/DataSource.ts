import { Media, MediaType } from "../model/Media";

const Chance = require("chance");
const chance = new Chance();
const Data = generateData();

function generateData() {
  let data: Media[] = [];
  for (let index = 0; index < 42; index++) {
    data.push({
      name: chance.sentence({ words: 8 }),
      description: chance.sentence({ words: 25 }),
      year: chance.year(),
      tags: Array.from({ length: chance.integer({ min: 1, max: 8 }) }, () =>
        chance.word()
      ),
      resource: {
        url: "#",
        type: MediaType.Image,
        size: chance.integer({ min: 1500, max: 5000 }),
      },
    });
  }
  return data;
}

export default Data;
