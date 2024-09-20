document.addEventListener('DOMContentLoaded', function() {
    const xmrAddress = "monero:8ACnJR8c7kNMSUdZd9QRjfh4Ne88BFrYwigjLFYZzYt345sq6H9qosxYbpUfbTmasoXeUCfjkMExGVVdGJLpAghxSTAEbWE";

    function copyXMRAddress() {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = xmrAddress;
        document.body.appendChild(tempInput);

        // Select the text and copy it to clipboard
        tempInput.select();
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Change the button text and icon
        const donateButton = document.querySelector('.xmr_donate_button');
        const originalText = donateButton.querySelector('label').textContent;
        const originalIcon = donateButton.querySelector('i').textContent;

        donateButton.querySelector('label').textContent = 'Copied to clipboard!';
        donateButton.querySelector('i').textContent = 'content_copy';

        // Revert back to the original text and icon after 5 seconds
        setTimeout(() => {
            donateButton.querySelector('label').textContent = originalText;
            donateButton.querySelector('i').textContent = originalIcon;
        }, 5000);
    }

    // Attach the copyXMRAddress function to the button's click event
    const donateButton = document.querySelector('.xmr_donate_button');
    donateButton.addEventListener('click', copyXMRAddress);
});
