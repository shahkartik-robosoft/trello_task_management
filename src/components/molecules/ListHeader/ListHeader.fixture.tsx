import * as React from "react";
import ListHeader from "./ListHeader";
import './ListHeader.scss';
import {StoreProvider} from "../../../redux/store";

const ListHeaderCosmos = () => {
    return (
        <StoreProvider>
            <div>
                <ListHeader taskId="1" listLabel="list 1" />
            </div>
        </StoreProvider>
    )
}

export default ListHeaderCosmos;
