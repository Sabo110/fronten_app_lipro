import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:8000';

const signUpAccount = async (data) => {
        const response = await axios.post('/utilisateur/', data)
        return response.data
   
    
}

const login = async (data) => {
    try {
      const response = await axios.post('/api-token-auth/', data);
      // Renvoyez les données de la réponse
      return response.data; 
    } catch (error) {
      console.error('Erreur dans la requête de connexion :', error);
      throw error; 
    }
  };
export { signUpAccount, login }