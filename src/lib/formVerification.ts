export default function formVerification(form) {
    const value = Object.fromEntries(form.entries());
    // convert before and after to epoch
    if (value.before) {
        value.before = new Date(value.before).getTime() / 1000;
    }
    if (value.after) {
        value.after = new Date(value.after).getTime() / 1000;
    }
    // convert checkboxes to bools
    for (const key in value) {
        if (value[key] === "on") {
            value[key] = true;
        }
    }
    // convert empty strings to null
    for (const key in value) {
        if (value[key] === "") {
            value[key] = null;
        }
    }
    return value;
}