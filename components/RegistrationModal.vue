<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
    >
      <!-- Backdrop with premium blur -->
      <div
        class="absolute inset-0 bg-[#090a0a]/80 backdrop-blur-xl transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal Content Container -->
      <div
        class="relative bg-[#cdcfd1] border border-white/40 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-lg w-full flex flex-col max-h-[92vh] transform transition-all overflow-hidden"
        @click.stop
      >
        <!-- Fixed Header & Close Button Area -->
        <div class="relative p-8 border-b border-black/5 shrink-0 bg-[#cdcfd1] z-10">
          <button
            @click="closeModal"
            class="absolute top-8 right-8 text-white hover:text-black transition-all rounded-full bg-[#090a0a] hover:bg-[#db961f] shadow-lg w-10 h-10 flex items-center justify-center z-20 group"
            aria-label="Close consultation form"
          >
            <svg class="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="pr-12">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-[#db961f] animate-pulse"></span>
              <span class="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#090a0a]/50">Engagement Protocol</span>
            </div>
            <h2 class="text-3xl font-display font-bold text-[#090a0a] mb-2 uppercase tracking-tighter">
              Book <span class="text-[#db961f]">Consultation</span>
            </h2>
            <p class="text-gray-600 text-sm leading-tight font-medium max-w-[280px]">
              Initialize technical assessment for structured system implementation.
            </p>
          </div>
        </div>

        <!-- Scrollable Form Area -->
        <div class="flex-grow overflow-y-auto p-8 custom-scrollbar bg-white/30">
          <!-- Registration Form -->
          <form v-if="!showSuccessMessage" @submit.prevent="handleSubmit" class="space-y-6">
            
            <!-- Section: Identity -->
            <div class="space-y-4">
              <h3 class="text-[10px] font-mono font-bold text-[#db961f] uppercase tracking-[0.2em] border-b border-[#db961f]/20 pb-2">01 // Personal Details</h3>
              
              <div class="grid grid-cols-1 gap-4">
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="FULL NAME *"
                  class="w-full px-5 py-4 bg-[#090a0a] border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#db961f] transition-all font-mono text-sm uppercase tracking-wider"
                />
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="PROFESSIONAL EMAIL *"
                  class="w-full px-5 py-4 bg-[#090a0a] border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#db961f] transition-all font-mono text-sm uppercase tracking-wider"
                />
                <input
                  v-model="formData.phone"
                  type="tel"
                  required
                  placeholder="CONTACT NUMBER *"
                  class="w-full px-5 py-4 bg-[#090a0a] border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-[#db961f] transition-all font-mono text-sm uppercase tracking-wider"
                />
              </div>
            </div>

            <!-- Section: Qualification -->
            <div class="space-y-4 pt-4">
              <h3 class="text-[10px] font-mono font-bold text-[#db961f] uppercase tracking-[0.2em] border-b border-[#db961f]/20 pb-2">02 // Technical Parameters</h3>
              
              <!-- Represent -->
              <div>
                <label class="block text-[9px] font-mono font-bold text-[#090a0a]/40 uppercase tracking-widest mb-2 ml-1">Entity Type</label>
                <select v-model="formData.represent" required class="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all cursor-pointer font-bold text-xs uppercase tracking-widest appearance-none">
                  <option value="" disabled>Select Entity Type</option>
                  <option value="HNI">Individual Participant (HNI)</option>
                  <option value="Proprietary">Proprietary Trading Desk</option>
                  <option value="Fund">Fund / Asset Management Firm</option>
                  <option value="Founder">Founder Building Internal Desk</option>
                  <option value="Other">Other Institutional Entity</option>
                </select>
              </div>

              <!-- Implementation Tier (Synchronized with Services node names) -->
              <div>
                <label class="block text-[9px] font-mono font-bold text-[#090a0a]/40 uppercase tracking-widest mb-2 ml-1">Implementation Tier</label>
                <select v-model="formData.build" required class="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all cursor-pointer font-bold text-xs uppercase tracking-widest appearance-none">
                  <option value="" disabled>Select Tier</option>
                  <option value="Audit">Plan 01 // Infrastructure Audit (Independent Review)</option>
                  <option value="Foundation">Plan 02 // Foundation Deployment (Single Strat)</option>
                  <option value="Pro">Plan 03 // The Multi-Node (Scaling Logic)</option>
                  <option value="Institutional">Plan 04 // The Sovereign (Institutional Engine)</option>
                  <option value="Governance">Plan 05 // The Sentinel (Sentinel Governance)</option>
                </select>
              </div>

              <!-- Capital Allocation -->
              <div>
                <label class="block text-[9px] font-mono font-bold text-[#090a0a]/40 uppercase tracking-widest mb-2 ml-1">Capital Deployment (INR)</label>
                <select v-model="formData.capital" class="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all cursor-pointer font-bold text-xs uppercase tracking-widest appearance-none">
                  <option value="" disabled>Select Capital Bucket</option>
                  <option value="₹50L – ₹2Cr">₹50L – ₹2Cr</option>
                  <option value="₹2Cr – ₹10Cr">₹2Cr – ₹10Cr</option>
                  <option value="₹10Cr+">₹10Cr+ (Institutional Scale)</option>
                  <option value="Private">Prefer to discuss privately</option>
                </select>
              </div>

              <!-- Eligibility Check -->
              <div>
                <label class="block text-[9px] font-mono font-bold text-[#090a0a]/40 uppercase tracking-widest mb-2 ml-1">Strategy Maturity</label>
                <select v-model="formData.approach" required class="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl text-[#090a0a] focus:outline-none focus:border-[#db961f] transition-all cursor-pointer font-bold text-xs uppercase tracking-widest appearance-none">
                  <option value="" disabled>Select Rule Structure</option>
                  <option value="Rule-Based">Fully rule-based (Mathematically absolute)</option>
                  <option value="Semi-Systematic">Semi-Systematic (Needs formalization)</option>
                  <option value="Discretionary">Discretionary (Needs Structuring Phase)</option>
                </select>
              </div>
            </div>

            <!-- Section: Objective -->
            <div class="space-y-4 pt-4">
              <h3 class="text-[10px] font-mono font-bold text-[#db961f] uppercase tracking-[0.2em] border-b border-[#db961f]/20 pb-2">03 // Project Scope</h3>
              <textarea
                v-model="formData.objective"
                rows="3"
                placeholder="BRIEFLY DESCRIBE YOUR SYSTEM OBJECTIVES... *"
                required
                class="w-full px-5 py-4 bg-white border border-black/10 rounded-2xl text-[#090a0a] placeholder-[#090a0a]/20 focus:outline-none focus:border-[#db961f] transition-all resize-none font-medium text-sm shadow-sm"
              ></textarea>
            </div>

            <!-- Submit Action -->
            <div class="pt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-[#090a0a] text-white px-6 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] italic hover:bg-[#db961f] hover:text-[#090a0a] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-2xl"
              >
                <span v-if="!isSubmitting">Initialize Engineering Protocol</span>
                <span v-else class="flex items-center justify-center gap-3">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  VALIDATING...
                </span>
              </button>
              <p class="text-center mt-6 font-mono text-[9px] text-black/30 uppercase tracking-[0.3em]">Institutional Grade // Secured Gateway</p>
            </div>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccessMessage"
            class="flex flex-col items-center justify-center py-16 text-center"
          >
            <div class="w-24 h-24 rounded-3xl bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center mb-8 animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-3xl font-display font-bold text-[#090a0a] mb-3 uppercase tracking-tighter">Protocol Activated</h3>
            <p class="text-gray-600 font-medium">Our engineering team will contact you within 24 business hours to schedule the technical assessment.</p>
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

// AUTO-INPUT LOGIC: Map selected node from Services.vue to Implementation Tier
watch(showModal, (isOpen) => {
  if (isOpen && selectedPlan?.value) {
    formData.value.build = selectedPlan.value;
  }
});

const closeModal = () => {
  closeRegistrationModal();
  showSuccessMessage.value = false;
};

// Updated Google Apps Script Endpoint
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzOWf6YoyoPzinFbvmfPGsmT8gIP2mZ9zDto6YFlgiMRYhuRe5DqHG3n3QDalNfMHXF/exec";

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
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!response.ok) throw new Error("Network fault");

    showSuccessMessage.value = true;
    
    // Clear data after success
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

    setTimeout(closeModal, 3500);
  } catch (error) {
    console.error("Submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
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

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23db961f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.25rem center;
  background-size: 1.25rem;
}
</style>