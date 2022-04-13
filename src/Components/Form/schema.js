import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    birthDate: yup.date().required("Campo obrigatório"),
    dateAppoinment: yup.date().default(function () {
        return new Date();
      }).required("Campo obrigatório"),
    time: yup.string().required("Campo obrigatório")
});