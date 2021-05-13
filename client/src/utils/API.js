import axios from "axios";

export default function getProjects()
{
    return axios.get("/api/getProjects");
}