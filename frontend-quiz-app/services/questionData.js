export const getData = async () => {
  try {
    const res = await fetch(
      `https://${process.env.API_KEY}.mockapi.io/api/v1/quizzes`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the server");
  }
};
