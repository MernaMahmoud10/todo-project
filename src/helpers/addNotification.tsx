import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

export const useAddNotification = (message: string, title: string, type: NOTIFICATION_TYPE | undefined) => {

    Store.addNotification({
        title: title,
        message: message ?? "",
        type: type,
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
            duration: 3000,
            onScreen: true,
            pauseOnHover: true,
        },
    });

}