// import { Outlet } from "react-router-dom";
import Header from "../components/PageHeader";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="content">{/* <Outlet /> */}</div>
    </div>
  );
}
