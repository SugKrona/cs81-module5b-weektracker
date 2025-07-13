// Gustavo Corona
// activityTracker.js made July 13, 2025

// *V* Url for GitHub *V
// https://github.com/SugKrona/cs81-module5b-weektracker
const myWeek = [
  {
    day: "Monday",
    activity: "Gym", 
    category: "physical",
    hoursSpent: 1.0,
    enjoyment: 4,
    timeOfDay: "morning"
  },
  {
    day: "Tuesday",
    activity: "Video games", 
    category: "entertainment",
    hoursSpent: 2.0,
    enjoyment: 8,
    timeOfDay: "night"
  },
  {
    day: "Wednesday",
    activity: "Hanging out with friends", 
    category: "social",
    hoursSpent: 3.0,
    enjoyment: 9,
    timeOfDay: "evening"
  },
  {
    day: "Thursday",
    activity: "Reading", 
    category: "leisure",
    hoursSpent: 1.0,
    enjoyment: 7,
    timeOfDay: "night"
  },
  {
    day: "Friday",
    activity: "Watch Youtube", 
    category: "entertainment",
    hoursSpent: 2.5,
    enjoyment: 8,
    timeOfDay: "evening"
  },
  {
    day: "Saturday",
    activity: "Homework", 
    category: "learning",
    hoursSpent: 2.0,
    enjoyment: 6,
    timeOfDay: "afternoon"
  },
  {
    day: "Sunday",
    activity: "Homework", 
    category: "learning",
    hoursSpent: 5.5,
    enjoyment: 5,
    timeOfDay: "afternoon"
  }
];

// PREDICTIONS:
// * Which activity will have the highest enjoyment? *
//      -Hanging out with friends will have the highest enjoyment.

// * What category will dominate your week? *
//      - I expect 'learning' or 'entertainment' to be the most frequent category.

// * What patterns might exist around time of day? * 
//      - I anticipate 'evening' activities will have the most enjoyment, and 'afternoon' activities will have higher hours spent.

// -----------------------------------------------------------------------------------------------------------------------------

// * Add Functions* 

// Calculates the total hours spent on activities of a specific category.
function totalHoursForCategory(data, categoryName) {
  const filteredActivities = data.filter(entry => entry.category === categoryName);
  return filteredActivities.reduce((total, activity) => total + activity.hoursSpent, 0);
}

// Calculates the average enjoyment score for activities done at a specific time of day
function averageEnjoymentByTime(data, time) {
  const activitiesAtTime = data.filter(entry => entry.timeOfDay === time);
  if (activitiesAtTime.length === 0) {
    return 0;
  }
  const totalEnjoyment = activitiesAtTime.reduce((sum, activity) => sum + activity.enjoyment, 0);
  return totalEnjoyment / activitiesAtTime.length;
}

// Identifies the activity category that appears most frequently.
function mostCommonCategory(data) {
  const categoryCounts = data.reduce((counts, entry) => {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
    return counts;
  }, {});

  let maxCount = 0;
  let commonCategory = '';

  for (const category in categoryCounts) {
    if (categoryCounts[category] > maxCount) {
      maxCount = categoryCounts[category];
      commonCategory = category;
    }
  }
  return commonCategory;
}

// Filters activities based on a given condition.
function filterByCondition(testFn) { 
  return myWeek.filter(testFn);
}

// Displaying Analysis Results
console.log("\n--- Analyzing My Weekly Activities ---");

// Using the analysis functions
console.log("Total hours spent on 'learning' activities:", totalHoursForCategory(myWeek, "learning"));
console.log("Average enjoyment for 'evening' activities:", averageEnjoymentByTime(myWeek, "evening"));
console.log("Most common activity category:", mostCommonCategory(myWeek));

// Using the custom Higher-Order Function
console.log("Activities with high enjoyment (above 8):", filterByCondition(act => act.enjoyment > 8).map(act => act.activity));

