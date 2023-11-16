<template>
  <div>
    <input type="text" v-model="searchInput" @input="searchUsers" placeholder="Search VK users">
    <div>
      <UserPanel v-for="user in users" :key="user.id" :user="user" :brightness="getBrightness(user.id)" @add="addUser"
        @remove="removeUserFromList" />
    </div>
  </div>
</template>

<script>
import UserPanel from './UserPanel.vue';
import vkServices from '../services/vkServices';

export default {
  components: {
    UserPanel,
  },
  data() {
    return {
      searchInput: '',
      users: [],
    };
  },
  methods: {
    async searchUsers() {
      this.users = await vkServices.searchUsers(this.searchInput);
    },
    removeUserFromList(user) {
      this.$emit("remove", user);
    },
    addUser(user) {
      this.$emit('add', user);
    },
    getBrightness(id) {
      const user = this.users.find(user => user.id === id);
      return this.$root.getBrightness(user);
    },
  },
};
</script>