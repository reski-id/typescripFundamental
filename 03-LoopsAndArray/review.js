var review = [1, 2, 3, 4, 5, 6, 7, 8];
var total = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
var average = total / review.length;
console.log("Review Average", average);
