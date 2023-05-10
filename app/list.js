const listingsData = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Bali, Indonesia",
        price: "$500",
        days: 7,
        description: "Escape to this luxurious villa in Bali and enjoy breathtaking ocean views from the infinity pool.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
    {
        id: 2,
        name: "Beachfront Condo",
        location: "Miami, Florida",
        price: "$200",
        days: 4,
        description: "Stay in this beautiful beachfront condo in Miami and wake up to the sound of waves crashing on the shore.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
    {
        id: 3,
        name: "Charming Cottage",
        location: "Cotswolds, England",
        price: "$150",
        days: 3,
        description: "Experience the English countryside in this charming cottage in the Cotswolds. Relax by the fireplace and take in the beautiful views.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
    {
        id: 4,
        name: "Beachfront Condo",
        location: "Miami, Florida",
        price: "$200",
        days: 4,
        description: "Stay in this beautiful beachfront condo in Miami and wake up to the sound of waves crashing on the shore.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
    {
        id: 5,
        name: "Beachfront Condo",
        location: "Miami, Florida",
        price: "$200",
        days: 4,
        description: "Stay in this beautiful beachfront condo in Miami and wake up to the sound of waves crashing on the shore.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
    {
        id: 6,
        name: "Beachfront Condo",
        location: "Miami, Florida",
        price: "$200",
        days: 4,
        description: "Stay in this beautiful beachfront condo in Miami and wake up to the sound of waves crashing on the shore.",
        slides: [
            "https://images.unsplash.com/photo-1549466785-f5c1771646cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
            "https://images.unsplash.com/photo-1596712407493-9dcc39702033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        ],
    },
];

export default listingsData;