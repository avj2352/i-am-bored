import { toast } from 'react-toastify';

export function showToasterTimed (type:'info' | 'success' | 'error', msg: string) {
    const options = {
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    };
    switch (type) {
        case 'info':
            return toast.info(msg, options);
        case 'success':
            return toast.success(msg, options);
        case 'error':
            return toast.error(msg, options);
        default:
            return toast.info(msg, options);
    }
}