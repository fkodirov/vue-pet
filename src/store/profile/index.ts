// import axios from "axios";

interface User {
  id?: string;
  name: string;
  login: string;
  email: string;
  password: string;
  phone: number;
  bithdate: number;
}

export default {
  state: {
    user: {},
    isAuth: false
  },
  mutations: {
    SET_USER(state:any, payload:any) {
      state.user = payload;
    },
    SET_AUTH(state:any, payload:any) {
      state.isAuth = payload;
    },
  },
  getters:{
    isAuth: (state: any) => {
      return state.isAuth;
    },
    user: (state: any) => {
      return state.user;
    },
  },

  actions: {
    // async getUsers() {
    //   let data = {};
    //   let res = await axios.get(`http://localhost:3001/users/`)
    //     .then((res:any) => {
    //       data = res.data;
    //       // console.log(data)
    //       // commit("SET_USER", data);
    //       return data;
    //     })
    //     .catch((err:Error) => {
    //       console.log(err);
    //     })
    //   return res;
    // },
    // async getUser({ commit },id:string) {
    //   let data = {};
    //   let res = await axios.get(`http://localhost:3001/users/${id}`)
    //     .then((res:any) => {
    //       data = res.data;
    //       return data;
    //     })
    //     .catch((err:Error) => {
    //       console.log(err);
    //     })
    //   return res;
    // },
    // async login({ dispatch, commit },payload:User) {
    //   const usersData:Array<User> = await dispatch("getUsers");
    //   const user:User=usersData.filter(user=>user.login===payload.login)[0]
    //   if(user && user.password==payload.password){
    //     commit("SET_AUTH", true);
    //     commit("SET_USER", user);
    //   }
    //   console.log(false);
    // },
    // async addUser({ commit }, payload:User) {
    //   let data = {};
    //   let res = await axios.post("http://localhost:3001/users", payload)
    //     .then((res:any) => {
    //       data = res.data;
    //       console.log(data)
    //       commit("SET_USER", data);
    //       return data;
    //     })
    //     .catch((err:Error) => {
    //       console.log(err);
    //     })
    //   return res;
    // },
    async login({ commit }: { commit: Function }, payload: User) {
      const storedUsersData: Array<User> = JSON.parse(sessionStorage.getItem("usersData") || "[]");
      const user: User | undefined = storedUsersData.find(u => u.login === payload.login && u.password === payload.password);

      if (user) {
        commit("SET_AUTH", true);
        commit("SET_USER", user);
      }
    },
    async addUser({ commit }: { commit: Function }, payload: User) {
      const storedUsersData: Array<User> = JSON.parse(sessionStorage.getItem("usersData") || "[]");
      storedUsersData.push(payload);
      sessionStorage.setItem("usersData", JSON.stringify(storedUsersData));

      commit("SET_USER", payload);
      commit("SET_AUTH", true);
    },
    async getUsers() {
      const storedUsersData: Array<User> = JSON.parse(sessionStorage.getItem("usersData") || "[]");
      return storedUsersData;
    },
    async getUser({ commit }: { commit: Function }, id: string) {
      const storedUsersData: Array<User> = JSON.parse(sessionStorage.getItem("usersData") || "[]");
      const user: User | undefined = storedUsersData.find(u => u.id === id);

      if (user) {
        commit("SET_USER", user);
      }

      return user;
    },
}
}
