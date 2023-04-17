<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/schedule">Schedule</router-link></li>
          <li><router-link to="/booking">Booking</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Your global styles here */
</style>
