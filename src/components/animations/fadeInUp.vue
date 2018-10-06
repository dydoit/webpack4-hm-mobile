<template>
  <transition name="fade-in-up">
    <slot></slot>
  </transition>  
</template>
<style lang="stylus" scoped>
  .fade-in-up-enter,
  .fade-in-up-leave-to
    transform translate3d(0, 100%, 0)

  .fade-in-up-enter-active,
  .fade-in-up-leave-active
    transition all .2s ease-in-out

</style>

