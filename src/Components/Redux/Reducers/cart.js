const initialState = {
    cart: []
}

const CartReduce = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            let gioHangCapNhat = [...state.cart];
            let index = gioHangCapNhat.findIndex(spGH => (
                spGH.maKhoaHoc === action.spCart.maKhoaHoc
            ));
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1
            } else {
                gioHangCapNhat.push(action.spCart)
            }
            state.cart = gioHangCapNhat;
            return { ...state };
        case "DELETE_CART":
            {
                let gioHangCapNhat = [...state.cart]; 
                let index = gioHangCapNhat.findIndex(spGH => (
                    spGH.maKhoaHoc === action.spCart.maKhoaHoc
                ));
                if (index !== -1) {
                    gioHangCapNhat.splice(0,1)
                } else {
                    alert('Không tồn tại khóa học')
                }
                state.cart = gioHangCapNhat;
                return { ...state }
            }
        default:
            return { ...state }
    }
}
export default CartReduce;