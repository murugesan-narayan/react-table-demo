import React from "react";
//import logo from "./logo.svg";
import "./App.css";
// import ColumnHidingTable from "./component/column_hiding/ColumnHidingTable";
import StickyColumnTable from "./component/sticky_column/StickyColumnTable";
// import ColumnOrderTable from "./component/column_order/ColumnOrderTable";
// import RowSelectionTable from "./component/row_selection/RowSelectionTable";
// import PaginationTable from "./component/pagination/PaginationTable";
// import MiscColumnFilteringTable from "./component/filter/misc/MiscColumnFilteringTable";
// import ColumnFilteringTable from "./component/filter/column/ColumnFilteringTable";
// import GlobalFilteringTable from "./component/filter/global/GlobalFilteringTable";
// import FormatingTable from "./component/format/FormatingTable";
// import BasicTable from "./component/BasicTable";
// import GroupedColumnsTable from "./component/GroupedColumnsTable";
// import SortingTable from "./component/SortingTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <GroupedColumnsTable /> */}
      {/* <SortingTable /> */}
      {/* <FormatingTable /> */}
      {/* <GlobalFilteringTable /> */}
      {/* <ColumnFilteringTable /> */}
      {/* <MiscColumnFilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <ColumnOrderTable /> */}
      {/* <ColumnHidingTable /> */}
      <StickyColumnTable />
    </div>
  );
}

export default App;
