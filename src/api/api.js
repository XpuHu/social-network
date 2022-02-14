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
   },

   getUserStatus(userId) {
      return instance.get(`profile/status/${ userId }`).then(response => response.data);
   },

   setUserStatus(status) {
      return instance.put(`profile/status`, { status: status }).then(response => {
         if (response.data.resultCode === 0) {
            return true;
         }
      });
   }
}

export const authAPI = {
   getAuthUserData() {
      return instance.get(`auth/me`).then(response => {
         if (response.data.resultCode === 0) {
            return response.data.data;
         }
      })
   },

   loginUser(email, password, rememberMe, setStatus) {
      return instance.post(`auth/login`,{email: email, password: password, rememberMe: rememberMe}).then(response => {
         if (response.data.resultCode === 0) {
            return true;
         } else {
            setStatus(response.data.messages[0]);
         }
      });
   },

   logoutUser() {
      return instance.delete(`auth/login`).then(response => {
         if (response.data.resultCode === 0) {
            return true;
         }
      });
   }
}
