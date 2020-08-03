import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const apiUrl = "https://randomuser.me/api/?results=100&nat=us&inc=picture,name,email,phone,dob"



export default {
  getRandomUser: function() {
    return axios.get(apiUrl);
  
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
  }
};