import React from "react";
import QuestionPage from "@/containers/QuestionPage";
import { notFound } from "next/navigation";
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/questions`);
  return res.json();
};

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
      <QuestionPage />
    </div>
  );
}

export default QuizPage;
