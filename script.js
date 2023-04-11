const slider = document.getElementById("range");
const output = document.getElementById("value");
output.innerHTML = slider.value;
const workoutType = document.getElementById("workout-type")
const strengths = document.getElementById("strengths")
const weakness = document.getElementById("weaknesses")

const workoutLabel = document.getElementById("workout-label");
const durationLabel = document.getElementById("duration-label");
const strengthLabel = document.getElementById("strength-label");
const weaknessLabel = document.getElementById("weakness-label");
const submitButton = document.getElementById("submit");

const workoutResults = document.getElementById("workout-results")
const strengthResults = document.getElementById("strength-results")
const weaknessResults = document.getElementById("weakness-results")
const durationResults = document.getElementById("duration-results");

const firstWeakness = document.getElementById("firstWeakness");
const firstRest = document.getElementById("firstRest");
const secondWeakness = document.getElementById("secondWeakness");
const secondRest = document.getElementById("secondRest");
const firstStrength = document.getElementById("firstStrength");
const thirdRest = document.getElementById("thirdRest");
const thirdWeakness = document.getElementById("thirdWeakness");
const fourthRest = document.getElementById("fourthRest");
const secondStrength = document.getElementById("secondStrength");
const cooldown = document.getElementById("cooldown");
const howManyTimes = document.getElementById("howManyTimes");

// Legs, Arms, Core, Chest, Forearms/Shoulders
let weightTrainingExercises = [
  ['Goblet Squat','Dumbbell Clean','Farmers Walk','Step Ups'],
  ['Bicep Curl','Arnold Press','Zottman Curl','Cross-Body Hammer Curl'],
  ['Flat Dumbbell Flye','Bent-Over Row','One-Arm Swing','Reverse Dumbbell Lunge'],
  ['Dumbbell Uppercut','Single Dumbbell Shoulder Raise','Hollow Body Skullcrushers','Single-Leg Romanian Deadlift'],
  ['Renegade Row','Dumbbell Bench Press','Dumbbell Shoulder Press','Dumbbell Spider Curl']
] 
let cardio = [
  ['Froggy Jumps','Squat Jumps','Toe Taps','Long Jumps'],
  ['Jump Ropes', 'Burpees', 'Jumping Jacks', 'Resistance Band Lateral Pulls'],
  ['Mountain Climbers','Plyometric Jumping Jacks','Bear Crawl'],
  ['Punches','Stair Climb','Push-ups','Short Sprint'],
  ['Shoulder Raises','Arm Circles','Lateral Cable Raises','Military Push-ups']
]
let flexibilityTrainingExercise = [
  ['Seated Hamstring', 'Lying Quad Stretch', 'Calf Stretch', 'Standing Quad Stretch'],
  ['Tricep Stretch', 'Childs Pose', 'Long Arm Stretches', 'Standing Arm Swings'],
  ['Lunges', 'Butterfly Stretch', 'Hip Circles', 'Side Bends'],
  ['Chest Fly', 'Trunk Lift', 'Chin to Chest Stretch', 'Knees to Chest'],
  ['Hip Crossover', 'Gluetal Stretch','Shoulder Stretch', 'Shoulder CARS']
]

slider.oninput = function() {
  output.innerHTML = this.value;
}

