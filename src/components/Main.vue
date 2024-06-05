<template>
	<main class='main'>
		<div class='container'>
			<Search/>
			<h2 v-if="error" class='error'>{{ error }}</h2>
			<User/>
			<Repos/>
		</div>
	</main>
</template>

<script>
import Search from '@/components/Search'
import User from '@/components/User'
import Repos from '@/components/Repos'
import { mapState } from 'vuex'

export default {
	components: {
		Search,
		User,
		Repos
	},
	computed: {
		...mapState(['error'])
	}
}
</script>

<style lang='scss'>
.main {
	padding: 20px;
	.error {
		color: red;
		margin: 30px auto;
		text-align: center;
		font-size: 22px;
	}
}
</style>
