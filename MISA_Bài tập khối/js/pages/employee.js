$(document).ready(function () {
    loadData();
});

/**
 * Load dữ liệu
 * Created by: Hai(26/12/2022)
 */

function loadData() {

    try {
        //gọi api lấy dữ liệu
        fetch("https://cukcuk.manhnv.net/api/v1/employees")
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // xóa các dữ liệu có sẵn trong bảng
                $("table#tbEmployeeList tbody").empty();

                for (const employee of data) {
                    var employeeCode = employee.EmployeeCode;
                    let fullName = employee.FullName;
                    let genderName = employee["GenderName"];
                    let dateOfBirth = employee["DateOfBirth"];
                    let identifyNumber = employee["IdentityNumber"];
                    let positionName = employee["PositionName"];
                    let departmentName = employee["DepartmentName"]; 
                    //Xử lý dữ liệu
                    //định dạng dữ liệu ngày tháng
                    dateOfBirth = formatDate(dateOfBirth);
                    //Định dạng dữ liệu tiền tệ
                    //Build HTML

                    let trHTML = `<tr>
                                        <td class="text-align-center"><input type="checkbox"></td>
                                        <td class="text-align-left">${employeeCode}</td>
                                        <td class="text-align-left">${fullName}</td>
                                        <td class="text-align-left">${genderName}</td>
                                        <td class="text-align-center">${dateOfBirth}</td>
                                        <td class="text-align-left">${identifyNumber}</td>
                                        <td class="text-align-left">${positionName}</td>
                                        <td class="text-align-left">${departmentName}</td>
                                        <td class="text-align-left"></td>
                                        <td class="text-align-left"></td>
                                        <td class="text-align-right"></td> 
                                        <td>xxxx</td>
                                    </tr>`
                    $("table#tbEmployeeList tbody").append(trHTML);
                }
            })
            .catch(error => {
                console.log(error);
            })
            
    } catch (error) {
        console.log(error);
    }
    
    
}
