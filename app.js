const calculate = () => {
  let games, scores, array, total, average, output;
  games = document.getElementById("games").value;
  scores = document.getElementById("scores").value;
  array = scores.split(",");
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + parseInt(array[i]);
  }
  try {
    if (games == 0) {
      throw "please enter valid";
    } else if (games == "") {
      throw "please enter valid";
    } else if (isNaN(games)) {
      throw "please enter valid";
    }
    average = total / games;
    output = "the average is " + average;
    document.getElementById("result").innerHTML = output;
  } catch (error) {
    document.getElementById("result").innerHTML = error;
  }
};
