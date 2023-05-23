var removeNonNumeric = function (value) {
    return (value || '').toString().replace(/[^0-9.]/g, '');
};
export default {
    removeNonNumeric: removeNonNumeric,
};
//# sourceMappingURL=tools.js.map