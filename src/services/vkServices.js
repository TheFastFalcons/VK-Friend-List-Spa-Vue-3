import axios from 'axios';

const vkServices = {
  async searchUsers(query = 'default_query') {
    try {
      const response = await axios.get('https://api.vk.com/method/users.search', {
        params: {
          q: query,
          access_token: 'vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g',
          v: '5.130',
        },
      });
      console.log(response.data);
      return response && response.data && response.data.response.items ? response.data.response.items : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getUser(userId) {
    try {
      const response = await axios.get('https://api.vk.com/method/users.get', {
        params: {
          user_ids: userId,
          fields: 'first_name,last_name,sex,bdate,photo_100',
          access_token: 'vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g',
          v: '5.130',
        },
      });
      return response.data.response[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async getFriends(userId) {
    try {
      const response = await axios.get('https://api.vk.com/method/friends.get', {
        params: {
          user_id: userId,
          fields: 'first_name,last_name,sex,bdate,photo_100',
          access_token: 'vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g',
          v: '5.130',
        },
      });
      return response.data.response && response.data.response.items ? response.data.response.items : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getWallPosts(userId) {
    try {
      const response = await axios.get('https://api.vk.com/method/wall.get', {
        params: {
          owner_id: userId,
          access_token: 'vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g',
          v: '5.130',
        },
      });
      return response.data.response.items;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
}

export default vkServices