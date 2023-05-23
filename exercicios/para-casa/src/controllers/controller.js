// Imports /////////////////////////////////////////////////////
const moviesData = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

// GET route to get all movies /////////////////////////////////
const getALL = (req, res) => {
    res.status(200).json(
        [{
            filmes: moviesData
        }]
    )
}

// GET route to get movie by ID ////////////////////////////////
const getMovieByID = (req, res) => {
    const idRequest = req.params.id
    const foundMovie = moviesData.find(movie => movie.id === idRequest)

    // Movie with the specified ID not found 
    if (foundMovie === undefined) {
        return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }

    res.status(200).json(
        [{
            message: "Here's the movie you asked for!",
            foundMovie
        }]
    )
}

// PUT route to update movie by ID /////////////////////////////
const updateMovieByID = (req, res) => {
    const idRequest = req.params.id
    const movieRequest = req.body
    const foundMovie = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (foundMovie === -1) {
        return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }

    moviesData.splice(foundMovie, 1, movieRequest)

    res.status(200).json(
        [{
            message: 'Movie updated!',
            moviesData
        }]
    )
}

// PUT route to update description by id ///////////////////////
const updateDescriptionByID = (req, res) => {
    const idRequest = req.params.id
    const descriptionRequest = req.body.description
    const foundMovie = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (foundMovie === -1) {
      return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }
  
    moviesData[foundMovie].description = descriptionRequest
  
    res.status(200).json([
        {
            message: 'Description updated!',
            moviesData
        }
    ])
}

// PATCH route to update movie by id ///////////////////////////
const updateTitleByID = (req, res) => {
    const idRequest = req.params.id
    const newTitle = req.body.title
    const foundMovie = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (foundMovie === -1) {
        return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }

    moviesData[foundMovie].title = newTitle

    res.status(200).json(
        [{
            message: 'Title updated!',
            moviesData
        }]
    )
}

// PATCH route to update director by id ////////////////////////
const updateDirectorByID = (req, res) => {
    const idRequest = req.params.id
    const newDirector = req.body.director
    const foundMovie = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (foundMovie === -1) {
        return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }

    moviesData[foundMovie].director = newDirector

    res.status(200).json(
        [{
            message: 'Director updated!',
            moviesData
        }]
    )
}

// PATCH route to update running time by ID ////////////////////
const updateRunningTimeByID = (req, res) => {
    const idRequest = req.params.id
    const newRunningTime = req.body.running_time
    const foundMovie = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (foundMovie === -1) {
        return res.status(404).json(
            [{
                message: 'Movie not found'
            }]
        )
    }

    moviesData[foundMovie].running_time = newRunningTime

    res.status(200).json(
        [{
            message: 'Running time updated!',
            moviesData
        }]
    )
}

// DELETE route to remove movie by id //////////////////////////
const deleteByID = (req, res) => {
    const idRequest = req.params.id
    const movieToDelete = moviesData.findIndex(movie => movie.id === idRequest)

    // Movie with the specified ID not found
    if (movieToDelete === -1) {
        return res.status(404).json(
            [{
                message: 'No movie with the specified ID!'
            }]
        )
    }

    const deletedMovie = moviesData.splice(movieToDelete, 1)

    res.status(200).json(
        [{
            message: 'Movie deleted!',
            deleted: deletedMovie,
            moviesData
        }]
    )
}

// DELETE route to remove movie by title ///////////////////////
const deleteByTitle = (req, res) => {
    const titleRequest = req.params.title.toLowerCase()
    const movieToDelete = moviesData.findIndex(movie => movie.title.toLowerCase() === titleRequest)

    // Movie with the specified ID not found
    if (movieToDelete === -1) {
        return res.status(404).json(
            [{
                message: 'No movie with the specified ID!'
            }]
        )
    }

    const deletedMovie = moviesData.splice(movieToDelete, 1)

    res.status(200).json(
        [{
            message: 'Movie deleted!',
            deleted: deletedMovie,
            moviesData
        }]
    )
}

// DELETE route to remove movie by producer ////////////////////
const deleteByProducer = (req, res) => {
    const titleRequest = req.params.title.toLowerCase()
    const movieToDelete = moviesData.findIndex(movie => movie.title.toLowerCase() === titleRequest)
    const deletedMovie = moviesData.splice(movieToDelete, 1)

    res.status(200).json(
        [{
            message: 'Movie deleted!',
            deleted: deletedMovie,
            moviesData
        }]
    )
}

// Exports /////////////////////////////////////////////////////
module.exports = {          ////////////        
    getALL,                 // GET    //
    getMovieByID,           // GET    //
    updateMovieByID,        // PUT    //
    updateDescriptionByID,  // PUT    //
    updateTitleByID,        // PATCH  //
    updateDirectorByID,     // PATCH  //
    updateRunningTimeByID,  // PATCH  //
    deleteByID,             // DELETE //
    deleteByTitle,          // DELETE //
    deleteByProducer        // DELETE //
}                           