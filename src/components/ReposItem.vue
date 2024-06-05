<template>
  <div class='repos__item'>
    <div class='repos__left'>
      <h3>{{ repos.name }}</h3>
      <p>Кол-во звёзд: {{ repos.stargazers_count }} ⭐</p>
      <p>Дата добавления: {{ new Date(repos.created_at).toLocaleDateString() }}</p>
    </div>
		<div class='repos__right'>
			<a :href='repos.html_url' target='_blank'>Посетить</a>
		</div>
  </div>
</template>

<script>
export default {
  props: {
    repos: Object,
  },
}
</script>

<style lang='scss'>
.repos {
  &__item {
    max-width: 585px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background: #FFF;
    margin: 0 auto;
  }
  &__left {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
      margin: 5px 0;
    }
  }
	&__right {
		a {
			color: #FFF;
			font-size: 15px;
			font-weight: 400;
			line-height: 120%;
			border-radius: 5px;
			background: #3F3F3F;
			padding: 8px 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100px;
			height: 35px;
      text-transform: uppercase;
      transition: background .4s;
      &:hover {
        background: #1D1D1D;
      }
		}
	}
}
</style>
