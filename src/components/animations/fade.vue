<template>
  <transition name="fade-in">
    <slot></slot>
  </transition>
</template>
<style lang="stylus" scoped>
  .fade-in-enter,
  .fade-in-leave-to
    opacity 0
  .fade-in-enter-active,
  .fade-in-leave-active
    transition opacity .5s
</style>

