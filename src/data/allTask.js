
const data = [
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer Content Writer Content Writer first",
        "description":"Prepare proctor for client meeting",
        "date":"2024-08-09",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Develop API",
        "description":"Prepare proctor for client meeting",
        "date":"2024-08-20",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Deploy to VPS",
        "description":"Prepare proctor for client meeting",
        "date":"2024-04-23",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Prepare proctor for client meeting",
        "date":"2024-12-01",
        "status":"onprogress"
    },
    
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"2024-01-01",
        "status":"done"
    },
    
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"2024-05-29",
        "status":"done"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"2024-11-10",
        "status":"revise"
    },
    
]

function getAllTask() {
    return data;
}

export { getAllTask };
