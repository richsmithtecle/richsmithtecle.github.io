var practicality = new JustGage({
    id: "practicality",
    value: 46,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    title: "Practicality",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryPracticality = new JustGage({
    id: "summary__practicality",
    value: 46,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var resilience = new JustGage({
    id: "resilience",
    value: 27,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    title: "Resilience",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryResilience = new JustGage({
    id: "summary__resilience",
    value: 27,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var SelfControl = new JustGage({
    id: "self-control",
    value: 57,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    title: "Self-Control",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summarySelfControl = new JustGage({
    id: "summary__self-control",
    value: 57,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,

});
var selfStarting = new JustGage({
    id: "drive",
    value: 71,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    title: "Drive",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summarySelfStarting = new JustGage({
    id: "summary__drive",
    value: 71,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var interpersonal = new JustGage({
    id: "interpersonal",
    value: 43,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    title: "Interpersonal Style",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryInterpersonal = new JustGage({
    id: "summary__interpersonal",
    value: 43,
    min: 0,
    max: 100,
    label: "Target 60 - 80",
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});


// Derailers:
// 1. Pessimism
// 2. Overprep
// 3. Critical
// 4. Expert
var pessimism = new JustGage({
    id: "pessimism",
    value: 42,
    min: 0,
    max: 100,
    title: "Pessimism",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var summaryPessimism = new JustGage({
    id: "summary__pessimism",
    value: 42,
    min: 0,
    max: 100,
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var overprep = new JustGage({
    id: "overprep",
    value: 70,
    min: 0,
    max: 100,
    title: "Overprep",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var summaryOverprep = new JustGage({
    id: "summary__overprep",
    value: 70,
    min: 0,
    max: 100,
    sshadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var critical = new JustGage({
    id: "critical",
    value: 40,
    min: 0,
    max: 100,
    title: "Critical",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var summaryCritical = new JustGage({
    id: "summary__critical",
    value: 40,
    min: 0,
    max: 100,
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var expert = new JustGage({
    id: "expert",
    value: 92,
    min: 0,
    max: 100,
    title: "Expert",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});
var summaryExpert = new JustGage({
    id: "summary__expert",
    value: 92,
    min: 0,
    max: 100,
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FF3333", "#FF0000", "#B30000"],
    gaugeWidthScale: .45,
});



// Technical:
// 1. Math
// 2. Verbal
// 2. Reasoning
var math = new JustGage({
    id: "math",
    value: 50,
    min: 0,
    max: 100,
    title: "Math",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryMath = new JustGage({
    id: "summary__math",
    value: 50,
    min: 0,
    max: 100,
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var verbal = new JustGage({
    id: "verbal",
    value: 66,
    min: 0,
    max: 100,
    title: "Verbal",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryVerbal = new JustGage({
    id: "summary__verbal",
    value: 66,
    min: 0,
    max: 100,
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var reasoning = new JustGage({
    id: "reasoning",
    value: 10,
    min: 0,
    max: 100,
    title: "Reasoning",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryReasoning = new JustGage({
    id: "summary__reasoning",
    value: 10,
    min: 0,
    max: 100,
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});

// Role Alignemnt
var roleAlignment = new JustGage({
    id: "roleAlignment",
    value: 62,
    min: 0,
    max: 100,
    title: "Role Alignment",
    titleFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});
var summaryRoleAlignment = new JustGage({
    id: "summary__roleAlignment",
    value: 62,
    min: 0,
    max: 100,
    labelFontColor: "#000000",
    shadowOpacity: 0.5,
    shadowSize: 7,
    shadowVerticalOffset: 0,
    levelColors: ["#FB8301", "#FB8301", "#FB8301"],
    gaugeWidthScale: .45,
});


// All scales are 0 to 100.

// var f = new JustGage({
//     id: "g12",
//     value: getRandomInt(0, 100),
//     min: 0,
//     max: 100,
//     title: "Custom Shadow",
//     label: "",
//     shadowOpacity: 1,
//     shadowSize: 0,
//     shadowVerticalOffset: 10
// });