import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:8000';

const generateQuestionnaire = async (pdf_file) => {
    const response = await axios.post('/questionnaire/generation/', {pdf_file: pdf_file}, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':`token ${localStorage.getItem('token')}`,
            'Content-Disposition': `attachment; filename=${pdf_file.name}`
          }
    })
    return response.data
}
const getQuestionnaires = async () => {
    const response = await axios.get('/questionnaire/liste/',{
        headers: {
            'Authorization':`token ${localStorage.getItem('token')}`,
          }
    })
    return response.data
}

const delQuestionnaire = async (id) => {
    const response = await axios.delete(`/questionnaire/supprimer/${id}/`, {
        headers: {
            'Authorization':`token ${localStorage.getItem('token')}`,
          }
    })
    return response.data
}

export  {generateQuestionnaire, getQuestionnaires, delQuestionnaire}