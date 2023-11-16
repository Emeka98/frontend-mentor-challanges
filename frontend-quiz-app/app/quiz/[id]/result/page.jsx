import React from "react";
import Header from "@/components/Header";
import ResultContainer from "@/containers/ResultContainer";
function ResultPage({ params }) {
  const { id } = params;
  return (
    <div className="lg:container lg:mx-auto">
      <Header logo={id} />
      <ResultContainer />
      <div></div>
    </div>
  );
}

export default ResultPage;
