//level1
let dog = {};
dog.name = "jack";
dog.legs = 4;
dog.color = "white"
dog.age = 7;
dog.bark = function () {
    console.log("woof")
}
console.log(Object.values(dog));
dog.breed = "labrador";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}
//level2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let mx;
let m = 0;
for (const property in users) {
    if (users[property].skills.length > m) {
        m = users[property].skills.length;
        mx = property;
    }
}
console.log(mx);



let personAccount = {
    firstName: "abc",
    lastName: "def",
    income: {
        freelancing: 5000,
        menialLabour: 1000
    },
    expenses: {
        data: 200,
        food: 1000,
        transport: 800
    },

    totalIncome: function () {
        let total = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            total += values[i]
        }
        return total;
    },
    totalExpenses: function () {
        let total_exp = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            total_exp += values[i]
        }
        return total_exp;
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${
                    Object.entries(this.expenses)
                }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}


const Users = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const signUp = (username, email, password) => {
    users.forEach(User => {
        if (User.username === username && User.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date();
            let ss = "qrstuvwxyznsjsbbjhbjshu";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(ss[Math.floor(Math.random() * ss.length)])
            }
            id = id.join("");
            Users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(Users[Users.length - 1]);
}

const signIn = (username, password) => {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].username.toLowerCase() === username.toLowerCase() && Users[0].password === password) {
            return Users[i];
        } else {
            return "wrong username or password";
        }
    }
}

//product
const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]

const rateProduct = (name, rate) => {
    products.forEach(product => {
        if (product.name.toLowerCase().includes(name)) {
            let ss = "0123456789abcdshjdshjpqrstuvshbjhwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(ss[Math.floor(Math.random() * ss.length)])
            }
            id = id.join("");
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log("filter");
        } else {
            console.log("no product to rate")
        }
    })
};

const avgRating = (name) => {
    let avg = 0;
    let cc = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                cc++
                avg += rating
            })
        }
    }
    avg /=  cc;
}

const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {

            if (!products[i].likes) {
                console.log(like);
                let ss = "0123456789asahjhjhshjaqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(ss[Math.floor(Math.random() * ss.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}

rateProduct("tv", "2");
avgRating("Laptop");
likeProduct("Laptop");
