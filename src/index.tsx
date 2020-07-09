import * as React from "react";
import * as ReactDOM from "react-dom";
import { SvgIcon } from '@material-ui/core';
import App from "./App";
import {StoreProvider} from "./redux/store";

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("root"));
