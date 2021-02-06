function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
            if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
            helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([13,27,73,94,335,65,227,48,9])