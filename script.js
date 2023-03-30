const slider = document.getElementById("range");
const output = document.getElementById("value");
output.innerHTML = slider.value;
const workoutType = document.getElementById("workout-type")
const strengths = document.getElementById("strengths")
const weakness = document.getElementById("weaknesses")

const workoutResults = document.getElementById("workout-results")
const strengthResults = document.getElementById("strength-results")
const weaknessResults = document.getElementById("weakness-results")
const durationResults = document.getElementById("duration-results");

slider.oninput = function() {
  output.innerHTML = this.value;
}

function readData() {
  let workoutValue = workoutType.value;
  workoutResults.textContent = `Workout you've chosen: ${workoutValue}`;

  let strengthValue = strengths.value;
  strengthResults.textContent = `Your workout strength: ${strengthValue}`;

  let weaknessValue = weakness.value;
  weaknessResults.textContent = `Your workout weakness: ${weaknessValue}`;

  let durationValue = output.innerHTML;
  durationResults.textContent = `Length of your workout: ${durationValue} minutes`;

  /*
  slider.style.display = "none";
  workoutType.style.display = "none";
  strengths.style.display = "none";
  weakness.style.display = "none";
  */
}

