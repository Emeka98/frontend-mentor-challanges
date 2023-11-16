import React from "react";
import QuestionPage from "@/containers/QuestionPage";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getData } from "@/services/questionData";
async function QuizPage({ params }) {
  const data = await getData();
  const { id } = params;

  const filteredData = data[0].quizzes.find(
    (item) => item.title.toLowerCase() === id
  );

  if (!filteredData) {
    notFound();
  }
  return (
    <div className="lg:container lg:mx-auto">
      <Header logo={id} />
      <QuestionPage id={id} filteredData={filteredData} />
    </div>
  );
}

export default QuizPage;
