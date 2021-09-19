const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

function scoreIsGreaterThan85(usersData) {
  //   let scoreGT85 = [];

  //   usersData.map((user) => {
  //     if (user.scores > 85) {
  //       return scoreGT85.push(user);
  //     }
  //   });

  let scoreGT85 = usersData.filter((user) => user.scores > 85);
  return scoreGT85;
}

console.log(scoreIsGreaterThan85(users));
