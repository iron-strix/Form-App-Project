<template>
  <input
    :id="fieldId"
    type="checkbox"
    :checked="checked"
    class="mr-2"
    @input="(event) => $emit('update:checked', event.target.checked)"
  />
  <label :for="fieldId">
    {{ label }}
  </label>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
}
</script>
