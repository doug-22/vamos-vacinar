import Axios from "axios";

const api = Axios.create({
  baseURL: "https://vamos-vacinar-backend.vercel.app/"
});

// eslint-disable-next-line
export default {
  getListAppointments: async (date) => {
    if(!(date === undefined)){
      let response = await api.get(`/api/agendamento?dia=${date}`);
      return response.data;
    }else{
      let response = await api.get("/api/agendamento");
      return response.data.dates;
    }
  },
  postRegister: async (values) => {
    let response = await api.post("/api/cadastro", values)
      .then((res) => {
        return !res.data.error;
      }).catch((error) => {
        return !error.response.data.error;
      });
    return response;
  },
  editVaccination: async (id) => {
    let response = await api.put(`/api/editar/${id}`,{
      vaccinated: true
    }).then(res => {
      return res.data;
    });
    return response;
  },
  deleteAppointments: async (date) => {
    let response = await api.delete(`/api/deletar_agendamentos?dia=${date}`)
      .then(res => {
        return !res.data.error;
      })
      .catch(error => {
        return !error.response.data.error;
      });
    return response;
  }
};