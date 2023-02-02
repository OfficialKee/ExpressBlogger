const e = require("express")


const validation = (userData) => {
    const truthArray = []
    const noMatch = []
    const array = ["Lorem", "ipsum", "dorem", "sit", "amet"]


    const categoryArray = userData.category

    categoryArray.forEach(category => {
        if (typeof (category) !== 'string') {
            truthArray.push(true)
        }
    })

    categoryArray.forEach(category => {
        
        if (!array.includes(category)) {
            noMatch.push(true)
        }        
        
    })
        ;
    if (userData.title === undefined || typeof (userData.title) !== 'string' || userData.title.length > 40) {
        return {
            isValid: false,
            message: 'title is required, it must be a string and less than 40 char'
        }
    } if (userData.author === undefined || typeof (userData.author) !== 'string' || userData.author.length > 40) {
        return {
            isValid: false,
            message: 'author is required, it must be a string and less than 40 char'
        }
    } if (
        userData.category === undefined ||
        categoryArray.length > 10 ||
        truthArray.includes(true)||
        noMatch.includes(true)){
        return {
            isValid: false,
            message: 'category is required and it must be a string with less than 10 entries,must choose correct category'
        }
    }
    return {
        isValid: true,
    }
}

module.exports = { validation };
