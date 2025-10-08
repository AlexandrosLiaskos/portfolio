/**
 * SERVICE MODAL COMPONENT
 * 
 * Handles opening and closing service detail modals.
 * 
 * Usage:
 *   openServiceModal() - Open the modal
 *   closeServiceModal() - Close the modal
 */

function openServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize modal click handlers
document.addEventListener('DOMContentLoaded', () => {
    const serviceModal = document.getElementById('serviceModal');
    
    // Close modal when clicking outside
    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target.id === 'serviceModal') {
                closeServiceModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
});

