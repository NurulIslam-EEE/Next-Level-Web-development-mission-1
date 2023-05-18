"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "new",
    expertise: "javascript",
    experience: 1,
};
const developer = {
    name: "",
    expertise: "typescript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.junior,
};
