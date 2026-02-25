<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-[100] flex items-center justify-center px-4"
      @click.self="closeModal"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="closeModal"
      ></div>

      <!-- Modal Content -->
      <div
        class="relative bg-[#cdcfd1] border border-black/10 rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Modal Header -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-black mb-2">
            Book a Consultation
          </h2>
          <p class="text-gray-600 text-sm">
            Build a structured, validated trading system for serious capital.
          </p>
        </div>

        <!-- Registration Form -->
        <form v-if="!showSuccessMessage" @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name Field -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              required
              placeholder="Enter your full name"
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              required
              placeholder="Enter your professional email"
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            />
          </div>

          <!-- Phone Field -->
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              id="phone"
              required
              placeholder="Enter your contact number"
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            />
          </div>

          <!-- You Represent -->
          <div>
            <label
              for="represent"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              You Represent <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.represent"
              id="represent"
              required
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            >
              <option value="" disabled class="bg-[#cdcfd1]">
                Select an option
              </option>
              <option value="High Net Worth Individual (HNI)" class="bg-[#cdcfd1]">
                High Net Worth Individual (HNI)
              </option>
              <option value="Proprietary Trading Desk" class="bg-[#cdcfd1]">
                Proprietary Trading Desk
              </option>
              <option value="Fund / Asset Management Firm" class="bg-[#cdcfd1]">
                Fund / Asset Management Firm
              </option>
              <option value="Founder Building a Trading Desk" class="bg-[#cdcfd1]">
                Founder Building a Trading Desk
              </option>
              <option value="Other" class="bg-[#cdcfd1]">Other</option>
            </select>
          </div>

          <!-- What Are You Looking To Build -->
          <div>
            <label
              for="build"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              What Are You Looking To Build? <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.build"
              id="build"
              required
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            >
              <option value="" disabled class="bg-[#cdcfd1]">
                Select an option
              </option>
              <option value="Strategy Structuring & Validation" class="bg-[#cdcfd1]">
                Strategy Structuring & Validation
              </option>
              <option value="Full Trading System Architecture" class="bg-[#cdcfd1]">
                Full Trading System Architecture
              </option>
              <option value="Automation & Execution Infrastructure" class="bg-[#cdcfd1]">
                Automation & Execution Infrastructure
              </option>
              <option value="Risk Framework Design" class="bg-[#cdcfd1]">
                Risk Framework Design
              </option>
              <option value="End-to-End Trading Desk Setup" class="bg-[#cdcfd1]">
                End-to-End Trading Desk Setup
              </option>
            </select>
          </div>

          <!-- Approximate Capital Allocation -->
          <div>
            <label
              for="capital"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Approximate Capital Allocation (Optional but Recommended)
            </label>
            <select
              v-model="formData.capital"
              id="capital"
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            >
              <option value="" disabled class="bg-[#cdcfd1]">
                Select an option
              </option>
              <option value="₹50L – ₹2Cr" class="bg-[#cdcfd1]">
                ₹50L – ₹2Cr
              </option>
              <option value="₹2Cr – ₹10Cr" class="bg-[#cdcfd1]">
                ₹2Cr – ₹10Cr
              </option>
              <option value="₹10Cr+" class="bg-[#cdcfd1]">₹10Cr+</option>
              <option value="Prefer to discuss privately" class="bg-[#cdcfd1]">
                Prefer to discuss privately
              </option>
            </select>
          </div>

          <!-- Current Trading Approach -->
          <div>
            <label
              for="approach"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Current Trading Approach <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.approach"
              id="approach"
              required
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors"
            >
              <option value="" disabled class="bg-[#cdcfd1]">
                Select an option
              </option>
              <option value="Discretionary Manual Trading" class="bg-[#cdcfd1]">
                Discretionary Manual Trading
              </option>
              <option value="Semi-Systematic" class="bg-[#cdcfd1]">
                Semi-Systematic
              </option>
              <option value="Fully Systematic but needs refinement" class="bg-[#cdcfd1]">
                Fully Systematic but needs refinement
              </option>
              <option value="Exploring structured trading" class="bg-[#cdcfd1]">
                Exploring structured trading
              </option>
            </select>
          </div>

          <!-- Objective -->
          <div>
            <label
              for="objective"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Briefly Describe Your Objective <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model="formData.objective"
              id="objective"
              rows="3"
              placeholder="Tell us what you’re trying to build or improve."
              required
              class="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#db961f] text-black px-6 py-3 rounded-full font-bold text-base hover:bg-[#db961f]/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            <span v-if="!isSubmitting">Request Strategic Consultation</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          </button>
        </form>

        <!-- Success Popup -->
        <div
          v-if="showSuccessMessage"
          class="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm"
        >
          <div
            class="flex flex-col items-center gap-3 bg-white/90 border border-green-500/30 rounded-2xl px-8 py-6 shadow-xl transform transition-all scale-100"
          >
            <div class="flex items-center justify-center w-14 h-14 rounded-full bg-green-500/15 border border-green-500/40">
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p class="text-green-700 text-base font-semibold text-center">
              Registration submitted!
            </p>
            <p class="text-green-700/80 text-sm text-center">
              We’ll contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";

const { showModal, closeRegistrationModal } = useRegistration();

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  represent: "",
  build: "",
  capital: "",
  approach: "",
  objective: "",
});

const closeModal = () => {
  closeRegistrationModal();
  showSuccessMessage.value = false;
};

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwWLJAYrYe0hSGVHtvBzYTSRnZhGVMfPOWQWSuFUjoV48D7nOle7GNCpRk58X8VHitb/exec";

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const payload = new URLSearchParams({
      ...formData.value,
      pageUrl: process.client ? window.location.href : "",
      userAgent: process.client ? navigator.userAgent : "",
    });

    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: payload.toString(),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    let result = null;
    try {
      result = await response.json();
    } catch (error) {
      result = null;
    }

    if (result && result.ok === false) {
      throw new Error(result.error || "Submission failed");
    }

    console.log("Form submitted:", formData.value);

    showSuccessMessage.value = true;

    formData.value = {
      name: "",
      email: "",
      phone: "",
      represent: "",
      build: "",
      capital: "",
      approach: "",
      objective: "",
    };

    setTimeout(() => {
      closeModal();
    }, 2000);
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
