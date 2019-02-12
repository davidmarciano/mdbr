export const sortBy = (data,field) => {
    // check if field exist in data
    return data.sort((a,b) => {
        if(a[field] < b[field]) {
            return -1;
        }
        if(a[field] > b[field]) {
            return 1;
        }
        return 0;           
    });
}