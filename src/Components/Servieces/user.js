import Axios from 'axios';


class UserServices {
    signUp(data) {
        return Axios({
            method: 'POST',
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data,
        })
    }
    signIn(user) {
        return Axios({
            method: 'POST',
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user,
        })
    }

}
export default UserServices;