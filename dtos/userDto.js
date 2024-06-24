class userDTO{  // dto for user creation
    constructor(user){
        this.email = user.email;
        this.password =  user.password;
        this.name = user.name;
        this.age = user.age;
        this.city = user.city;
        this.zipcode = user.zipcode;
    }
}

class userUpdateDTO {  // dto for user update
    constructor(user){
        this.email = user.email;
        this.name = user.name;
        this.age = user.age;
        this.city = user.city;
        this.zipcode = user.zipcode;
    }
}

class userClientDTO {  // dto for user client to receive
    constructor(user){
        this.id = user._id;
        this.email = user.email;
        this.name = user.name;
        this.age = user.age;
        this.city = user.city;
        this.zipcode = user.zipcode;
    }
}  

module.exports = {
    userDTO,
    userUpdateDTO,
    userClientDTO
}