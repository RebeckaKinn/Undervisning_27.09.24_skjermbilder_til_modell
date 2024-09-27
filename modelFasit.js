const model = {
    app:{
        app: document.getElementById('app'),
        loggedInUserID: null,
        pages: ["logIn", "createUser", "mainPage", "weather", "myAnimals", "chosenAnimalType", "addAnimal", "addActivity", "activities", "profile"],
        currentPage: null
    },
    input: {
        logIn:{
            email: null,
            password: null
        },

        createAccount: {
            name: null,
            adress: null,
            email: null,
            password: null,
            passwordCheck: null
        },

        addAnimal: {
            race: null,
            name: null,
            weight: null,
            type: null
        },

        addActivity: {
            name: null,
            date: null, 
            requirement: null,
            description: null
        }

    },
    data: {
        typeChoices: ["Ku", "Hest", "Sau", "Gris"],

        //Ettersom ingen skal ha behov for å ha tilgang til aktiviteter eller dyrene til en bruker, 
        //så kan listene være innefor user. 
        //Hvis flere skal kunne ha tilgang til en aktivitet eller dyr, BURDE de være i en egen liste
        //UTENFOR users, og heller bli refferert med en ID. 
        users: [
            {
                id: 1001,
                name: "Per",
                adress: "MinGårdsvei 10",
                email: "bonde@bondemain.no",
                password: "detteerikkeettryktpassord",
                aktiviteter: [
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