import React from "react";
import './App.css';
import routes from "./Routes";
import { useRoutes } from "react-router-dom"

export default function App() {
  const Route = useRoutes(routes)
  return (
    <>
      {Route}
    </>
  )
}
