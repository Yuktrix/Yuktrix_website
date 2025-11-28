<template>
  <div class="min-h-screen flex flex-col font-futura">
    <AppHeader />
    <!-- <Preloader /> -->
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
