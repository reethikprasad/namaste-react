const parent =React.createElement("div",
{id: "parent"},
[
    React.createElement("div",{id: "child"},

[
    React.createElement("h1",{},"Hello from H1"),React.createElement("h2",{},"Hello from H2")
]

),
React.createElement("div",{id: "child2"},

[
    React.createElement("h1",{},"Hello from H1"),React.createElement("h2",{},"Hello from H2")
]

)
])

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello world from React");

    console.log(parent);

    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);