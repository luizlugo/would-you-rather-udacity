export const HANDLE_NAVIGATION = 'HANDLE_NAVIGATION';

export function handleNavigation(option) {
    return {
        type: HANDLE_NAVIGATION,
        option
    }
}