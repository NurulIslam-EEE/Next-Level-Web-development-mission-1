type NoopDeveloper = {
  name: string;
};
// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

type JuniorDeveloper = NoopDeveloper & {
  expertise: string;
  experience: number;
};
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  // level:"junior"|"mid"|"senior"
  level: Level;
};

const newDeveloper: NoopDeveloper | JuniorDeveloper = {
  name: "new",
  expertise: "javascript",
  experience: 1,
};

const developer: NextLevelDeveloper = {
  name: "",
  expertise: "typescript",
  experience: 2,
  leadershipExperience: 1,
  level: Level.junior,
};


