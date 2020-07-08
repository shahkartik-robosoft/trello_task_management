import * as React from "react";
import {trelloContext, TrelloProvider} from './context/trelloContext';
import ItemsView from "./components/templates/ItemsView/ItemsView";

const App = () => {
    const { taskList, addTask } = React.useContext(trelloContext);
    console.log('addTask  ', addTask);
  return (
      <React.Fragment>
          <TrelloProvider>
              <ItemsView listItems={taskList!} addNewTask={(e)=>addTask!(e)} />
          </TrelloProvider>
      </React.Fragment>
  );
};

export default App;
