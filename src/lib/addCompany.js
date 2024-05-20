import axios from "axios"
export default async function addCompany(passData){
    const data=await axios.post("http://localhost:8080/company/createCompany",passData);
    if(!Response.ok){
        return error;
        console.log(error);
    }
    return data;
}