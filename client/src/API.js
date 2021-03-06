
const API_URL = 'http://localhost:5000';
// This is what talks to the backend
export async function listLogEntries(){  

    const response =  await fetch(`${API_URL}/`)
    return response.json();
}

export async function createLogEntry(entry){  
    const response = await fetch(`${API_URL}/`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
            
        },
        body: JSON.stringify(entry),
    });
    return response.json();
}

export async function deleteLogEntry(entry){
    const response = await fetch(`${API_URL}/`,{
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(entry),
    });
    return response.json();
}