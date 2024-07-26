// Calculator
let result = document.getElementById("output");
let calc = num => result.value += num;
let ans = () => {
    try {
        result.value = eval(result.value.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-"));
    }
    catch (err) {
        result.value = "syntax error";
    }
};
const clr = () => result.value = "";
const del = () => result.value = result.value.slice(0, -1);

// Greet
const time = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const am_pm = hour >= 12 ? "P.M." : "A.M.";
    const currentHour = hour % 12 || 12;

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const currentTime = `${currentHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${am_pm}`;
    const message = `${greeting} The current time is ${currentTime}`;

    alert(message);
};

// Color
let randomHex = () => {
    const hexChar = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += hexChar[Math.floor(Math.random() * 16)];
    }
    return hex;
};

const theme = () => {
    const color = randomHex();
    document.getElementById("calculator").style.backgroundColor = color;
};