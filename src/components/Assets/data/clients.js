import avatar from '../img/avatar.png'

export const clients = [
    {
        id: 0,
        name: "Holden Banks",
        designation: "Developer",
        amount: "$863.45",
        date: "2023-12-18",
        status: {
            type: "success",
            value: "Approved"
        },
        image: avatar
    },
    {
        id: 1,
        name: "Collin Haney",
        designation: "Designer",
        amount: "$369.95",
        date: "2023-12-20",
        status: {
            type: "success",
            value: "Approved"
        },
        image: avatar
    },
    {
        id: 2,
        name: "Matilda Frank",
        designation: "Actress",
        amount: "$86.00",
        date: "2023-12-21",
        status: {
            type: "danger",
            value: "Denied"
        },
        image: avatar
    },
    {
        id: 3,
        name: "Paxton Lucero",
        designation: "Actor",
        amount: "1276.90",
        date: "2023-12-22",
        status: {
            type: "secondary",
            value: "Expired"
        },
        image: avatar
    },
    {
        id: 4,
        name: "Parker Hoover",
        designation: "Influencer",
        amount: "$863.45",
        date: "2023-12-26",
        status: {
            type: "success",
            value: "Approved"
        },
        image: avatar
    },
];