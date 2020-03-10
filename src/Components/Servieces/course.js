import Axios from 'axios';

class CourseService {
    fetchCourseDetail(id) {
        return Axios({
            method: 'GET',
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
        })
    }
    fetchCourse() {
        return Axios({
            method: 'GET',
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP11`
        })
    }
    fetchCategory(){
        return Axios({
            method: 'GET',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc'
        })
    }
    fetchCategoryDetail(name){
        return Axios({
            method: 'GET',
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${name}&MaNhom=GP01`
        })
    }
    fetchCourseSearch(keyword){
        return Axios({
            method: "GET",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP01`
        })
    }
}
export default CourseService;