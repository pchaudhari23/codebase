import React, { useState } from "react";
import create from "zustand";

const useStore = create((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
  updateMovie: (id, updatedMovie) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id ? updatedMovie : movie
      ),
    })),
  deleteMovie: (id) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.id !== id),
    })),
}));

const MovieState = () => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "",
    year: "",
    director: "",
    rating: "",
  });

  const [editingMovie, setEditingMovie] = useState(null);
  const movies = useStore((state) => state.movies);
  const addMovie = useStore((state) => state.addMovie);
  const updateMovie = useStore((state) => state.updateMovie);
  const deleteMovie = useStore((state) => state.deleteMovie);
  const handleAdd = () => {
    if (
      newMovie.title.trim() &&
      newMovie.genre.trim() &&
      newMovie.year.trim() &&
      newMovie.director.trim() &&
      newMovie.rating.trim()
    ) {
      addMovie({ id: Date.now(), ...newMovie });
      setNewMovie({ title: "", genre: "", year: "", director: "", rating: "" });
    }
  };
  const handleUpdate = () => {
    if (
      editingMovie &&
      editingMovie.title.trim() &&
      editingMovie.genre.trim() &&
      editingMovie.year.trim() &&
      editingMovie.director.trim() &&
      editingMovie.rating.trim()
    ) {
      updateMovie(editingMovie.id, editingMovie);
      setEditingMovie(null);
    }
  };
  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };
  const handleDelete = (id) => {
    deleteMovie(id);
  };
  return (
    <div>
      <h1>Zustand Movie CRUD Example</h1>
      <input
        type="text"
        placeholder="Title"
        value={editingMovie ? editingMovie.title : newMovie.title}
        onChange={(e) =>
          editingMovie
            ? setEditingMovie({ ...editingMovie, title: e.target.value })
            : setNewMovie({ ...newMovie, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Genre"
        value={editingMovie ? editingMovie.genre : newMovie.genre}
        onChange={(e) =>
          editingMovie
            ? setEditingMovie({ ...editingMovie, genre: e.target.value })
            : setNewMovie({ ...newMovie, genre: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Year"
        value={editingMovie ? editingMovie.year : newMovie.year}
        onChange={(e) =>
          editingMovie
            ? setEditingMovie({ ...editingMovie, year: e.target.value })
            : setNewMovie({ ...newMovie, year: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Director"
        value={editingMovie ? editingMovie.director : newMovie.director}
        onChange={(e) =>
          editingMovie
            ? setEditingMovie({ ...editingMovie, director: e.target.value })
            : setNewMovie({ ...newMovie, director: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Rating"
        value={editingMovie ? editingMovie.rating : newMovie.rating}
        onChange={(e) =>
          editingMovie
            ? setEditingMovie({ ...editingMovie, rating: e.target.value })
            : setNewMovie({ ...newMovie, rating: e.target.value })
        }
      />
      <button onClick={editingMovie ? handleUpdate : handleAdd}>
        {editingMovie ? "Update" : "Add"}
      </button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.genre} - {movie.year} - {movie.director} -{" "}
            {movie.rating}
            <button onClick={() => handleEdit(movie)}>Edit</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieState;
