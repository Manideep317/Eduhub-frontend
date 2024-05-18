import axios from "axios";

export default async function addQuestion({ data }) {
  try {
    const response = await axios.post("http://localhost:8080/question/createQuestion", data).then((response)=>{
      console.log(response);
    });

    if (response.status !== 200) {
      const errorDetails = response.data;
      console.log(errorDetails);
      throw new Error(`Error: ${response.status} - ${errorDetails}`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Request failed: ${error.message}`);
  }
}
