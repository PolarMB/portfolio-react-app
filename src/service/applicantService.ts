import axios from "axios";
import Applicant from "../model/Applicant";

export async function fetchApplicant(): Promise<Applicant|undefined> {
    try {
        const response = await axios.get<Applicant>('http://localhost:8080/api/applicant');
        return response.data;
    } catch (error) {
        console.error('Error fetching applicant:', error);
        return undefined;
    }
}
