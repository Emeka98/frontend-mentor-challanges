"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import ResultContainer from "@/containers/ResultContainer";
function ResultPage({ params }) {
  const { id } = params;
  const {score} = useSearchParams();
  console.log(score);
  return (
    <div className="lg:container lg:mx-auto">
      <Header logo={id} />
      <ResultContainer />
      <div></div>
    </div>
  );
}

export default ResultPage;
