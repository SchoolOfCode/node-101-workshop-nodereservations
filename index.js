import collection from "./collection.js";
import chalk from "chalk";

// console.log(myCollection);
function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have a ${chalk.cyan(
        item.name
      )}. Here's what I like about it: ${chalk.green(item.whatILike)}.`
    );
  } else {
    console.log(
      `I have ${chalk.yellow(item.count)} ${chalk.cyan(
        item.name
      )}s. Here's what I like about them: ${chalk.green(item.whatILike)}.`
    );
  }
  //   console.log(item.count);
}
function describeCollection(arr) {
  arr.forEach(describeItem);
}
describeCollection(collection);
