<template>
  <div>
    <div class="count text-center mb-5">
      <button class="btn btn-secondary mx-3" @click="plus(1)">1증가</button>
      {{ count }}
      <button class="btn btn-secondary mx-3" @click="minus(1)">1감소</button>
    </div>
    <div class="rooms text-center">
      <button class="btn btn-secondary mx-3" @click="assignRoom('침실')">침실</button>
      {{ rooms }}
      <input type="text" v-model="room" class="mx-3" @keyup.enter="addRoom" />
      <button class="btn btn-secondary mx-3" @click="addRoom">방 추가</button>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.getters["test/getCount"]); //반응형으로 바꿔줌
    const rooms = computed(() => store.getters["test/getRoomData"]);
    const room = ref("");
    const plus = (payload) => {
      store.commit("test/PLUS_COUNT", payload);
    };
    const minus = (payload) => {
      store.commit("test/MINUS_COUNT", payload);
    };
    const assignRoom = (payload) => {
      store.commit("test/ASSIGN_ROOM_DATA", payload);
    };
    const addRoom = () => {
      store.commit("test/ADD_ROOM", room.value);
      room.value = "";
    };
    return {
      store,
      count,
      rooms,
      plus,
      minus,
      room,
      assignRoom,
      addRoom,
    };
  },
};
</script>
