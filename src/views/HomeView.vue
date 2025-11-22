<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Form v-slot="{ errors }" @submit="onSubmit" >
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email" rules="email|required"
        v-model="user.email"
      ></Field>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" rules="required" v-model="user.name" placeholder="請輸入姓名"></Field>
      <error-message name="姓名" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">電話</label>
      <Field
        id="phone"
        name="電話"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
        placeholder="請輸入電話"
        :rules="isPhone"
        v-model="user.phone"
      ></Field>
      <error-message name="電話" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="region" class="form-label">地區</label>
      <Field
        id="name"
        name="area"
        class="form-control"
        :class="{ 'is-invalid': errors['area'] }"
        placeholder="請輸入地區"
        rules="required"
        v-model="user.region"
        as="select"
      >
        <option value="">請選擇地區</option>
        <option value="台北市">台北市</option>
        <option value="高雄市">高雄市</option>
      </Field>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">地址</label>
      <Field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required" v-model="user.address"></Field>
      <error-message name="地址" class="invalid-feedback"></error-message>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onsubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
