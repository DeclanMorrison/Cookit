import axios from "axios";

export default {
  // Gets all Recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the Recipes with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipe/" + id);
  },
  // Deletes the Recipes with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipe/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(bookData) {
    return axios.post("/api/saveRecipe", bookData);
  },
  query: function() {
    return axios.get("/api/search")
  }

};
