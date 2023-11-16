<template>
  <div class="container">
    <h2>Friends List</h2>
    <ul class="list" v-for="friend in sortedUsers" :key="friend.id">
      <li class="list__item" @click="redirectToFriend(friend.id)">
        <UserPanel :user="friend" :brightness="getBrightness(friend)" />
        <img :src="friend.photo_100" alt="friend photo" />
        {{ friend.first_name }} {{ friend.last_name }} (Gender: {{ friend.sex === 2 ? 'Male' : 'Female' }}, Age: {{
          friend.bdate ? calculateAge(friend.bdate) : 'Not available' }}, Friends: {{ friend.count }})
      </li>
    </ul>
  </div>
</template>

<script>
import vkServices from '@/services/vkServices';
import UserPanel from './UserPanel.vue';

export default {
  components: {
    UserPanel,
  },
  props: ['users', 'getBrightness'],
  methods: {
    redirectToFriend(id) {
      this.$router.push({ name: 'User', params: { id } });
    },
    calculateAge(bdate) {
      const birthDate = new Date(bdate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  computed: {
    sortedUsers() {
      return this.users.sort((a, b) => a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name));
    },
  },
};
</script>
<style> .container {
   display: flex;
   align-items: center;
   flex-direction: column;
 }

 .list {
   text-decoration: none;
 }

 .list__item {
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
   color: #7b7b7b;
 }
</style>