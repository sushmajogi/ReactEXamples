//ArrayLookup for matching scenario.
function checkStatus(status){
    if(status === 'success' || status === 'ok' || status === 'done')
    {
        return true;
    }else {
        return false;
    }
}

// Refactored function
 function checkstatus1(status){
    return ['success', 'ok', 'done'].includes(status);
 }
