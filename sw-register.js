if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (reg) {
            console.log("Service worker enregistré.");
        }).catch(function (err) {
            console.log("Service worker non enregistré. Erreur:", err)
        });
}