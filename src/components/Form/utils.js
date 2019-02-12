export const isFormValid = (value) => value.match(/^(?=.{2,12}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$/);

const handleFetchedData = (data) => {
    return !Array.isArray(data) ? [data] : data;
}

export const fetchDataAndHandleResponse = (setTableData, toggleLoaderDisplay, toggleErrorMessageDisplay, testerName) => {
    var urlPath = 'https://test-api.techsee.me/api/ex/' + testerName;
    fetch(urlPath)
        .then(function(response) {            
            if(response.status === 200) {  
                toggleLoaderDisplay(true); 
                response.json()
                    .then((data) => {
                        var result = handleFetchedData(data);
                        toggleLoaderDisplay(false);
                        return setTableData(result);
                    })
                    .catch(function(error) {
                        toggleLoaderDisplay(false);
                        toggleErrorMessageDisplay(true, error.message);
                    })
            } else {          
                toggleErrorMessageDisplay(true, `Request rejected with status ${response.status}`);      
                throw Error(`Request rejected with status ${response.status}`);
            }            
        })
        .catch(function(error) {
            toggleErrorMessageDisplay(true, error.message);
        })
}