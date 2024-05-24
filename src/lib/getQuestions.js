export default async function getQuestions(){
    const data= await fetch("http://localhost:8080/question/Getallquestions");
    return data;
}