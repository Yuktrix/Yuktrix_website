<template>
  <Teleport to="body">
    <div v-if="showModal" class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-[#090a0a]/85 backdrop-blur-xl" @click="closeModal"></div>

      <!-- Modal -->
      <div
        class="relative bg-white border border-[#090a0a]/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] max-w-md w-full flex flex-col max-h-[92vh] overflow-hidden"
        @click.stop
      >
        <!-- Header -->
        <div class="relative p-7 border-b border-[#090a0a]/8 shrink-0">
          <button
            @click="closeModal"
            class="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#090a0a]/5 hover:bg-[#090a0a]/10 flex items-center justify-center text-[#090a0a]/50 hover:text-[#090a0a] transition-all"
            aria-label="Close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex items-center gap-2 mb-3 pr-10">
            <span class="w-2 h-2 rounded-full bg-[#db961f] animate-pulse"></span>
            <span class="text-[10px] font-mono font-semibold uppercase tracking-[0.3em] text-[#090a0a]/40">Strategy Assessment</span>
          </div>
          <h2 class="text-2xl font-display font-bold text-[#090a0a] mb-1 tracking-tight">
            Schedule Your <span class="text-[#db961f]">Strategy Assessment</span>
          </h2>
          <p class="text-[#090a0a]/50 text-sm font-light">
            Tell us about your trading setup. We'll evaluate fit and recommend the best starting point.
          </p>
        </div>

        <!-- Scrollable Form -->
        <div class="flex-grow overflow-y-auto p-7 custom-scrollbar bg-[#fafafa]">
          <form v-if="!showSuccessMessage" @submit.prevent="handleSubmit" class="space-y-5">

            <!-- Identity -->
            <div class="space-y-3">
              <input
                v-model="formData.name"
                type="text"
                required
                placeholder="Full Name *"
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] placeholder-[#090a0a]/30 focus:outline-none focus:border-[#db961f] transition-all text-sm"
              />
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="Email Address *"
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] placeholder-[#090a0a]/30 focus:outline-none focus:border-[#db961f] transition-all text-sm"
              />
              <input
                v-model="formData.phone"
                type="tel"
                required
                placeholder="WhatsApp Number *"
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] placeholder-[#090a0a]/30 focus:outline-none focus:border-[#db961f] transition-all text-sm"
              />
            </div>

            <!-- I am a... -->
            <div>
              <label class="block text-xs font-semibold text-[#090a0a]/40 uppercase tracking-widest mb-2">I am a...</label>
              <select
                v-model="formData.represent"
                required
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your profile</option>
                <option value="Independent Trader">Independent Trader</option>
                <option value="HNI">HNI (₹50L+ capital)</option>
                <option value="Prop Desk">Prop Desk</option>
                <option value="Fund Manager">Fund Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- Strategy Maturity -->
            <div>
              <label class="block text-xs font-semibold text-[#090a0a]/40 uppercase tracking-widest mb-2">Where is your strategy right now?</label>
              <select
                v-model="formData.approach"
                required
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled>Select current stage</option>
                <option value="Rule-Based">Fully rule-based — ready to automate</option>
                <option value="Semi-Systematic">Semi-systematic — needs formalization</option>
                <option value="Discretionary">Discretionary — needs structuring first</option>
              </select>
            </div>

            <!-- Current Setup -->
            <div>
              <label class="block text-xs font-semibold text-[#090a0a]/40 uppercase tracking-widest mb-2">Current trading setup (optional)</label>
              <textarea
                v-model="formData.objective"
                rows="3"
                placeholder="Briefly describe your current setup, strategies, or what you're working with..."
                class="w-full px-4 py-3.5 bg-white border border-[#090a0a]/10 rounded-xl text-[#090a0a] placeholder-[#090a0a]/25 focus:outline-none focus:border-[#db961f] transition-all resize-none text-sm"
              ></textarea>
            </div>

            <!-- What are you looking for? -->
            <div>
              <label class="block text-xs font-semibold text-[#090a0a]/40 uppercase tracking-widest mb-3">What are you looking for?</label>
              <div class="grid grid-cols-2 gap-2">
                <label
                  v-for="option in lookingForOptions"
                  :key="option.value"
                  class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all text-sm"
                  :class="formData.lookingFor.includes(option.value) ? 'bg-[#db961f]/10 border-[#db961f]/40 text-[#090a0a] font-semibold' : 'bg-white border-[#090a0a]/8 text-[#090a0a]/60 hover:border-[#090a0a]/20'"
                >
                  <input
                    type="checkbox"
                    :value="option.value"
                    v-model="formData.lookingFor"
                    class="hidden"
                  />
                  <span class="w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all" :class="formData.lookingFor.includes(option.value) ? 'bg-[#db961f] border-[#db961f]' : 'border-[#090a0a]/20'">
                    <svg v-if="formData.lookingFor.includes(option.value)" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {{ option.label }}
                </label>
              </div>
            </div>

            <!-- Submit -->
            <div class="pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-[#090a0a] text-white px-6 py-4 rounded-xl font-bold text-sm hover:bg-[#db961f] hover:text-[#090a0a] transition-all disabled:opacity-50 shadow-lg"
              >
                <span v-if="!isSubmitting">Request Assessment</span>
                <span v-else class="flex items-center justify-center gap-3">
                  <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              </button>
              <p class="text-center mt-4 text-[10px] text-[#090a0a]/30 font-medium">
                Your information is confidential. No signals. No spam.
              </p>
            </div>
          </form>

          <!-- Success -->
          <div v-if="showSuccessMessage" class="flex flex-col items-center justify-center py-14 text-center">
            <div class="w-20 h-20 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mb-6">
              <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold text-[#090a0a] mb-3 tracking-tight">Request Received</h3>
            <p class="text-[#090a0a]/55 text-sm font-light max-w-xs leading-relaxed">We'll review your setup and reach out within 24 hours to schedule your strategy assessment.</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRegistration } from "~/composables/useRegistration";

const { showModal, selectedPlan, closeRegistrationModal } = useRegistration();

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

const lookingForOptions = [
  { value: "Strategy validation", label: "Strategy validation" },
  { value: "Backtesting review", label: "Backtesting review" },
  { value: "Full system build", label: "Full system build" },
  { value: "Execution automation", label: "Execution automation" },
  { value: "Risk framework", label: "Risk framework" },
  { value: "Not sure yet", label: "Not sure yet" },
];

const formData = ref({
  name: "",
  email: "",
  phone: "",
  represent: "",
  approach: "",
  objective: "",
  lookingFor: [],
  build: "",
});

watch(showModal, (isOpen) => {
  if (isOpen && selectedPlan?.value) {
    formData.value.build = selectedPlan.value;
  }
});

const closeModal = () => {
  closeRegistrationModal();
  showSuccessMessage.value = false;
};

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzOWf6YoyoPzinFbvmfPGsmT8gIP2mZ9zDto6YFlgiMRYhuRe5DqHG3n3QDalNfMHXF/exec";

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    const payload = new URLSearchParams({
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      represent: formData.value.represent,
      approach: formData.value.approach,
      objective: formData.value.objective,
      lookingFor: formData.value.lookingFor.join(", "),
      build: formData.value.build,
      pageUrl: process.client ? window.location.href : "",
      userAgent: process.client ? navigator.userAgent : "",
    });

    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!response.ok) throw new Error("Network error");

    showSuccessMessage.value = true;
    formData.value = { name: "", email: "", phone: "", represent: "", approach: "", objective: "", lookingFor: [], build: "" };
    setTimeout(closeModal, 3500);
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.08); border-radius: 10px; }

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23db961f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.1rem;
}
</style>
