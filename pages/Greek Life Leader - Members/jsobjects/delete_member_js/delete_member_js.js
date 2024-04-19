export default {
	selectedUserID: null,

	// Function to store the selected user ID and open the confirmation modal
	storeUserIDAndShowConfirm (currentID) {
		// Assuming currentItem is an object with userID as a property
		this.selectedUserID = currentID
		storeValue('selectedUserID', currentID);
		// Replace 'confirm_delete_modal' with the actual name of your modal
		showModal('confirm_delete_modal');
		showAlert('User ID is: ' + currentID)
	},

	// Function to run the delete API call
	async deleteUser () {
		// Check if the selectedUserID is stored and not null
		if (this.selectedUserID) {
			try {
				// Construct the endpoint with the stored user ID
				const response = await delete_member.run({
					pathParams: { userID: this.selectedUserID }
				});


				// Handle the success response
				// Add whatever logic you need here, like refreshing the list
				showAlert('Member deleted successfully.', 'success');

				// Optionally, close the modal if it's still open
				closeModal('confirm_delete_modal');

				// Clear the selected user ID after deletion
				this.selectedUserID = null;

			} catch (error) {
				// Handle any errors
				showAlert('Failed to delete member: ' + error.message, 'error');
			}
		} else {
			// Handle the case where selectedUserID was not set
			showAlert('No member selected for deletion.', 'error');
		}
	},
};
