const sumAll = function(startNum, endNum) {
    let sumAll = 0;
    if (startNum < 0) 
    {
        return "ERROR";
    }
    if (endNum < 0) 
    {
        return "ERROR";
    }
    if (!Number.isInteger(startNum) ||!Number.isInteger(endNum))
    {
    return "ERROR";
    }
    if (endNum > startNum) 
    {
        for (let i = startNum; i <= endNum; i++) 
        {
            sumAll += i;
        }
    }
    else
    {
        for (let i = endNum; i <= startNum; i++) 
        {
            sumAll += i;
        }
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
