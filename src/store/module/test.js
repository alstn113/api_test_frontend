export const test = {
  namespaced: true, //getters, mutations, actions 에 모듈명을 넣게 함 ['모듈명/이름']
  state: {
    count: 0,
    rooms: [],
  },
  getters: {
    getCount: (state) => state.count,
    getRoomData: (state) => state.rooms,
  },
  mutations: {
    ASSIGN_COUNT: (state, payload) => {
      state.count = payload;
    },
    PLUS_COUNT: (state, payload) => {
      state.count += payload;
    },
    MINUS_COUNT: (state, payload) => {
      state.count -= payload;
    },
    ASSIGN_ROOM_DATA: (state, payload) => {
      state.rooms = [payload];
    },
    ADD_ROOM: (state, payload) => {
      state.rooms = [...state.rooms, payload];
    },
  },
  actions: {
    // 비동기 작업 가능
    updateCount: (context, payload) => {
      context.commit("ASSIGN_COUNT", payload);
    },
    updateRoomData: (context, payload) => {
      context.commit("ASSIGN_ROOM_DATA", payload);
    },
    addRoom: (context, payload) => {
      context.commit("ADD_ROOM", payload);
    },
  },
};
