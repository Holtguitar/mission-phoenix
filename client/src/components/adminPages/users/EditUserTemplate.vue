<template>
  <div class="edit-title"><h2>Edit User</h2></div>
  <div class="edit-buttons">
    <button @click.prevent="this.cancelEditUser">Cancel</button>
    <button @click.prevent="this.submitEditUser">Submit</button>
  </div>
  <div class="user-card">
    <div class="row-1" id="edit-row">
      <input
        type="text"
        :placeholder="this.firstName"
        v-model="this.$store.state.editUser.firstName"
      />
      <input
        type="text"
        :placeholder="this.lastName"
        v-model="this.$store.state.editUser.lastName"
      />
      <input
        type="text"
        :placeholder="this.userName"
        v-model="this.$store.state.editUser.userName"
      />
    </div>
    <div class="row-2" id="edit-row">
      <div class="vet-status__container">
        <p>Vet Status</p>
        <select
          :default="this.vetStatus"
          v-model="this.$store.state.editUser.vetStatus"
        >
          <option>Veteran</option>
          <option>Current Service Member</option>
          <option>Veteran Spouse/Family</option>
          <option>Veteran Supporter</option>
        </select>
      </div>
      <input
        type="text"
        :placeholder="this.emailAddress"
        v-model="this.$store.state.editUser.emailAddress"
      />
      <input
        type="text"
        :placeholder="this.phoneNumber"
        v-model="this.$store.state.editUser.phoneNumber"
      />
    </div>
    <div class="row-3" id="edit-row">
      <div class="sub-edit-row">
        <label>Subscribed To News Letter</label>
        <input
          type="checkbox"
          name="admin"
          :checked="this.subscribedToEmails ? true : false"
          v-model="this.$store.state.editUser.subscribedToEmails"
        />
      </div>
      <div class="sub-edit-row">
        <label>Admin</label>
        <input
          type="checkbox"
          name="admin"
          :checked="this.admin ? true : false"
          v-model="this.$store.state.editUser.admin"
        />
      </div>
    </div>
    <div class="row-4" id="edit-row">
      <input
        type="text"
        :placeholder="this.addressLine1"
        v-model="this.$store.state.editUser.addressLine1"
      />
      <input
        type="text"
        :placeholder="this.addressLine2"
        v-model="this.$store.state.editUser.addressLine2"
      />
    </div>
    <div class="row-5" id="edit-row">
      <input
        type="text"
        :placeholder="this.city"
        v-model="this.$store.state.editUser.city"
      />
      <input
        type="text"
        :placeholder="this.state"
        v-model="this.$store.state.editUser.state"
      />
      <input
        type="text"
        :placeholder="this.zip"
        v-model="this.$store.state.editUser.zip"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'firstName',
    'lastName',
    'emailAddress',
    'admin',
    'userName',
    'phoneNumber',
    'addressLine1',
    'addressLine2',
    'state',
    'city',
    'zip',
    'subscribedToEmails',
    'vetStatus',
  ],
  methods: {
    submitEditUser(id) {
      this.$store.dispatch('EditUser')
    },
    cancelEditUser() {
      this.$store.state.editUser = {}
      this.$router.push('/user-accounts-display')
    },
  },
  mounted() {},
}
</script>

<style>
.user-card {
  left: 12.5%;
  margin-top: 10%;
  height: 80vh;
  width: 50vw;
  position: relative;
  box-shadow: 1px 1px 3px 2px rgba(41, 43, 89, 0.488);
  text-align: center;
  /* padding: 5px; */
}

.user-card input {
  position: relative;
  height: 25%;
  top: 37.5%;
  max-width: 25%;
}

.edit-buttons {
  position: absolute;
  width: 20%;
  height: 30px;
  left: 65%;
  top: 20%;
  display: flex;
  justify-content: space-between;
}

.edit-buttons button {
  width: 45%;
  height: 100% !important;
  color: rgb(81, 81, 81) !important;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 2px rgba(41, 43, 89, 0.488);
}

.edit-title {
  position: absolute;
  width: 15%;
  height: 50px;
  left: 70%;
  top: 0% !important;
  text-decoration: underline;
}

#edit-row {
  position: relative;
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
  border: 1px solid grey;
}

.row-4 input {
  max-width: 40%;
  width: 40% !important;
}

.sub-edit-row {
  position: relative;
  display: flex;
  width: 30%;
  height: 25%;
  top: 37.5%;
  justify-content: center;
  gap: 5%;
}

.sub-edit-row label,
.sub-edit-row input {
  position: relative;
  height: 50%;
  top: 25%;
}

.vet-status__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 25%;
  width: 40%;
  top: 37.5%;
}
</style>
