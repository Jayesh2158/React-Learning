import React from "react";
import ReactDOM from "react-dom/client";

//By React
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hey Jayesh! by react 🚀."
);

// By JS fn with jsx
const JsxHeading = () => <h1 className="heading">hey Jayesh! by JsxHeading 🚀.</h1>;

// By JS fn with jsx also with component composition
const HeadingComponent = () => (
    <div className="container">
        <JsxHeading />
        <h1 className="heading">hey Jayesh{7 * 3}! by HeadingComponent 🚀.</h1>
    </div>
);

// Use React.Fragment to remove the singal parent issue in funct component
const HeadingComponent2 = () => (
    <React.Fragment>
        <div className="container">
            <h1 className="heading">hey Jayesh{7 * 3}! by HeadingComponent 🚀. - 1</h1>
        </div>
        <div className="container">
            <h1 className="heading">hey Jayesh{7 * 3}! by HeadingComponent 🚀. - 2</h1>
        </div>
    </React.Fragment>
);

// Use React.Fragment to remove the singal parent issue in funct component - Eg.-2
const HeadingComponent3 = () => (
    <>
        <div className="container">
            <h1 className="heading">hey Jayesh{7 * 3}! by HeadingComponent 🚀. - 3</h1>
        </div>
        <div className="container">
            <h1 className="heading">hey Jayesh{7 * 3}! by HeadingComponent 🚀. - 4</h1>
        </div>
    </>
);

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);

// By JS
// const heading = document.createElement("h1");
// heading.innerHTML = "hey! Jay, by js.";
// const root = document.getElementById("root");
// root.appendChild(heading);
