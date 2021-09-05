const schedule = (habits, tasks) => {
  //we will divide the day into 15 minute blocks lMFAO

  let schedule = [];

  for (let i = 0; i < 96; i++) {
    schedule.push("");
  }
  console.log(tasks);
  for (const task of tasks) {
    console.log(task);
    let parts = task.startTime.split(":");
    let taskStart = parseInt(parts[0]) * 4;
    if (parts[1] === "15") {
      taskStart++;
    } else if (parts[1] === "30") {
      taskStart += 2;
    } else if (parts[1] === "45") {
      taskStart += 3;
    }

    let endParts = task.endTime.split(":");
    let taskEnd = parseInt(endParts[0]) * 4;
    if (endParts[1] === "15") {
      taskEnd++;
    } else if (endParts[1] === "30") {
      taskEnd += 2;
    } else if (endParts[1] === "45") {
      taskEnd += 3;
    }

    for (let i = taskStart; i < taskEnd; i++) {
      schedule[i] = task.task;
    }
  }

  //look if ur reading this logic wash ur eyes
  //cuz ur about to just straight up not have a good time ngl

  for (const habit of habits) {
    for (let i = 32; i < 70; i++) {
      let decision = Math.random();
      if (schedule[i] === "" && decision > 0.5) {   
        schedule[i] = habit.name;
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
