if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (reg) {
            console.log("Service worker enregistrĂ©.");
        }).catch(function (err) {
            console.log("Service worker non enregistrĂ©. Erreur:", err)
        });
}