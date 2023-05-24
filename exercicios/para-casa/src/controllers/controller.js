const jsonMovies = require("../models/ghiblifilms.json");
const express = require("express");

const app = express();
app.use(express.json());

const getAll = (req, res) => {
    res.status(200).json([
        {
            filmes: jsonMovies,
        },
    ]);
};

const getByID = (req, res) => {
    //ok
    const reqID = req.params.id;
    const findMovie = jsonMovies.find((movie) => movie.id == reqID);

    res.status(200).json([
        {
            movie: findMovie,
        },
    ]);
};

const updateDirectorByID = (req, res) => {
    //ok
    const reqID = req.params.id;
    const reqDirector = req.body.director;

    const movieIndex = jsonMovies.findIndex((movie) => movie.id == reqID);

    jsonMovies[movieIndex].director = reqDirector;

    res.status(200).send(jsonMovies[movieIndex]);
};

const updateTimeDuration = (req, res) => {
    //ok
    const reqID = req.params.id;
    const reqDuration = req.body.running_time;

    const movieIndex = jsonMovies.findIndex((movie) => movie.id == reqID);

    jsonMovies[movieIndex].running_time = reqDuration;

    res.status(200).send(jsonMovies[movieIndex]);
};

const deleteByProducer = (req, res) => {
    const reqProducer = req.params.producer.toLowerCase();
    const remTitle = [];

    for (let index = 0; index < jsonMovies.length; index++) {
        if (jsonMovies[index].producer.toLocaleLowerCase() == reqProducer) {
            remTitle.push(jsonMovies[index].title);
            jsonMovies.splice(index, 1);
            index--;
        }
    }
    
    if (remTitle == false) {
        res.status(404).json([
            {
                msg: "Produtor(a) não encontrado(a)!",
            },
        ])
    } else {
        res.status(200).json([
            {
                msg: "Filmes removidos.",
                remTitle,
            },
        ])
    }
}

/**Abaixo tentei fazer um put sem perda dos outros dados.
 * Em um cenário real os dados seriam autopreenchidos pelo front-end, mantendo os campos
 * que foram marcados como não-alterados. Aqui para simular copiei do Json somente para testar como fazer
 * put similar ao patch.
 */
const updateDescription = (req, res) => {
    //ok
    const reqID = req.params.id;
    const reqDescription = req.body.description;

    const movieIndex = jsonMovies.findIndex((movie) => (movie.id = reqID));
    const updatedMovie = {
        id: jsonMovies[movieIndex].id,
        title: jsonMovies[movieIndex].title,
        original_title: jsonMovies[movieIndex].original_title,
        original_title_romanised:
            jsonMovies[movieIndex].original_title_romanised,
        description: reqDescription,
        director: jsonMovies[movieIndex].director,
        producer: jsonMovies[movieIndex].producer,
        release_date: jsonMovies[movieIndex].release_date,
        running_time: jsonMovies[movieIndex].running_time,
    };

    jsonMovies.splice(movieIndex, 1, updatedMovie);

    res.status(200).json([
        {
            msg: "Atualizado com sucesso!",
            updatedMovie,
        },
    ]);
};

module.exports = {
    getAll,
    getByID,
    updateDirectorByID,
    updateTimeDuration,
    updateDescription,
    deleteByProducer,
};


/* versão async da deleteByProducer. Achei que estava dando errado sem async e me aventurei.
Depois descobri que era só algo esperado no uso do splice, e consertei com o "index--":

const deleteByProducer = async (req, res) => {
    const reqProducer = req.params.producer.toLowerCase()
    const remTitle = [];
    
    const test = await new Promise((resolve, reject) => {
        for (let index = 0; index < jsonMovies.length; index++) {
            if (jsonMovies[index].producer.toLocaleLowerCase() == reqProducer) {
                remTitle.push(jsonMovies[index].title);
                jsonMovies.splice(index, 1);
                index--;
            }
            if (index == jsonMovies.length-1) {
                if (remTitle == false) {
                    reject();
                } else {
                    resolve(remTitle)
                }
            }
        }
    })

        .then((titulos) => {
            res.status(200).json([
                {
                    msg: "Filmes removidos.",
                    titulos,
                },
            ]);
        })
        .catch((erro) =>
            res.status(404).json([
                {
                    msg: "Produtor(a) não encontrado.",
                },
            ])
        );
}; */