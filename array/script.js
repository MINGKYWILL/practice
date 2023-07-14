const checkHeight = function (group1, group2) {
  const checkHeightCorrected = group1.slice();
  checkHeightCorrected.splice(0, 1);
  checkHeightCorrected.splice(-1);
  console.log(checkHeightCorrected);

  const heights = checkHeightCorrected.concat(group2);
  console.log(heights);

  heights.forEach(function (height, i) {
    if (height >= 140) {
      console.log(
        `Number ${i + 1}'s height is ${height}cm. Yes! Enjoy your ride🎢`
      );
    } else {
      console.log(
        `Number ${i + 1}'s height is ${height}cm. Sorry.. Not able to ride😢`
      );
    }
  });
};

checkHeight([10, 180, 165, 159, 73], [100, 138, 146, 190, 185]);
checkHeight([90, 124, 145, 178, 53], [160, 155, 162, 103, 149]);
