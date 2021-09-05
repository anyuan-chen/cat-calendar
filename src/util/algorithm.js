const schedule = (habits, tasks) => {
  //we will divide the day into 15 minute blocks lMFAO

  let schedule = [];

  for (let i = 0; i < 24; i++) {
    schedule.push("");
  }
  console.log(tasks);
  for (const task of tasks) {
    console.log(task);
    let parts = task.startTime.split(":");
    let taskStart = parseInt(parts[0]);

    let endParts = task.endTime.split(":");
    let taskEnd = parseInt(endParts[0]);

    for (let i = taskStart; i < taskEnd; i++) {
      schedule[i] = task.task;
    }
  }

  //look if ur reading this logic wash ur eyes
  //cuz ur about to just straight up not have a good time ngl

  for (const habit of habits) {
    while (true) {
      let decision = Math.floor(Math.random() * 12 + 8);
      if (schedule[decision] === "") {
        schedule[decision] = habit.name;
        break;
      }
    }
  }

  return schedule;
};

// const habits = [
//   { name: "water" },
//   { name: "exercise" },
//   { name: "meditation" },
// ];

// const tasks = [
//   { task: "ski", startTime: "9:00", endTime: "11:00" },
//   { task: "eat", startTime: "11:15", endTime: "11:45" },
// ];

// console.log(schedule(habits, tasks));

module.exports = schedule;
