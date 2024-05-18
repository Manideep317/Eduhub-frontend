export default async function addQuestion({data}){
    const response = fetch("http://localhost:8080/question/createQuestion",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    if(!response.ok){
        const errorDetails=(await response).json();
        throw new Error(response);
    }
    return response.json();
}