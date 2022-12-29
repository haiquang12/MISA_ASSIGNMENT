/**
 * Định dạng ngày tháng
 * 
 */
function formatDate(dateTime){
    try {
        if(dateTime != null && dateTime != undefined){
            // Chuyển thành dữ liệu ngày tháng:
            dateTime = new Date(dateTime);
            let date = dateTime.getDate();
            let month = dateTime.getMonth() + 1;
            let year = dateTime.getFullYear();
        
            // ghép ngày tháng năm lại
            return `${date}/${month}/${year}`;
        }
        else{
            return "";
        }
        
    } catch (error) {
        return "";
    }
}

/**
 * Định dạng tiền
 */
function formatMoney(){
    
}