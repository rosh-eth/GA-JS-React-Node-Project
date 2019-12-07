import { models } from "mongoose"

const providers = [
    {
        id: 1,
        name: "Provider 1",
        address: "Address - Provider 1",
        phone: "1800 Provider 1",
        email: "Email - Provider 1",
        services: [
            "service 1",
            "service 2", 
            "service 3"
    ]
    }, 
    {
        id: 2,
        name: "Provider 2",
        address: "Address - Provider 2",
        phone: "1800 Provider 2",
        email: "Email - Provider 2",
        services: [
            "service 4",
            "service 5", 
            "service 6"
    ]
    },
    {
        id: 3,
        name: "Provider 3",
        address: "Address - Provider 3",
        phone: "1800 Provider 3",
        email: "Email - Provider 3",
        services: [
            "service 7",
            "service 8", 
            "service 9"
    ]
    }
]

module.exports = providers;