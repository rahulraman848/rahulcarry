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

const test = document.getElementById("test");
const test2 = document.getElementById("test2");

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
    test.textContent = `YOUR STRENGTHS AND WEAKNESSES ARE THE SAME!! TRY AGAIN!!!!!!!`;
  }
  else{
    let workoutValue = workoutType.value;
    workoutResults.textContent = `Workout you've chosen: ${workoutValue}`;

    let strengthValue = strengths.value;
    strengthResults.textContent = `Your workout strength: ${strengthValue}`;

    let weaknessValue = weakness.value;
    weaknessResults.textContent = `Your workout weakness: ${weaknessValue}`;

    let durationValue = output.innerHTML;
    durationResults.textContent = `Length of your workout: ${durationValue} minutes`;

    if(strengthValue != weaknessValue) {
      if(workoutValue=='Weight Training') {
        if(weaknessValue == "Legs") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(weightTrainingExercises, 0)}`}
        if(weaknessValue == "Arms") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(weightTrainingExercises, 1)}`}
        if(weaknessValue == "Core") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(weightTrainingExercises, 2)}`}
        if(weaknessValue == "Chest") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(weightTrainingExercises, 3)}`}
        if(weaknessValue == "Forearms and Shoulders") {test.textContent = `Weakness Exercise: ${getRandomWorkout(weightTrainingExercises, 4)}`}
      }
      if(workoutValue=='Cardio') {
        if(weaknessValue == "Legs") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(cardio, 0)}`}
        if(weaknessValue == "Arms") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(cardio, 1)}`}
        if(weaknessValue == "Core") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(cardio, 2)}`}
        if(weaknessValue == "Chest") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(cardio, 3)}`}
        if(weaknessValue == "Forearms and Shoulders") {test.textContent = `Weakness Exercise: ${getRandomWorkout(cardio, 4)}`}
      }
      if(workoutValue=='Flexibility Training') {
        if(weaknessValue == "Legs") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(flexibilityTrainingExercise, 0)}`}
        if(weaknessValue == "Arms") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(flexibilityTrainingExercise, 1)}`}
        if(weaknessValue == "Core") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(flexibilityTrainingExercise, 2)}`}
        if(weaknessValue == "Chest") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(flexibilityTrainingExercise, 3)}`}
        if(weaknessValue == "Forearms and Shoulders") {test.textContent = `Random Weakness Exercise: ${getRandomWorkout(flexibilityTrainingExercise, 4)}`}
      }
    }
  }
}

function getRandomWorkout(list, index) {
  let possibleExercises = list[index]
  return possibleExercises[Math.floor(Math.random()*possibleExercises.length)]
}
