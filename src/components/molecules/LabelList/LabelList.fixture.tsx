import * as React from "react";
import LabelList from "./LabelList";
import {StoreProvider} from "../../../redux/store";

const LabelListCosmos = () => {
    return (
        <StoreProvider>
            <div>
                <LabelList taskId="1" textLabel="To Do" />
            </div>
        </StoreProvider>
        )
}

export default LabelListCosmos;
