<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-[#090a0a]/60 backdrop-blur-md transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal Content Container -->
      <div
        class="relative bg-[#cdcfd1] border border-white/20 rounded-3xl shadow-2xl max-w-lg w-full flex flex-col max-h-[92vh] transform transition-all overflow-hidden"
        @click.stop
      >
        <!-- Fixed Header & Close Button Area -->
        <div class="relative p-6 sm:p-8 border-b border-black/5 shrink-0 bg-[#cdcfd1] z-10">
          <button
            @click="closeModal"
            class="absolute top-6 right-6 text-gray-700 hover:text-black transition-all rounded-full bg-white/50 hover:bg-white border border-black/10 shadow-sm w-10 h-10 flex items-center justify-center z-20"
            aria-label="Close consultation form"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="pr-12">
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-[#090a0a] mb-2 uppercase tracking-tighter">
              Book Consultation
            </h2>
            <p class="text-gray-600 text-sm font-medium leading-tight">
              Build a structured, validated trading system for serious capital.
            </p>
          </div>
        </div>

        <!-- Scrollable Form Area -->
        <div class="flex-grow overflow-y-auto p-6 sm:p-8 custom-scrollbar">
          <!-- Registration Form -->
          <form v-if="!showSuccessMessage" @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                required
                placeholder="Enter your full name"
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all shadow-inner"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                required
                placeholder="Enter your professional email"
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all shadow-inner"
              />
            </div>

            <!-- Phone Field -->
            <div>
              <label for="phone" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                id="phone"
                required
                placeholder="Enter your contact number"
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all shadow-inner"
              />
            </div>

            <!-- You Represent -->
            <div>
              <label for="represent" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                You Represent <span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.represent"
                id="represent"
                required
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all cursor-pointer shadow-inner appearance-none"
              >
                <option value="" disabled>Select an option</option>
                <option value="High Net Worth Individual (HNI)">High Net Worth Individual (HNI)</option>
                <option value="Proprietary Trading Desk">Proprietary Trading Desk</option>
                <option value="Fund / Asset Management Firm">Fund / Asset Management Firm</option>
                <option value="Founder Building a Trading Desk">Founder Building a Trading Desk</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- What Are You Looking To Build -->
            <div>
              <label for="build" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Looking To Build? <span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.build"
                id="build"
                required
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all cursor-pointer shadow-inner appearance-none"
              >
                <option value="" disabled>Select an option</option>
                <option value="Strategy Structuring & Validation">Strategy Structuring & Validation</option>
                <option value="Full Trading System Architecture">Full Trading System Architecture</option>
                <option value="Automation & Execution Infrastructure">Automation & Execution Infrastructure</option>
                <option value="Risk Framework Design">Risk Framework Design</option>
                <option value="End-to-End Trading Desk Setup">End-to-End Trading Desk Setup</option>
              </select>
            </div>

            <!-- Approximate Capital Allocation -->
            <div>
              <label for="capital" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Capital Allocation
              </label>
              <select
                v-model="formData.capital"
                id="capital"
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all cursor-pointer shadow-inner appearance-none"
              >
                <option value="" disabled>Select an option</option>
                <option value="₹50L – ₹2Cr">₹50L – ₹2Cr</option>
                <option value="₹2Cr – ₹10Cr">₹2Cr – ₹10Cr</option>
                <option value="₹10Cr+">₹10Cr+</option>
                <option value="Prefer to discuss privately">Prefer to discuss privately</option>
              </select>
            </div>

            <!-- Objective -->
            <div>
              <label for="objective" class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 font-mono">
                Objective Description <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.objective"
                id="objective"
                rows="3"
                placeholder="Tell us what you’re trying to build or improve."
                required
                class="w-full px-4 py-3.5 bg-white/50 border border-black/10 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-[#db961f] focus:ring-1 focus:ring-[#db961f] transition-all resize-none shadow-inner"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-4 sticky bottom-0 bg-[#cdcfd1] pb-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-[#090a0a] text-white px-6 py-4 rounded-full font-bold text-base hover:bg-[#db961f] hover:text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl uppercase tracking-widest"
              >
                <span v-if="!isSubmitting">Request Consultation</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccessMessage"
            class="flex flex-col items-center justify-center py-12 text-center"
          >
            <div class="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 animate-bounce">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#090a0a] mb-2 uppercase tracking-tighter">Registration Successful</h3>
            <p class="text-gray-600">Our engineering team will reach out to schedule your consultation within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import { useRegistration } from "~/composables/useRegistration";

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
  approach: "Exploring structured trading",
  objective: "",
});

const closeModal = () => {
  closeRegistrationModal();
  showSuccessMessage.value = false;
};

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwWLJAYrYe0hSGVHtvBzYTSRnZhGVMfPOWQWSuFUjoV48D7nOle7GNCpRk58X8VHitb/exec";

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    const payload = new URLSearchParams({
      ...formData.value,
      pageUrl: process.client ? window.location.href : "",
      userAgent: process.client ? navigator.userAgent : "",
    });

    await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    showSuccessMessage.value = true;
    setTimeout(closeModal, 2500);
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
}
</style>