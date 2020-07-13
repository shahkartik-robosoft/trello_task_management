import * as React from "react";
import ItemsView from "./components/pages/ItemsView/ItemsView";
import CardModal from "./components/CardModal";
import {initState, TrelloContext} from "./context/trelloContext";
import {reducer} from "./context/reducer";


const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
  return (
      <TrelloContext.Provider value={{ state, dispatch}}>
          <React.Fragment>
              <ItemsView/>
              <CardModal />
          </React.Fragment>
      </TrelloContext.Provider>
  );
};

export default App;
