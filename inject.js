(function tryRun() {
    if (typeof submitLearn === 'function') {
        submitLearn();
    } else {
        setTimeout(tryRun, 1000);
    }
})();
