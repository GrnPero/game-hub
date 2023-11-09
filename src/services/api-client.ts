import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "ee46261aa8314e288451942aa065be56",
    },
});