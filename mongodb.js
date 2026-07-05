/*

{
    "customer_id": 1,
    "customer_name": "sathish",
    "email": "sathish@example.com",
    "city": "coimbatore"
}

db.customers.insertOne({
    "customer_id": 1,
    "customer_name": "sathish",
    "email": "sathish@example.com",
    "city": "coimbatore"
});

insert into customers values
    -> (2, 'priya', 'priya@example.com', 'chennai'),
    -> (3, 'arun', 'arun@example.com', 'madurai'),
    -> (4, 'meena', 'meena@example.com', 'salem'),
    -> (5, 'ravi', 'ravi@example.com', 'trichy');

db.customers.insertMany([
    {
        "customer_id": 2,
        "customer_name": "priya",
        "email": "priya@example.com", 
        "city": "chennai"
    },
    {
        "customer_id": 3,
        "customer_name": "arun",
        "email": "arun@example.com",
        "city": "madurai"
    },
    {
        "customer_id": 4,
        "customer_name": "meena",
        "email": "meena@example.com",
        "city": "salem"
    },
    {
        "customer_id": 5,
        "customer_name": "ravi",
        "email": "ravi@example.com",
        "city": "trichy"
    }   
]);

db.customers.find({}, {
    customer_name: 1,
    email: 1
});

db.customers.find({}, {
    customer_name: 1,
    email: 1,
    _id: 0
});

db.customers.find({
    'city': 'coimbatore'
}, {});

db.customers.updateOne({
        'customer_id': 5
    },
    {
        $set: {
            'city': 'coimbatore'
        }
    }
)

db.customers.deleteOne({
    'customer_id': 4
});

*/