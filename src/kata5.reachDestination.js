const reachDestination = (distance, speed) => {
    const eta = distance / speed;
    const roundedEta = Math.ceil(eta * 2) / 2;
    return `I should be there in ${roundedEta} hours.`
};

module.exports = reachDestination;
