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
            delete value[key];
        }
    }
    //combine num_comments and num_comments_comparator
    if (value.num_comments && value.num_comments_comparator) {
        value.num_comments = `${value.num_comments_comparator}${value.num_comments}`;
    }
    //combine score and score_comparator
    if (value.score && value.score_comparator) {
        value.score = `${value.score_comparator}${value.score}`;
    }
    //remove score_comparator and num_comments_comparator
    delete value.score_comparator;
    delete value.num_comments_comparator;
    delete value.type;
    return value;
}