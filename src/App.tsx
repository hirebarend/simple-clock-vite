import { useState } from "react";
import moment from "moment";

function App() {
  const [date, setDate] = useState(new Date().getTime());

  setInterval(() => {
    setDate(new Date().getTime());
  }, 700);

  return (
    <div className="align-items-center container d-flex h-100 justify-content-center">
      <div className="d-flex display-1 fw-semibold gap-1 gap-md-3">
        <div className="p-1 p-md-3 text-primary">{moment(date).format("HH")}</div>
        <div className="p-1 py-md-3 text-white">:</div>
        <div className="p-1 p-md-3 text-primary">{moment(date).format("mm")}</div>
        <div className="p-1 py-md-3 text-white">:</div>
        <div className="p-1 p-md-3 text-primary">{moment(date).format("ss")}</div>
        <div className="p-1 p-md-3 text-white">
          {moment(date).format("A")}
        </div>
      </div>
    </div>
  );
}

export default App;
