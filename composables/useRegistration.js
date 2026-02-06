export const useRegistration = () => {
  const showModal = useState("registrationModal", () => false);

  const openRegistrationModal = () => {
    showModal.value = true;
    if (process.client) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeRegistrationModal = () => {
    showModal.value = false;
    if (process.client) {
      document.body.style.overflow = "";
    }
  };

  return {
    showModal,
    openRegistrationModal,
    closeRegistrationModal,
  };
};
