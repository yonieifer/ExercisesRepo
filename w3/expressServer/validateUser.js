export const validNewUser =  (name, age, password) => {
    return (name.length > 2 && age > 0 && password.length > 4)
}

