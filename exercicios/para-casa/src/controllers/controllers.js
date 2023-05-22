// IMPORTS
const moviesData = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

// GET ROUTE TO GET ALL MOVIES
const getALL = (req, res) => {
    res.status(200).json(
        [{
            filmes: moviesData
        }]
    )
}

// GET ROUTE TO GET ALL MOVIES
const getByID = (req, res) => {
    res.status(200).json(
        [{
            filmes: moviesData
        }]
    )
}

// PUT ROUTE TO UPDATE MOVIE BY ID
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

// PUT ROUTE TO UPDATE DESCRIPTION BY ID
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

// PATCH ROUTE TO UPDATE MOVIE BY ID
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

// PATCH ROUTE TO UPDATE DIRECTOR BY ID
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

// PATCH ROUTE TO UPDATE RUNNING TIME BY ID
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


// DELETE ROUTE TO REMOVE MOVIE BY ID
const deleteByID = (req, res) => {
    const idRequest = req.params.id
    const movieToDelete = moviesData.findIndex(movie => movie.id === idRequest)
    const deletedMovie = moviesData.splice(movieToDelete, 1)

    res.status(200).json(
        [{
            message: 'Movie deleted!',
            deleted: deletedMovie,
            moviesData
        }]
    )
}

// DELETE ROUTE TO REMOVE MOVIE BY TITLE
const deleteByTitle = (req, res) => {
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

// DELETE ROUTE TO REMOVE MOVIE BY TITLE
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

// EXPORTS
module.exports = {
    getALL,                 // GET
    getByID,                // GET
    updateMovieByID,        // PUT
    updateDescriptionByID,  // PUT
    updateTitleByID,        // PATCH
    updateDirectorByID,     // PATCH
    updateRunningTimeByID,  // PATCH
    deleteByID,             // DELETE
    deleteByTitle,          // DELETE
    deleteByProducer        // DELETE
}