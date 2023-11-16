(function(){"use strict";var e={941:function(e,t,s){var r=s(9242),n=s(2483),i=s(3396);const a={id:"app"};function o(e,t,s,r,n,o){const u=(0,i.up)("UserList"),c=(0,i.up)("FriendsList");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(u,{onAdd:o.addUserToList,onRemove:o.removeUserFromList},null,8,["onAdd","onRemove"]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>o.buildFriendsList&&o.buildFriendsList(...e))},"Build"),n.showFriendsList?((0,i.wg)(),(0,i.j4)(c,{key:0,users:n.users,getBrightness:o.getBrightness},null,8,["users","getBrightness"])):(0,i.kq)("",!0)])}s(560);function u(e,t,s,n,a,o){const u=(0,i.up)("UserPanel");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.searchInput=e),onInput:t[1]||(t[1]=(...e)=>o.searchUsers&&o.searchUsers(...e)),placeholder:"Search VK users"},null,544),[[r.nr,a.searchInput]]),(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.users,(e=>((0,i.wg)(),(0,i.j4)(u,{key:e.id,user:e,brightness:o.getBrightness(e.id),onAdd:o.addUser,onRemove:o.removeUserFromList},null,8,["user","brightness","onAdd","onRemove"])))),128))])])}var c=s(7139);const l=["src"];function d(e,t,s,n,a,o){return(0,i.wg)(),(0,i.iD)("div",{class:"container",style:(0,c.j5)({background:`hsl(${2===s.user.sex?"240, 100%, ":"100, 100%, "}${s.brightness||50}%)`}),onClick:t[2]||(t[2]=(...e)=>o.addUser&&o.addUser(...e))},[(0,i._)("img",{class:"img",src:s.user.photo_100,alt:"user photo"},null,8,l),(0,i.Uk)(" "+(0,c.zw)(s.user.first_name)+" "+(0,c.zw)(s.user.last_name)+" ( Gender: "+(0,c.zw)(2===s.user.sex?"Male":1===s.user.sex?"Female":"Not specified")+", Age: "+(0,c.zw)(s.user.bdate?o.calculateAge(s.user.bdate):"Not available")+", Friends: "+(0,c.zw)(s.user.friends?s.user.friends.length:0)+") ",1),(0,i._)("button",{class:"btn",onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>o.removeUser&&o.removeUser(...e)),["stop"]))},"Remove"),(0,i._)("button",{class:"btn",onClick:t[1]||(t[1]=(0,r.iM)(((...e)=>o.addUser&&o.addUser(...e)),["stop"]))},"Add")],4)}var h=s(1076);const g={async searchUsers(e="default_query"){try{const t=await h.Z.get("https://api.vk.com/method/users.search",{params:{q:e,access_token:"vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g",v:"5.130"}});return console.log(t.data),t&&t.data&&t.data.response.items?t.data.response.items:[]}catch(t){return console.error(t),[]}},async getUser(e){try{const t=await h.Z.get("https://api.vk.com/method/users.get",{params:{user_ids:e,fields:"first_name,last_name,sex,bdate,photo_100",access_token:"vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g",v:"5.130"}});return t.data.response[0]}catch(t){return console.error(t),null}},async getFriends(e){try{const t=await h.Z.get("https://api.vk.com/method/friends.get",{params:{user_id:e,fields:"first_name,last_name,sex,bdate,photo_100",access_token:"vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g",v:"5.130"}});return t.data.response&&t.data.response.items?t.data.response.items:[]}catch(t){return console.error(t),[]}},async getWallPosts(e){try{const t=await h.Z.get("https://api.vk.com/method/wall.get",{params:{owner_id:e,access_token:"vk1.a.a1nf8zhJYgPkPws_sRi2WD6JqYTpjtZHLEiOOCCS8SWHakHrn1MCznWNjmK8-b31qWeHLjTkknQDa5_D8itjYMZiC5tZJl6jF1y3ZJicRD_cF9Au-ibHb6Zf3D0uMu-_xameLZlt-5LcMfhxAp-q8CVWXIYqVBuemFGkoI1WyOu5RcjtdJyUpicxkJgqBoYLeXhBB9Qu_gtLOKgHimy00g",v:"5.130"}});return t.data.response.items}catch(t){return console.error(t),[]}}};var m=g,p={props:{user:{type:Object,required:!0},brightness:{type:Number,required:!0}},methods:{async addUser(){await this.$emit("add",this.user),this.user.friends=await m.getFriends(this.user.id)},removeUser(e){e.stopPropagation(),this.$emit("remove",this.user)},calculateAge(e){const[t,s,r]=e.split("."),n=new Date(r,s-1,t),i=new Date;let a=i.getFullYear()-n.getFullYear();const o=i.getMonth()-n.getMonth();return(o<0||0===o&&i.getDate()<n.getDate())&&a--,a}}},f=s(89);const v=(0,f.Z)(p,[["render",d]]);var _=v,w={components:{UserPanel:_},data(){return{searchInput:"",users:[]}},methods:{async searchUsers(){this.users=await m.searchUsers(this.searchInput)},removeUserFromList(e){this.$emit("remove",e)},addUser(e){this.$emit("add",e)},getBrightness(e){const t=this.users.find((t=>t.id===e));return this.$root.getBrightness(t)}}};const k=(0,f.Z)(w,[["render",u]]);var b=k;const y={class:"container"},F=(0,i._)("h2",null,"Friends List",-1),D=["onClick"],L=["src"];function U(e,t,s,r,n,a){const o=(0,i.up)("UserPanel");return(0,i.wg)(),(0,i.iD)("div",y,[F,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.sortedUsers,(e=>((0,i.wg)(),(0,i.iD)("ul",{class:"list",key:e.id},[(0,i._)("li",{class:"list__item",onClick:t=>a.redirectToFriend(e.id)},[(0,i.Wm)(o,{user:e,brightness:s.getBrightness(e)},null,8,["user","brightness"]),(0,i._)("img",{src:e.photo_100,alt:"friend photo"},null,8,L),(0,i.Uk)(" "+(0,c.zw)(e.first_name)+" "+(0,c.zw)(e.last_name)+" (Gender: "+(0,c.zw)(2===e.sex?"Male":"Female")+", Age: "+(0,c.zw)(e.bdate?a.calculateAge(e.bdate):"Not available")+", Friends: "+(0,c.zw)(e.count)+") ",1)],8,D)])))),128))])}var j={components:{UserPanel:_},props:["users","getBrightness"],methods:{redirectToFriend(e){this.$router.push({name:"User",params:{id:e}})},calculateAge(e){const t=new Date(e),s=new Date;let r=s.getFullYear()-t.getFullYear();const n=s.getMonth()-t.getMonth();return(n<0||0===n&&s.getDate()<t.getDate())&&r--,r}},computed:{sortedUsers(){return this.users.sort(((e,t)=>e.last_name.localeCompare(t.last_name)||e.first_name.localeCompare(t.first_name)))}}};const O=(0,f.Z)(j,[["render",U]]);var Z=O,W={components:{UserList:b,FriendsList:Z},data(){return{showFriendsList:!1,users:[]}},methods:{async buildFriendsList(){const e=this.users.map((e=>m.getFriends(e.id))),t=await Promise.all(e);let s=new Set;t.forEach((e=>{e.forEach((e=>{const t=JSON.stringify(e);s.add(t)}))})),this.users=Array.from(s).map((e=>JSON.parse(e))),this.showFriendsList=!0},addUserToList(e){this.users.find((t=>t.id===e.id))||this.users.push(e)},removeUserFromList(e){this.users=this.users.filter((t=>t.id!==e.id))},getBrightness(e){const t=Math.max(...this.users.map((e=>e.friends?e.friends.length:0)));return e.friends?e.friends.length/t*100:0},calculateAge(e){const[t,s,r]=e.split("."),n=new Date(r,s-1,t),i=new Date;let a=i.getFullYear()-n.getFullYear();const o=i.getMonth()-n.getMonth();return(o<0||0===o&&i.getDate()<n.getDate())&&a--,a}}};const C=(0,f.Z)(W,[["render",o]]);var B=C;const M=(0,i._)("h3",null,"Friends in Origin:",-1),Y=(0,i._)("h3",null,"Wall Posts:",-1);function H(e,t,s,r,n,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h2",null,"User: "+(0,c.zw)(n.user.first_name)+" "+(0,c.zw)(n.user.last_name),1),M,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.originFriends,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},(0,c.zw)(e.first_name)+" "+(0,c.zw)(e.last_name),1)))),128)),Y,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.userWallPosts,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("h3",null,(0,c.zw)(e.text),1)])))),128)),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>a.goBack&&a.goBack(...e))},"Back")])}var x=s(65),J={data(){return{user:null,userWallPosts:[],originFriends:[]}},async created(){const e=this.$route.params.id;this.user=await m.getUser(e),this.userWallPosts=await m.getWallPosts(e),this.originFriends=this.$store.state.originList.filter((t=>t.friends.some((t=>t.id===e))))},methods:{goBack(){this.$router.push("/")}},computed:{...(0,x.rn)({originList:e=>e.originList})}};const q=(0,f.Z)(J,[["render",H]]);var P=q;const z=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",component:B},{path:"/user/:id",component:P,name:"User"}]}),A=(0,r.ri)(B);A.use(z),A.mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],i=e[l][2];for(var o=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(o=!1,i<a&&(a=i));if(o){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,n,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],o=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(u)var l=u(s)}for(t&&t(r);c<a.length;c++)i=a[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(l)},r=self["webpackChunkvk_spa_vue3"]=self["webpackChunkvk_spa_vue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(941)}));r=s.O(r)})();
//# sourceMappingURL=app.79ea4bf1.js.map