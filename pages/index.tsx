/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

export default function index() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://form-server-6gpy.onrender.com/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}
