import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {IState, ITask} from "./redux/Interface";
import ItemsView from "./components/pages/ItemsView/ItemsView";
import {Actions} from "./redux/enums";

const App: React.FC = () => {
    const state = useSelector((state: IState) => state);
    const dispatch = useDispatch();
    const addTask = (taskName: string) => {
        const item: ITask = {
            listLabel: taskName,
            taskId: taskName.split('').join('_'),
            taskCards: [],
        };
        state.taskList.push(item);
        return dispatch({ type: Actions.ADD_TASK, value: state.taskList });
    }
  return (
      <React.Fragment>
          <ItemsView listItems={state.taskList!} addNewTask={addTask}/>
      </React.Fragment>
  );
};

export default App;
