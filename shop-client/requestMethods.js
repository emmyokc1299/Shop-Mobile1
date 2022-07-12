import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJlMDM3M2UwMWFlNGFjODAxMzAwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA2ODUxMiwiZXhwIjoxNjQ0MzI3NzEyfQ.M5XsCIar-k1C_neFIAUFdU7HXYSTxR5qbcH2jI_g8tI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})