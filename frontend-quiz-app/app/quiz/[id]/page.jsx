import React from "react";

const getData = async () => {
  fetch(`https://${process.env.API_KEY}.mockapi.io/api/v1/quizzes`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

async function QuizPage({ params }) {
  await getData();
  const { id } = params;

  return <div className="lg:container lg:mx-auto">Quiz Page</div>;
}

export default QuizPage;
