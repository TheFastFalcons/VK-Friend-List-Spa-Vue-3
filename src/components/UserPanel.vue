<template>
  <div class="container"
    :style="{ background: `hsl(${user.sex === 2 ? '240, 100%, ' : '100, 100%, '}${brightness || 50}%)` }"
    @click="addUser">
    <img class="img" :src="user.photo_100" alt="user photo" />
    {{ user.first_name }} {{ user.last_name }} (
    Gender: {{ user.sex === 2 ? 'Male' : user.sex === 1 ? 'Female' : 'Not specified' }}, Age: {{
      user.bdate ? calculateAge(user.bdate) : 'Not available'
    }}, Friends: {{ user.friends ? user.friends.length : 0 }})
    <button class="btn" @click.stop="removeUser">Remove</button>
    <button class="btn" @click.stop="addUser">Add</button>
  </div>
</template>

<script>
import vkServices from '@/services/vkServices';

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    brightness: {
      type: Number,
      required: true
    }
  },
  methods: {
    async addUser() {
      await this.$emit('add', this.user);
      this.user.friends = await vkServices.getFriends(this.user.id);
    },
    removeUser(event) {
      event.stopPropagation();
      this.$emit('remove', this.user);
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

<style> .container {
   min-width: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;
   background-color: blanchedalmond;
 }

 .img {
   display: none;
 }

 .btn {
   margin-bottom: 5px;
   min-width: 100px;
   padding: 6px 10px;
   background-color: antiquewhite;
 }
</style>