export default async function getCompanies(){
    const data= await fetch("http://localhost:8080/question/Getallquestions");
    return data;
}