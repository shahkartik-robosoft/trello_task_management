import * as React from "react";

import Text from "./Text";

const TextCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text textLabel="To Do" color="black" />
      <Text textLabel="Doing" color="black" />
      <Text textLabel="Add a card"  color="gray" />
      <Text textLabel="Add another card" color="gray" />
      <Text textLabel="Add another list" fontSize="lg" color="white" />
    </div>
  );
};

export default TextCosmos;
