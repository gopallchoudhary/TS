import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function fetchData() {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Error ", error.message);
            if (error.response) {
                console.log(error.response.status);
            }

        }
    }
}