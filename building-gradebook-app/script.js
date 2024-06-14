function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
function studentMsg(totalScores, studentScore) {
    let avgScoreNumber = getAverage(totalScores);
    let gradeLetter = getGrade(studentScore);
    let hasPassed = hasPassingGrade(studentScore);
    if (hasPassed) {
        return "Class average: " + avgScoreNumber + ". Your grade: " + gradeLetter + ". You passed the course.";
    } else {
        return "Class average: " + avgScoreNumber + ". Your grade: " + gradeLetter + ". You failed the course.";
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 88, 12, 77, 57, 33, 67, 38, 97, 89], 78));