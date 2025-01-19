<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar Expenses
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay :breakpoint="700" side="left" behavior="desktop" bordered>
      <q-list padding class="menu-list">
        <q-item exact clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section>
            About
          </q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon name="menu" />
          </q-item-section>

          <q-item-section>
            Tags
          </q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/charts">
          <q-item-section avatar>
            <q-icon name="menu" />
          </q-item-section>

          <q-item-section>
            Charts
          </q-item-section>
        </q-item>

        <q-item v-if="!Dark.isActive" clickable v-ripple @click="toggleDarkMode">
          <q-item-section avatar>
            <q-icon name="dark_mode" />
          </q-item-section>

          <q-item-section>
            Dark Mode
          </q-item-section>
        </q-item>

        <q-item v-else clickable v-ripple @click="toggleDarkMode">
          <q-item-section avatar>
            <q-icon name="light_mode" />
          </q-item-section>

          <q-item-section>
            Light Mode
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { Dark } from 'quasar';

function toggleDarkMode() {
  Dark.toggle();
};

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
