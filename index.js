import collection from "./collection.js";
import chalk from "chalk";

// console.log(myCollection);
function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${
        item.whatILike
      }.`
    );
  } else {
    console.log(
      `I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}.`
    );
  }
  console.log(item.count);
}
function describeCollection(arr) {
  arr.forEach(describeItem);
}
describeCollection(collection);
