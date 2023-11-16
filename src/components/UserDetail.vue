<template>
  <div>
    <h2>User: {{ user.first_name }} {{ user.last_name }}</h2>
    <h3>Friends in Origin:</h3>
    <div v-for="originUser in originFriends" :key="originUser.id">
      {{ originUser.first_name }} {{ originUser.last_name }}
    </div>
    <h3>Wall Posts:</h3>
    <div v-for="post in userWallPosts" :key="post.id">
      <h3>{{ post.text }}</h3>
    </div>
    <button @click="goBack">Back</button>
  </div>
</template> 
<script>
import vkServices from '@/services/vkServices'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      user: null,
      userWallPosts: [],
      originFriends: [],
    }
  },
  async created() {
    const id = this.$route.params.id;
    this.user = await vkServices.getUser(id);
    this.userWallPosts = await vkServices.getWallPosts(id);
    this.originFriends = this.$store.state.originList.filter(oUser => oUser.friends.some(friend => friend.id === id))
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState({
      originList: state => state.originList
    })
  },
}
</script>