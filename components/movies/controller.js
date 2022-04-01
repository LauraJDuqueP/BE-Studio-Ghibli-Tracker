const store = require('./store');

function listMovies() {
    //
}

function addMessage (user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[movie controller] No hay usuario o mensaje');
            return reject("Los datos son incorrectos");
            return false;
        }
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        store.add(fullMessage);
        resolve(fullMessage);
    });
}


function getMessages () {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addMessage,
    getMessages,
};