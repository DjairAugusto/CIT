export default function validateZipCode(zipCode) {
    const zipCodePattern = /^[0-9]{5}-[0-9]{3}$/;
    return zipCodePattern.test(zipCode);
}
