import axios  from "axios";

export const API_URL = `http://localhost:5000/api/auth`

const $api = axios.create({
    withCredentials: true,//  это для того чтобы сервер обрабатывал refresh токен из куки
    baseURL: API_URL
})

// interceptors это интерцептор (функция) которая перехватывает запрос, где я могу ему чтото дописать или внести правки
// в данном случае при каждом запросе интерцептор будет добавлять в запрос заголовок с токеном
$api.interceptors.request.use((config) => {

    if (!config.headers) {// надо чтобы headers был чтоно определён, иначе выдаёт ошибку Object is possibly 'undefined'.
        config.headers = {};
    }
    
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
        return config;
    },
     async (error) => {

        const originalRequest = error.config;// содержит в себе все данные запроса изначального запроса 
        /*
        если запрос был откланён из за того что acess токен потерял срок годности
        то сначала будет сделан  ${API_URL}/refresh, будет получена новая пара  acess и refresh
        а затем данные изначальный запрос будет повторён, все его данные будут хранитсья в originalRequest = error.config
        */
        // !originalRequest._isRetry чтоб небыло бесконечного цикла, проверяю по условия что если я уже на этот запрос отправлял  axios.get(`${API_URL}/refresh, чтоб он по новой не отработал
        if(error.response.status == 401 && !originalRequest._isRetry) {// если ошибка в том что acess токен потерял срок годности
            originalRequest._isRetry = true;
            try {
                // делаю по новой запрос чтобы получить новый acess и refresh токены
                const response = await axios.get(`${API_URL}/refresh`,{withCredentials: true});
                // по новой сохраняю acess токен
                localStorage.setItem('token', response.data.accessToken);
    
                return $api.request(originalRequest);// повторяем по новой запрос
    
            } catch (error) {
                console.log("Не авторизован")
            }
        }
        throw error; // если прилетит на 401 статут то значит это какаято другая ошибка
    }
)

export default $api;