<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-[100] flex items-center justify-center px-4"
      @click.self="closeModal"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="closeModal"
      ></div>

      <!-- Modal Content -->
      <div
        class="relative bg-yuktrix-black border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
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
          <h2 class="text-2xl font-bold text-white mb-2">Get Early Access</h2>
          <p class="text-gray-400 text-sm">
            Join the waitlist and be among the first to experience Yuktrix.
          </p>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name Field -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              required
              placeholder="Enter your full name"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8bb6d] focus:ring-1 focus:ring-[#e8bb6d] transition-colors"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8bb6d] focus:ring-1 focus:ring-[#e8bb6d] transition-colors"
            />
          </div>

          <!-- Phone Field -->
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              id="phone"
              required
              placeholder="Enter your phone number"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8bb6d] focus:ring-1 focus:ring-[#e8bb6d] transition-colors"
            />
          </div>

          <!-- Services Needed -->
          <div>
            <label
              for="services"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Services You Need <span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.services"
              id="services"
              required
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#e8bb6d] focus:ring-1 focus:ring-[#e8bb6d] transition-colors"
            >
              <option value="" disabled class="bg-yuktrix-black">
                Select a service
              </option>
              <option value="AI Learning Platform" class="bg-yuktrix-black">
                AI Learning Platform
              </option>
              <option value="AI Trading Tools" class="bg-yuktrix-black">
                AI Trading Tools
              </option>
              <option value="Strategy Development" class="bg-yuktrix-black">
                Strategy Development
              </option>
              <option value="Market Intelligence" class="bg-yuktrix-black">
                Market Intelligence
              </option>
              <option value="All Services" class="bg-yuktrix-black">
                All Services
              </option>
              <option value="Other" class="bg-yuktrix-black">Other</option>
            </select>
          </div>

          <!-- Additional Message (Optional) -->
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-300 mb-2"
            >
              Additional Message (Optional)
            </label>
            <textarea
              v-model="formData.message"
              id="message"
              rows="3"
              placeholder="Tell us more about your needs..."
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e8bb6d] focus:ring-1 focus:ring-[#e8bb6d] transition-colors resize-none"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-[#e8bb6d] text-black px-6 py-3 rounded-full font-bold text-base hover:bg-[#e8bb6d]/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            <span v-if="!isSubmitting">Submit Registration</span>
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

        <!-- Success Message -->
        <div
          v-if="showSuccessMessage"
          class="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
        >
          <p class="text-green-400 text-sm text-center">
            ✓ Registration submitted successfully! We'll contact you soon.
          </p>
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
  services: "",
  message: "",
});

const closeModal = () => {
  closeRegistrationModal();
  showSuccessMessage.value = false;
};

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // TODO: Replace with your actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData.value);

    showSuccessMessage.value = true;

    formData.value = {
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
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
