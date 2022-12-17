import React from "react";
import { PageNotFound, InsertStudent, HomePage } from "../../../pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../navbar/navbar.components";
export const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/api" element={<HomePage />} />
        <Route path="/api/InsertStudent" element={<InsertStudent />} />
        <Route path="/api/PageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
