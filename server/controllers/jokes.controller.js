const Joke = require ("./../models/jokes.model")


// Get all
module.exports.allJokes = (req, res)=>{
    Joke.find()
        .then(jokes=>res.json(jokes))
        .catch(err=>console.log(err))
}

// Get one
module.exports.oneJoke = (req, res)=>{
    Joke.findOne({_id : req.params.id})
        .then(joke=>res.json(joke))
        .catch(err=>console.log(err))
}

// create
module.exports.createJoke = (req, res)=>{
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke=>res.json(joke))
        .catch(err=>console.log(err))
}


// update 
module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
    .then(joke=>res.json(joke))
    .catch(err=> console.log(err))
}


// delete 
module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(status=> res.json(status))
    .catch(err=>res.json(err))
}
