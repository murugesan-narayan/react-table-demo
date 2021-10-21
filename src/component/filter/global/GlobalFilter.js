import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ filter, setFilter }) {
  //console.log(filter);
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
}

export default GlobalFilter;
