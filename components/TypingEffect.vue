<template>
  <span ref="typedText" class="text-[#e8bb6d]"></span>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const typedText = ref(null);
let timeoutId = null;

const words = [
  "Research",
  "Screeners",
  "Indicators",
  "Strategy Builder",
  "Backtests",
  "Live Trading",
  "Automation",
  "Insights",
  "Risk Alerts",
  "Portfolio View",
  "Community",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Remove character
    typedText.value.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Add character
    typedText.value.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // Set typing speed
  let typeSpeed = isDeleting ? 60 : 120;

  // Check if word is complete
  if (!isDeleting && charIndex === currentWord.length) {
    // Pause at end of word
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Move to next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  timeoutId = setTimeout(typeEffect, typeSpeed);
};

onMounted(() => {
  if (typedText.value) {
    typeEffect();
  }
});

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>
