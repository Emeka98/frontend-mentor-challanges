import React from "react";

const getData = async () => {
  const res = await fetch(
    `https://${process.env.API_KEY}.mockapi.io/api/v1/quizzes`
  );
  return res.json()
};

async function QuizPage({ params }) {
  const data = await getData();
  console.log(data[0].quizzes[0]);
  const { id } = params;

  return <div className="lg:container lg:mx-auto">Quiz Page</div>;
}

export default QuizPage;
