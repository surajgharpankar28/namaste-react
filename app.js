const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello I'm H1 Tag"),
    React.createElement("h2", { id: "heading" }, "Hello I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello I'm H1 Tag"),
    React.createElement("h2", { id: "heading" }, "Hello I'm H2 Tag"),
  ]),
]);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root_div"));

setTimeout(() => {
  root.render(parent);
}, 2000);

console.log(parent);
