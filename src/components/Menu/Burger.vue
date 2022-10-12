<template>
  <div
    id="burger"
    :class="{ 'active' : isSidebarOpen }"
  >
    <slot>
      <button
        class="burger-button"
        title="Menu"
        type="button"
      >
        <span class="burger-bar burger-bar--1" />
        <span class="burger-bar burger-bar--2" />
        <span class="burger-bar burger-bar--3" />
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.burger-button {
  background-color: transparent;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  display: block;
  height: 30px;
  pointer-events: all;
  position: relative;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1);
  width: 32px;
  z-index: 4;
}

.burger-button:focus {
  outline: 0;
}

.burger-bar {
  background-color: var(--body-bg-color);
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1),
  opacity .3s cubic-bezier(.165, .84, .44, 1),
  background-color .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #000;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
