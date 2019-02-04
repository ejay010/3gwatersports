<template>
<span>
  <!-- Navigation -->
  <a class="menu-toggle rounded" href="#" @click="toggleNavBar">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a class="js-scroll-trigger" href="#page-top" id="menuHeader">3G's Water Sports</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#page-top">Home</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#about">About</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#activities">Activites</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#contact">Contact Us</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#contact">Book Now!</a>
      </li>

    </ul>
  </nav>
</span>
</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    toggleNavBar() {
      $('#sidebar-wrapper').toggleClass('active')

      // $('.menu-toggle').click(function(e) {
      // e.preventDefault();
      // $('#sidebar-wrapper').toggleClass('active')
      // eslint-disable-next-line
      // $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times')
      // $(this).toggleClass('active')
      // });
    }
  }
}
</script>

<style>
#menuHeader {
  font-family: 'Raleway', sans-serif;
}
</style>
