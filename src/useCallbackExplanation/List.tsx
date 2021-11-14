import React, { useEffect, useState } from "react";

const List = ({ getNumbers }: any) => {
  return (
    <div>
      <button onClick={() => getNumbers(1)}>get numbers</button>
      list
    </div>
  );
};

export default List;
