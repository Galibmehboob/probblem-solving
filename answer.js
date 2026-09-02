// Ques 1

function describeValue(value) {
    return `${typeof value} - ${value ? "truthy" : "falsy"}`;
}
//Ques 2

function getDayType(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("saturday"));