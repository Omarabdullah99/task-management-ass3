
const data = [
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer Content Writer Content Writer",
        "description":"Prepare proctor for client meeting",
        "date":"February 20, 2024",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Develop API",
        "description":"Prepare proctor for client meeting",
        "date":"February 20, 2024",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Deploy to VPS",
        "description":"Prepare proctor for client meeting",
        "date":"February 20, 2024",
        "status":"todo"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Prepare proctor for client meeting",
        "date":"February 20, 2024",
        "status":"onprogress"
    },
    
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"February 20, 2024",
        "status":"done"
    },
    
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"February 20, 2024",
        "status":"done"
    },
    {
        "id": crypto.randomUUID(),
        "title":"Content Writer",
        "description":"Make Promotional Ads for Instagram fasto's",
        "date":"February 20, 2024",
        "status":"revise"
    },
    
]

function getAllTask() {
    return data;
}

export { getAllTask };
