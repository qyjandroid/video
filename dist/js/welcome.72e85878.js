"use strict";(self["webpackChunkvip_video_parsing"]=self["webpackChunkvip_video_parsing"]||[]).push([[773],{3740:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",[t._v("首页")]),s("el-breadcrumb-item",[t._v("欢迎")])],1),s("div",{staticClass:"wrap"},[s("div",{staticClass:"play_wrap",attrs:{id:"player"}},[s("div",{staticClass:"search_bar"},[s("img",{attrs:{src:i(680),alt:""}}),s("div",{staticStyle:{"font-size":"20px","font-weight":"600"}},[t._v("水星听月-乐携月")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",autocomplete:"off",placeholder:"请输入歌曲名或歌手名（回车Enter键搜索）"},domProps:{value:t.query},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.searchMusic.apply(null,arguments)},input:function(s){s.target.composing||(t.query=s.target.value)}}})]),s("div",{staticClass:"center_con"},[s("div",{staticClass:"song_wrapper"},[s("ul",{staticClass:"song_list"},t._l(t.musicList,(function(i){return s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.playMusic(i.id)}}}),s("b",{class:[i.id===t.ids?"activeName":""]},[t._v(t._s(i.name))]),0!=i.mvid?s("span",{on:{click:function(s){return t.playMV(i.mvid)}}},[s("i")]):t._e()])})),0),s("img",{staticClass:"switch_btn",attrs:{src:i(5700),alt:""}})]),s("div",{staticClass:"player_con",class:{playing:t.isPlaying}},[s("img",{staticClass:"play_bar",attrs:{src:i(8645)}}),s("img",{staticClass:"disc autoRotate",attrs:{src:i(1814)}}),s("img",{staticClass:"cover autoRotate",attrs:{src:t.musicCover}})]),s("div",{staticClass:"comment_wrapper"},[s("h5",{staticClass:"title"},[t._v("热门留言")]),s("div",{staticClass:"comment_list"},t._l(t.hotComments,(function(i){return s("dl",[s("dt",[s("img",{attrs:{src:i.user.avatarUrl,alt:""}})]),s("dd",{staticClass:"name"},[t._v(t._s(i.user.nickname))]),s("dd",{staticClass:"detail"},[t._v(" "+t._s(i.content)+" ")])])})),0),s("img",{staticClass:"right_line",attrs:{src:i(5700)}})])]),s("div",{staticClass:"audio_con"},[s("audio",{ref:"audio",staticClass:"myaudio",attrs:{src:t.musicUrl,controls:"",autoplay:"",loop:""},on:{play:t.play,pause:t.pause}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"video_con",staticStyle:{display:"none"}},[s("video",{attrs:{src:t.mvUrl,controls:"controls"}}),s("div",{staticClass:"mask",on:{click:t.hide}})])])])],1)},e=[],n=i(1773),c={name:"WelcomeView",data(){return{query:"",musicList:[],musicUrl:"",musicCover:"",hotComments:[],isPlaying:!1,isShow:!1,mvUrl:"",ids:""}},methods:{searchMusic:function(){var t=this;if(0===t.query.trim().length)return t.$message("请先输入想听的歌曲或歌手"),void(t.query="");n.Z.get("https://autumnfish.cn/search?keywords="+this.query).then((function(s){console.log(s),2===JSON.stringify(s.data.result).length?t.$message("当前搜索结果为空，请换一个想听的歌曲或歌手，谢谢！"):t.musicList=s.data.result.songs}),(function(t){})).catch((s=>{t.$message("接口出错啦，请刷新页面重试！")}))},playMusic:function(t){var s=this;s.ids=t,n.Z.get("https://autumnfish.cn/song/url?id="+t).then((function(t){console.log(t.data.data[0].url),s.musicUrl=t.data.data[0].url}),(function(t){})).catch((t=>{s.$message("接口出错啦，请刷新页面重试！")})),n.Z.get("https://autumnfish.cn/song/detail?ids="+t).then((function(t){console.log(t.data.songs[0].al.picUrl),s.musicCover=t.data.songs[0].al.picUrl}),(function(t){})).catch((t=>{s.$message("接口出错啦，请刷新页面重试！")})),n.Z.get("https://autumnfish.cn/comment/hot?type=0&id="+t).then((function(t){console.log(t),s.hotComments=t.data.hotComments}),(function(t){})).catch((t=>{s.$message("接口出错啦，请刷新页面重试！")}))},play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},playMV:function(t){var s=this;n.Z.get("https://autumnfish.cn/mv/url?id="+t).then((function(t){console.log(t.data.data.url),s.isShow=!0,s.mvUrl=t.data.data.url}),(function(t){})).catch((t=>{s.$message("接口出错啦，请刷新页面重试！")}))},hide:function(){this.mvUrl="",this.isShow=!1}},created(){document.querySelector(".el-notification")&&(document.querySelector(".el-notification").style.display="none")}},l=c,o=i(8412),r=(0,o.Z)(l,a,e,!1,null,"178e74a4",null),u=r.exports},1814:function(t,s,i){t.exports=i.p+"img/disc.d33183c8.png"},5700:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAG2CAYAAAC+rezwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCNTc3RjRCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZCNTc3RjNCQ0ZCMTFFOUJCRTJFNEM4MTRCRjY1OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEYyQjZEQzM5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEYyQjZEQzQ5Q0MxMTFFOUJBRjNCNUIwM0VFODQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6i1oRfAAAAdklEQVR42uxTWwrAIAyLPWzvf4Jtf4JiR/oAEfwJSRMKthWqKgKgdcAoV0BEJpBYhKiZUmIRk2XCbKtqWdgvnUvPNL3uzJkFj7qV/C2M7MKZ8HaYpAse0mAlwVhjJc3av0G4/tz+BsH3EjP1b4tgfkkYNnwCDAAzuqSgfrmyhAAAAABJRU5ErkJggg=="},8645:function(t,s,i){t.exports=i.p+"img/player_bar.4a845959.png"},680:function(t,s,i){t.exports=i.p+"img/player_title.ab80798d.png"}}]);