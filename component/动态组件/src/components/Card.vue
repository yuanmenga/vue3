<template>
  <div>
    <ul>
      <li>
        <slot />
      </li>
      <li>
        <slot name="header" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  ul {
    list-style: none;
    margin-top: 10px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    width: 40%;
    li {
      padding: 10px;
    }
    li:nth-child(1) {
      background-color: #f0f0f0;
      border-bottom: 1px solid rgb(240, 240, 240);
    }
  }
}
</style>
