import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
