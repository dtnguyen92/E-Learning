import Axios from 'axios';

class CourseService {
    fetchCourseDetail(id) {
        return Axios({
            method: 'GET',
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
    fetchCourse() {
        return Axios({
            method: 'GET',
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP11`,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
    fetchCategory() {
        return Axios({
            method: 'GET',
            url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
    fetchCategoryDetail(name) {
        return Axios({
            method: 'GET',
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${name}&MaNhom=GP01`,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
    fetchCourseSearch(keyword) {
        return Axios({
            method: "GET",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP01`,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        })
    }
}
export default CourseService;