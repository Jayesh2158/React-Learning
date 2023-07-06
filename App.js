//By React
const heading = [React.createElement("h1", { id: "heading" }, "hey! Jay, by react."), React.createElement("h2", { id: "heading" }, "hey! Jay, by react.")];
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// By JS
// const heading = document.createElement("h1");
// heading.innerHTML = "hey! Jay, by js.";
// const root = document.getElementById("root");
// root.appendChild(heading);
