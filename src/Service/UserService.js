import $api from '../http/index';

// отдельный код не относящийся к регистрации, вынес в отдельный сервис 

export default class UserService {
  
    static async fetchUsers(){
        return await $api.get('/users');
    }
}
