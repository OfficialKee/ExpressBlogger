

const validation = (userData) => {
   
    if(userData.title === undefined|| typeof(userData.title) !== 'string'){
        return{
            isValid : false,
            message: 'title is required and it must be a string'
        }
    }if(userData.author === undefined|| typeof(userData.author) !== 'string'){
        return{
            isValid: false,
            message: 'author is required and it must be a string'
        }
    }if(userData.category === undefined || typeof(userData.category) !== 'string'){
        return{
            isValid: false,
            message: 'category is required and it must be a string'
        }
    }
return{
    isValid: true,
}
}

module.exports = {validation};
