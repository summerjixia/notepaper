<template>
  <div>
    <van-swipe-cell stop-propagation>
      <div
        class="content_div"
        :style="{background:obj.isTop===0?'white':'#FAFAD2'}"
        @click="$router.push({name:'addnotepaper',params:obj})"
      >
        <div class="content_list">
          <div class="content_title">
            <span class>{{obj.title}}</span>
            <span class="content_date">{{obj.noteDate}}</span>
          </div>
          <p class="conent_p">{{obj.words}}</p>
          <div class="hr"></div>
        </div>
      </div>
      <template #right>
        <van-button square type="danger" text="删除" @click="deleteNote(index,obj)" />
        <van-button
          square
          type="primary"
          :text="obj.isTop===0?'置顶':'取消置顶'"
          @click="topping(index,obj)"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { updateTop, deleteNotePaper } from "../data/api";
export default {
  methods: {
    topping(key, obj) {
      updateTop({ listId: obj.listId, isTop: obj.isTop === 0 ? 1 : 0 }).then(
        () => {
          obj.isTop = obj.isTop === 0 ? 1 : 0;
          this.$emit("isTopList", key, obj);
        }
      );
    },
    deleteNote(index, obj) {
      deleteNotePaper({ listId: obj.listId }).then(() => {
        this.$emit("deleteNote", index);
      });
    }
  },
  props: {
    obj: {
      required: true
    },
    index: {
      required: true
    }
  }
};
</script>

<style scoped>
.content_div {
  padding-top: 15px;
}

.content_list {
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Arial, Helvetica, sans-serif;
}
.content_title {
  width: 90%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content_title span:nth-child(1) {
  font-weight: bold;
}

.content_date {
  font-size: 14px;
  opacity: 0.7;
}

.conent_p {
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
  font-size: 15px;
  width: 90%;
  text-align: left;
}
.hr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
}

.van-button {
  height: 100%;
}

.van-swipe-cell__right {
  font-size: 0;
}
</style>