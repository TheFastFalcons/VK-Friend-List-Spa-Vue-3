<template>
  <div id="app">
    <UserList @add="addUserToList" @remove="removeUserFromList" />
    <button @click="buildFriendsList">Build</button>
    <FriendsList v-if="showFriendsList" :users="users" :getBrightness="getBrightness" />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import FriendsList from './components/FriendsList.vue';
import vkServices from './services/vkServices';

export default {
  components: {
    UserList,
    FriendsList,
  },
  data() {
    return {
      showFriendsList: false,
      users: []
    };
  },
  methods: {
    async buildFriendsList() {
      const promises = this.users.map(user => vkServices.getFriends(user.id));
      const friendsArrays = await Promise.all(promises);

      let friendsSet = new Set();


      friendsArrays.forEach(friends => {
        friends.forEach(friend => {
          const friendString = JSON.stringify(friend);
          friendsSet.add(friendString);
        });
      });
      this.users = Array.from(friendsSet).map(str => JSON.parse(str));
      this.showFriendsList = true;
    },
    addUserToList(user) {
      if (!this.users.find((u) => u.id === user.id)) {
        this.users.push(user);
      }
    },
    removeUserFromList(user) {
      this.users = this.users.filter((u) => u.id !== user.id);
    },
    getBrightness(user) {
      const maxFriendsCount = Math.max(...this.users.map(u => u.friends ? u.friends.length : 0));
      return user.friends ? (user.friends.length / maxFriendsCount) * 100 : 0;
    },
    calculateAge(bdate) {
      const [day, month, year] = bdate.split('.');
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },
  },
};
</script>