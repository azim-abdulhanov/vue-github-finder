<template>
  <div class='user' v-if='user'>
    <div class='user__left'>
      <img :src='user.avatar_url' alt='user-avatar' />
      <a target='_blank' :href='user.html_url' class='user__left-link'>Посетить</a>
    </div>
    <div class='user__right'>
      <p>Имя: {{ user.login }}</p>
      <p>Репозиториев: <span>{{ user.public_repos }}</span></p>
      <p>Создан: <span>{{ new Date(user.created_at).toLocaleDateString() }}</span></p>
      <p>Подписчики: <span>{{ user.followers }}</span></p>
      <p>Подписок: <span>{{ user.following }}</span></p>
    </div>
  </div>
  <div class='sort' v-if="repositories">
    <h2 class='sort__title'>Сортировка</h2>
    <div class='sort__box'>
      <button
        class='sort__box-btn'
        v-for='(btn, index) in btns'
        :key='btn.name'
        :class='{ active: isActive == index }'
        @click='sort(index, btn.type)'
      >
        {{ btn.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      isActive: 0,
      btns: [
        { name: 'ИМЯ', type: 'name' },
        { name: 'ЗВЕЗДЫ', type: 'stargazers_count' },
        { name: 'ДАТА', type: 'created_at' },
      ],
    }
  },
  computed: {
    ...mapState(['user', 'repositories']),
  },
  methods: {
    ...mapMutations(['changeSort']),
    sort(index, type) {
      this.isActive = index
      this.changeSort(type)
    },
  },
}
</script>

<style lang='scss'>
.user {
  max-width: 400px;
  width: 100%;
  padding: 15px 30px;
  background: #FFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px auto;
  &__left {
    & img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 5px;
    }
    &-link {
      width: 100%;
      height: 35px;
      background: #3F3F3F;
      border-radius: 5px;
      font-size: 15px;
      line-height: 120%;
      text-transform: uppercase;
      color: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background .4s;
      &:hover {
        background: #1D1D1D;
      }
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & p {
      font-size: 15px;
      line-height: 120%;
      color: #3F3F3F;
      font-weight: 700;
      & span {
        font-weight: 400;
      }
    }
  }
}

.sort {
  margin: 20px auto;
  &__title {
    color: #3F3F3F;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 10px;
  }
  &__box {
    background: #E0E0E0;
    border-radius: 5px;
    padding: 4px;
    display: flex;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
    gap: 4px;
    &-btn {
      padding: 8px 24px;
      font-size: 16px;
      line-height: 120%;
      text-transform: uppercase;
      border-radius: 5px;
      cursor: pointer;
      &.active {
        background: #FFF;
      }
    }
  }
}
</style>
