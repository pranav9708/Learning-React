/**React using JS */
// let reactImage=React.createElement('img',{src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactImage);

/**React using JSX */
let head=(
            <>
                <h1>About React</h1>
                <ul>
                    <li>React makes it easy to create complex ui</li>
                    <li>React helps improve ux because only part that needs rerendering is changed after comparing with pre-updated VDOM</li>
                    <li>React follows one-way data binding which gives more control to user</li>
                    <li>React is composable(split into components)</li>
                </ul>
            </>
        )
ReactDOM.createRoot(document.getElementById("root")).render(head);
