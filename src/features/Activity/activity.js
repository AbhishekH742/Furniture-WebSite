import { createSlice } from "@reduxjs/toolkit";
//import { Sofasinfo } from "../../components/productjsons";

const initialState = {
  forcloser: "closer",
  forshoppingcart: "shopping-cart",
  fornavbar: "navbar",
  forlogin: "login-form",
  foradmin: "no",
  forusername: "",
  forregister: "register",
  category: "Living Room",
  categorytype1: "Sofas",
  categorytype2: "Coffee tables",
  categorytype3: "Side tables",
  Imagecategory: "Sofas",
  productname: "",
  productimage: "",

  pid: 0,
  pname: "",
  pdesc: "",
  pquan: 0,
  pcattype: "",
  pprice: 0,

  CartPrice: 0,
};
const activity = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setCartPrice: (state, action) => {
      state.CartPrice = action.payload.CartPrice;
    },
    setusername: (state, action) => {
      state.forusername = action.payload.forusername;
    },
    setpvalues: (state, action) => {
      state.pid = action.payload.pid;
      state.pname = action.payload.pname;
      state.pdesc = action.payload.pdesc;
      state.pquan = action.payload.pquan;
      state.pcattype = action.payload.pcattype;
      state.pprice = action.payload.pprice;
    },
    setproductimage: (state, action) => {
      state.productname = action.payload.productname;
      state.productimage = action.payload.productimage;
    },
    setImageCategory: (state, action) => {
      state.Imagecategory = action.payload.Imagecategory;
    },
    setCategorytypes: (state, action) => {
      state.categorytype1 = action.payload.type1;
      state.categorytype2 = action.payload.type2;
      state.categorytype3 = action.payload.type3;
    },
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
    setadmin: (state, action) => {
      state.foradmin = "yes";
    },
    unsetadmin: (state, action) => {
      state.foradmin = "no";
    },

    setCloser: (state, action) => {
      state.forcloser = "closer-active";
    },
    unsetCloser: (state, action) => {
      state.forcloser = "closer";
    },
    setShoppingcart: (state, action) => {
      state.forshoppingcart = "shopping-cart shopping-cart-active";
    },
    unsetShoppingcart: (state, action) => {
      state.forshoppingcart = "shopping-cart";
    },
    setNavbar: (state, action) => {
      state.fornavbar = "navbar navbar-active";
    },
    unsetNavbar: (state, action) => {
      state.fornavbar = "navbar";
    },
    setLogin: (state, action) => {
      state.forlogin = "login-form login-form-active";
    },
    unsetLogin: (state, action) => {
      state.forlogin = "login-form";
    },
  },
});

export const {
  setCartPrice,
  setusername,
  setpvalues,
  setproductimage,
  setImageCategory,
  setCategorytypes,
  setCategory,
  setadmin,
  unsetadmin,
  setCloser,
  unsetCloser,
  setShoppingcart,
  unsetShoppingcart,
  setNavbar,
  unsetNavbar,
  setLogin,
  unsetLogin,
} = activity.actions;

export const CartPrice = (state) => state.activity.CartPrice;
export const forusername = (state) => state.activity.forusername;
export const pid = (state) => state.activity.pid;
export const pname = (state) => state.activity.pname;
export const pdesc = (state) => state.activity.pdesc;
export const pquan = (state) => state.activity.pquan;
export const pcattype = (state) => state.activity.pcattype;
export const pprice = (state) => state.activity.pprice;

export const productname = (state) => state.activity.productname;
export const productimage = (state) => state.activity.productimage;
export const imagecategoryarray = (state) => state.activity.imagecategoryarray;
export const Imagecategory = (state) => state.activity.Imagecategory;
export const categorytype1 = (state) => state.activity.categorytype1;
export const categorytype2 = (state) => state.activity.categorytype2;
export const categorytype3 = (state) => state.activity.categorytype3;
export const category = (state) => state.activity.category;
export const adminconfirm = (state) => state.activity.foradmin;

export const closer = (state) => state.activity.forcloser;
export const shoppingcart = (state) => state.activity.forshoppingcart;
export const NavbarSetting = (state) => state.activity.fornavbar;
export const LoginSetting = (state) => state.activity.forlogin;
export default activity.reducer;
