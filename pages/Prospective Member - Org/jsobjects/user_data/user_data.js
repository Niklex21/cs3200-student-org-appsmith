export default {
	user_data: [],
	async onPageLoad () {
		const user_data = [];
		for (let row of get_executive_board.data) { 
			const data = await get_user_data.run({id: row[0]})
			user_data.push({"position": row[1], "firstName": data.firstName, "lastName": data.lastName})
		}
		storeValue("user_data", user_data);
		return user_data;
	},
}