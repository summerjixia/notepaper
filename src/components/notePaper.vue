<template>
  <div>
    <van-swipe-cell stop-propagation>
      <div
        class="content_div"
        :style="{background:obj.isTop===0?'white':'#FAFAD2'}"
        @click="$router.push({name:'addnotepaper',params:obj})"
      >
        <span class="content_date">{{obj.noteDate}}</span>
        <div class="content_list">
          <span class="content_title">{{obj.title}}</span>
          <span>
            <p class="conent_p">{{obj.words}}</p>
          </span>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
}

.content_title {
  font-size: 20px;
  font-weight: bold;
}

.content_date {
  width: 15%;
}

.content_list {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Arial, Helvetica, sans-serif;
}
.conent_p {
  height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
}
.hr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
}

.van-button {
  height: 100%;
}

.van-swipe-cell__right{
  font-size: 0;
}
</style>