const just_log_it = (req, res, next) => {
    console.log(`just_log_it`);
    next();
}

module.exports = just_log_it;