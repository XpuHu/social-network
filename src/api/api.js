import { instance } from "./axios_config";

export const userAPI = {

   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${ currentPage }&count=${ pageSize }`).then(response => {
         return response.data;
      });
   },

   follow(userId) {
      return instance.post(`follow/${ userId }`).then(response => {
         if (response.data.resultCode === 0) {
            return true;
         }
      });
   },

   unfollow(userId) {
      return instance.delete(`follow/${ userId }`).then(response => {
         if (response.data.resultCode === 0) {
            return true;
         }
      });
   }
}

export const profileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${ userId }`).then(response => response.data);
   }
}

export const authAPI = {
   getAuthUserData() {
      return instance.get(`auth/me`).then(response => {
         if (response.data.resultCode === 0) {
            return response.data.data;
         }
      })
   }
}