function readData() {
  if(strengths.value==weakness.value){
    firstWeakness.textContent = `YOUR STRENGTHS AND WEAKNESSES ARE THE SAME!! TRY AGAIN!!!!!!!`;
  }
  else{
    let workoutValue = workoutType.value;
    workoutResults.textContent = `Workout you've chosen: ${workoutValue}`;
    //workoutType.style.visibility = "hidden";
    //workoutLabel.style.visibility = "hidden";

    let strengthValue = strengths.value;
    strengthResults.textContent = `Your workout strength: ${strengthValue}`;
    //strengths.style.visibility = "hidden";
    //strengthLabel.style.visibility = "hidden";

    let weaknessValue = weakness.value;
    weaknessResults.textContent = `Your workout weakness: ${weaknessValue}`;
    //weakness.style.visibility = "hidden";
    //weaknessLabel.style.visibility = "hidden";

    let durationValue = output.innerHTML;
    durationResults.textContent = `Length of your workout: ${durationValue} minutes`;
    //output.style.visibility = "hidden";
    //slider.style.visibility = "hidden";
    //durationLabel.style.visibility = "hidden";

    submitButton.style.visibility = "hidden";

    if(strengthValue != weaknessValue) {
      if(workoutValue=='Weight Training') {
        if(weaknessValue == "Legs") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(weightTrainingExercises, 0)} (30s)`}
        if(weaknessValue == "Arms") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(weightTrainingExercises, 1)} (30s)`}
        if(weaknessValue == "Core") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(weightTrainingExercises, 2)}(30s)`}
        if(weaknessValue == "Chest") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(weightTrainingExercises, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(weightTrainingExercises, 4)} (30s)`}

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(weightTrainingExercises, 0)}(30s)`}
        if(weaknessValue == "Arms") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(weightTrainingExercises, 1)}(30s)`}
        if(weaknessValue == "Core") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(weightTrainingExercises, 2)}(30s)`}
        if(weaknessValue == "Chest") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(weightTrainingExercises, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(weightTrainingExercises, 4)}(30s)`}

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(weightTrainingExercises, 0)} (60s)`}
        if(strengthValue == "Arms") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(weightTrainingExercises, 1)}(60s)`}
        if(strengthValue == "Core") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(weightTrainingExercises, 2)}(60s)`}
        if(strengthValue == "Chest") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(weightTrainingExercises, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(weightTrainingExercises, 4)}(60s)`}

        thirdRest.textContent = 'Rest (5s)';

        if(weaknessValue == "Legs") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(weightTrainingExercises, 0)}(30s)`}
        if(weaknessValue == "Arms") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(weightTrainingExercises, 1)}(30s)`}
        if(weaknessValue == "Core") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(weightTrainingExercises, 2)}(30s)`}
        if(weaknessValue == "Chest") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(weightTrainingExercises, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(weightTrainingExercises, 4)}(30s)`}

        fourthRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(weightTrainingExercises, 0)} (60s)`}
        if(strengthValue == "Arms") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(weightTrainingExercises, 1)}(60s)`}
        if(strengthValue == "Core") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(weightTrainingExercises, 2)}(60s)`}
        if(strengthValue == "Chest") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(weightTrainingExercises, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(weightTrainingExercises, 4)}(60s)`}

        cooldown.textContent = 'Cooldown before we repeat (25s)'

        howManyTimes.textContent = `We are repeating this a total of ${durationValue/5} times`;
      }
      if(workoutValue=='Cardio') {
        if(weaknessValue == "Legs") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(cardio, 0)}(30s)`}
        if(weaknessValue == "Arms") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(cardio, 1)}(30s)`}
        if(weaknessValue == "Core") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(cardio, 2)}(30s)`}
        if(weaknessValue == "Chest") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(cardio, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(cardio, 4)}(30s)`}

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(cardio, 0)}(30s)`}
        if(weaknessValue == "Arms") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(cardio, 1)}(30s)`}
        if(weaknessValue == "Core") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(cardio, 2)}(30s)`}
        if(weaknessValue == "Chest") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(cardio, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(cardio, 4)}(30s)`}

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(cardio, 0)}(60s)`}
        if(strengthValue == "Arms") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(cardio, 1)}(60s)`}
        if(strengthValue == "Core") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(cardio, 2)}(60s)`}
        if(strengthValue == "Chest") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(cardio, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(cardio, 4)}(60s)`}

        thirdRest.textContent = 'Rest (10s)'

        if(weaknessValue == "Legs") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(cardio, 0)}(30s)`}
        if(weaknessValue == "Arms") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(cardio, 1)}(30s)`}
        if(weaknessValue == "Core") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(cardio, 2)}(30s)`}
        if(weaknessValue == "Chest") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(cardio, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(cardio, 4)}(30s)`}

        fourthRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(cardio, 0)}(60s)`}
        if(strengthValue == "Arms") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(cardio, 1)}(60s)`}
        if(strengthValue == "Core") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(cardio, 2)}(60s)`}
        if(strengthValue == "Chest") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(cardio, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(cardio, 4)}(60s)`}

        cooldown.textContent = 'Cooldown before we repeat (25s)'

        howManyTimes.textContent = `We are repeating this a total of ${durationValue/5} times`;
        
      }
      if(workoutValue=='Flexibility Training') {
        if(weaknessValue == "Legs") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 0)}(30s)`}
        if(weaknessValue == "Arms") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 1)}(30s)`}
        if(weaknessValue == "Core") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 2)}(30s)`}
        if(weaknessValue == "Chest") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {firstWeakness.textContent = `Weakness Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 4)}(30s)`}

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 0)}(30s)`}
        if(weaknessValue == "Arms") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 1)}(30s)`}
        if(weaknessValue == "Core") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 2)}(30s)`}
        if(weaknessValue == "Chest") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {secondWeakness.textContent = `Weakness Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 4)}(30s)`}

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 0)}(60s)`}
        if(strengthValue == "Arms") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 1)}(60s)`}
        if(strengthValue == "Core") {firstStrength.textContent = `Strength Exericse 1: ${getRandomWorkout(flexibilityTrainingExercise, 2)}(60s)`}
        if(strengthValue == "Chest") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {firstStrength.textContent = `Strength Exercise 1: ${getRandomWorkout(flexibilityTrainingExercise, 4)}(60s)`}

        thirdRest.textContent = 'Rest (5s)';
        
        if(weaknessValue == "Legs") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(flexibilityTrainingExercise, 0)}(30s)`}
        if(weaknessValue == "Arms") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(flexibilityTrainingExercise, 1)}(30s)`}
        if(weaknessValue == "Core") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(flexibilityTrainingExercise, 2)}(30s)`}
        if(weaknessValue == "Chest") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(flexibilityTrainingExercise, 3)}(30s)`}
        if(weaknessValue == "Forearms and Shoulders") {thirdWeakness.textContent = `Weakness Exercise 3: ${getRandomWorkout(flexibilityTrainingExercise, 4)}(30s)`}

        fourthRest.textContent = 'Rest (10s)'

        if(strengthValue == "Legs") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 0)}(60s)`}
        if(strengthValue == "Arms") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 1)}(60s)`}
        if(strengthValue == "Core") {secondStrength.textContent = `Strength Exericse 2: ${getRandomWorkout(flexibilityTrainingExercise, 2)}(60s)`}
        if(strengthValue == "Chest") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 3)}(60s)`}
        if(strengthValue == "Forearms and Shoulders") {secondStrength.textContent = `Strength Exercise 2: ${getRandomWorkout(flexibilityTrainingExercise, 4)}(60s)`}

        cooldown.textContent = 'Cooldown before we repeat (25s)'

        howManyTimes.textContent = `We are repeating this a total of ${durationValue/5} times`;

      }
    }
  }
}

function getRandomWorkout(list, index) {
  let possibleExercises = list[index]
  return possibleExercises[Math.floor(Math.random()*possibleExercises.length)]
}
