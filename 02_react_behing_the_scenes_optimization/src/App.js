import React, { useStatem, useCallBack } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

/* USECALLBACK HOOK:
Use Callback is a hook that allows us to basically store a function across component executions.
So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
With that one in the same function object is stored so one in the same place in memory
and therefore the comparison does work.

So, to sum up, using wrapping (export default React.memo(DemoOutput)) with components which state changes because of primitives,
will work correctly bcs (false === false, id === id and etc.) , but with reference data type ([1,2,3] === [1,2,3] will be false), so component will be still reexecuted,
thats why in this case we can use useCallBack hook.

React.memo can be usefull in cases when we have a large component tree with a lot of nested childs, that can increse performance.
On the other hand if there no nested components, it can decrease performance.

*/

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallBack(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
