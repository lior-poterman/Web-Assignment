
 
const reviewBox = document.createElement("div");
const reviewName = document.createElement("h3");
const reviewContent = document.createElement("p");

reviewBox.append(reviewName);
reviewBox.append(reviewContent);

reviewName.innerHTML = "Nathan";
reviewContent.innerHTML =
  "I have no doubt that this book damaged me, psychologically, as a small child. It is one of the earliest books I vividly remember reading aloud to myself, and I remember the first time my mother read it to me before she put me to bed. Here's the gist of the plot: A little boy named Max dresses up in a wolf costume, plays with a hammer, chases his dog with a fork, then threatens to cannibalize his mother.";
document.body.appendChild(reviewBox);

function toggleReview() {
  if (reviewBox.style.display == "none") {
    return (reviewBox.style.display = "block");
  }
  reviewBox.style.display = "none";
}
