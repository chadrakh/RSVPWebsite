export type RSVPData = {
    name: string;
    telNumber: string;
    isAttending: boolean;
    guestCount: number;
    message: string;
};

export const handleRSVPFormSubmit = (guestData: RSVPData) => {
    // Add functionality for form submission
    console.log('GuestData:', guestData);
};