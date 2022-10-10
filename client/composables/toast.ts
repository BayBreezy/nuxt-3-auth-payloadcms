import { useToast as toasty } from "vue-toastification";

export const useToast = () => {
	const toast = toasty();
	return toast;
};
