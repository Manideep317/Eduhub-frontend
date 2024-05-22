import axios from "axios"
export default async function addCompany(passData){
    const data=await axios.post("http://localhost:8080/company/createCompany",passData);
    if(!Response.ok){
        throw new Error("Failed to add company");
    }
    return data;
}