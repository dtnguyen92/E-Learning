import Axios from 'axios';


class UserServices {
    signUp(data) {
        return Axios({
            method: 'POST',
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
    signIn(user) {
        return Axios({
            method: 'POST',
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }

}
export default UserServices;