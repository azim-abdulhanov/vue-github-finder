<template>
	<div class='search'>
		<div class='search__box'>
			<input
				v-model='search'
				@keydown.enter='getUserInfo'
				type='text'
				class='search__input'
				placeholder='Введите имя пользователя...'
			>
			<button @click='clear' v-show='showBtn' class='search__close'>✖</button>
		</div>
		<button @click='getUserInfo' class='search__btn'>Найти</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			search: ''
		}
	},
	computed: {
		showBtn() {
			return this.search.trim().length > 0;
		}
	},
	methods: {
		...mapActions(['userInfo']),
		getUserInfo() {
			this.userInfo(this.search)
		},
		clear() {
			this.search = ''
		},
	},
}
</script>

<style lang='scss'>
.search {
	display: flex;
	justify-content: center;
	&__box {
		max-width: 600px;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	&__input {
		width: 100%;
		padding: 10px 20px;
		background: #FFF;
		border: none;
		outline: none;
		border-radius: 5px 0 0 5px;

		&::placeholder {
			font-size: 15px;
			line-height: 120%;
			color: #C2C2C5;
		}
	}
	&__close {
		position: absolute;
		z-index: 2;
		top: 8px;
		right: 10px;
		background: none;
		cursor: pointer;
	}
	&__btn {
		background: #3F3F3F;
		font-size: 15px;
		line-height: 120%;
		padding: 0 10px;
		color: #FFF;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		text-transform: uppercase;
		transition: background .4s;
		&:hover {
			background: #1D1D1D;
		}
	}
}
</style>
