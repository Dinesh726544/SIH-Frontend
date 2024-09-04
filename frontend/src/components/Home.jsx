import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <Link to="/">
            <Link to="/register-admin">
              <Button>register through admin</Button>
            </Link>
            <br/>
            <br/>
            <Link to="/register-worker">
              <Button>register through Worker</Button>
            </Link>
          </Link>
        </div>
      </div>
    </>
  );
}
