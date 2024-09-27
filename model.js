const model = {

    app: {
        
        loggedInUserID: null,
        pages: ["mainPage", "loginPage"],
        currentPage: "mainPage",
    }, 



    input: {
        logIn: {
            email: null,
            password: null
        },

        //model.input.createAccount.name

        createAccount: {
            name: null,
            adress: null,
            email: null,
            password: null,
            secondPassword: null
        },

        addAnimal: {
            race: null,
            name: null,
            weight: null,
            type: null
        }
    },


    data: {

        users: [
            {
                id: 1010101,
                name: "Per",
                adress: "Veien 2",
                email: "noe@bonde.no",
                password: "sikkertpassord",
                activities: [
                    {
                        id: 1011,
                        name: "Malla",
                        date: "29.09.24", 
                        requirement: "Jevnlig klipping.",
                        description: "Klippes"
                    },
                ],
                animals: [
                    {
                        id: 15184,
                        race: "Hampshire Gris",
                        name: "Toast",
                        weight: 201,
                        type: "Gris",
                        status:[
                            {
                                id: 48181,
                                description: "Pregnant"
                            },
                        ]
                    }
                ]
            },

            {
                id: 1002,
                name: "Per",
                adress: "MinGårdsvei 10",
                email: "bonde@bondemain.no",
                password: "detteerikkeettryktpassord",
                aktiviteter: [1011],
                animals: [1101]
            },
        ],

        animals: [
            {
                id: 1101,
                race: "Skotsk brunku",
                name: "Fjon",
                weight: 1200,
                type: "Ku",
                status: [
                    {
                        id: 100101101,
                        description: "Pregnant"
                    },
                ]
            }
        ],
        
        activities: [
            {
                id: 1011,
                name: "Malla",
                date: "29.09.24", 
                requirement: "Jevnlig klipping.",
                description: "Klippes"
            },
        ]



        




    }
}