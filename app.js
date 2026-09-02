
//   const header = document.createElement("h1");
//         header.innerHTML = "Hello, tagss";
//         header.id = "heading";
//         root.appendChild(header);
//         console.log("Hello, World!");

    const element = React.createElement("h1", { id: "heading" }, "Hello, Reacts");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
