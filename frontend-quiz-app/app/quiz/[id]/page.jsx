import React from "react";
import QuestionPage from "@/containers/QuestionPage";
import { notFound } from "next/navigation";
const getData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/questions`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the server");
  }
  
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
      <QuestionPage filteredData={filteredData} />
    </div>
  );
}

export default QuizPage;
