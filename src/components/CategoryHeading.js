import React, { useEffect, useState } from "react";
import {
  category,
  categorytype1,
  categorytype2,
  categorytype3,
} from "../features/Activity/activity";
import { useSelector, useDispatch } from "react-redux";
import { Imagecategory, setImageCategory } from "../features/Activity/activity";
import {
  Sofasinfo,
  Coffeetablesinfo,
  Sidetablesinfo,
  Bedsinfo,
  Dressersinfo,
  Nightstandsinfo,
  Diningtableinfo,
  Dinningchairsinfo,
  Buffetsinfo,
  Kitchenislandsinfo,
  Barstoolsinfo,
  Diningsetsinfo,
  Desksinfo,
  Officechairsinfo,
  Bookshelvesinfo,
  PatioFurnituresinfo,
  GarderBenchesinfo,
  Hammocksinfo,
} from "./productjsons";

const CategoryHeading = () => {
  const categoryname = useSelector(category);
  const categorytype11 = useSelector(categorytype1);
  const categorytype22 = useSelector(categorytype2);
  const categorytype33 = useSelector(categorytype3);

  const imagecategory = useSelector(Imagecategory);

  const dispatch = useDispatch();

  const [categoryState, setCategoryState] = useState({
    state: "Sofas",
  });
  const CallMe = () => {
    useEffect(() => {
      if (categoryState) {
        dispatch(setImageCategory({ Imagecategory: categoryState.state }));
      }
    });
    //console.log(imagecategory);
  };
  CallMe();
  return (
    <div>
      <section className="headingcategories">
        <h1>{categoryname}</h1>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype11,
            });
            dispatch(setImageCategory({ Imagecategory: categoryState.state }));
            //console.log(imagecategory);
          }}
        >
          {categorytype11}
        </h3>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype22,
            });
            dispatch(setImageCategory({ Imagecategory: categoryState.state }));
            //console.log(imagecategory);
          }}
        >
          {categorytype22}
        </h3>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype33,
            });
            dispatch(setImageCategory({ Imagecategory: categoryState.state }));
            console.log(imagecategory);
          }}
        >
          {categorytype33}
        </h3>
      </section>
    </div>
  );
};

export default CategoryHeading;

/*

<div>
      <section className="headingcategories">
        <h1>{categoryname}</h1>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype11,
            });
            dispatch(setImageCategory({ Imagecategory: categoryState.state }));
            console.log(imagecategory);
          }}
        >
          {categorytype11}
        </h3>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype22,
            });
            dispatch(setImageCategory({ Imagecategory: categoryState.state }));
            console.log(imagecategory);
          }}
        >
          {categorytype22}
        </h3>
        <h3
          className="categories"
          onClick={() => {
            setCategoryState({
              state: categorytype33,
            });
            dispatch(setImageCategory(categoryState.state));
          }}
        >
          {categorytype33}
        </h3>
      </section>
    </div>


const onClicktype1 = () => {
    if (categorytype11 === "Sofas") {
      dispatch(
        setImageCategory({
          Imagecategory: Sofasinfo,
        })
      );
    } else if (categorytype11 === "Beds") {
      dispatch(
        setImageCategory({
          Imagecategory: Bedsinfo,
        })
      );
    } else if (categorytype11 === "Dining Tables") {
      dispatch(
        setImageCategory({
          Imagecategory: Diningtableinfo,
        })
      );
    } else if (categorytype11 === "Kitchen Islands") {
      dispatch(
        setImageCategory({
          Imagecategory: Kitchenislandsinfo,
        })
      );
    } else if (categorytype11 === "Desks") {
      dispatch(
        setImageCategory({
          Imagecategory: Desksinfo,
        })
      );
    } else if (categorytype11 === "Patio Furniture") {
      dispatch(
        setImageCategory({
          Imagecategory: PatioFurnituresinfo,
        })
      );
    }

    console.log(imagecategory);
  };

  const onClicktype1 = () => {
    if (categorytype11 === "Coffee Tables") {
      dispatch(setImageCategory(Sofasinfo));
    } else if (categorytype11 === "Dressers") {
      dispatch(setImageCategory(Bedsinfo));
    } else if (categorytype11 === "Dining Chairs") {
      dispatch(setImageCategory(Diningtableinfo));
    } else if (categorytype11 === "Bar Stools") {
      dispatch(setImageCategory(Kitchenislandsinfo));
    } else if (categorytype11 === "Office Chairs") {
      dispatch(setImageCategory(Desksinfo));
    } else if (categorytype22 === "Garden Benches") {
      dispatch(setImageCategory(PatioFurnituresinfo));
    }
  };
  const onClicktype2 = () => {
    if (categorytype22 === "Coffee Tables") {
      dispatch(setImageCategory(Sofasinfo));
    } else if (categorytype22 === "Dressers") {
      dispatch(setImageCategory(Bedsinfo));
    } else if (categorytype22 === "Dining Chairs") {
      dispatch(setImageCategory(Diningtableinfo));
    } else if (categorytype22 === "Bar Stools") {
      dispatch(setImageCategory(Kitchenislandsinfo));
    } else if (categorytype22 === "Office Chairs") {
      dispatch(setImageCategory(Desksinfo));
    } else if (categorytype22 === "Garden Benches") {
      dispatch(setImageCategory(PatioFurnituresinfo));
    }
  };
  const onClicktype3 = () => {
    if (categorytype22 === "Coffee Tables") {
      dispatch(setImageCategory(Sofasinfo));
    } else if (categorytype22 === "Dressers") {
      dispatch(setImageCategory(Bedsinfo));
    } else if (categorytype22 === "Dining Chairs") {
      dispatch(setImageCategory(Diningtableinfo));
    } else if (categorytype22 === "Bar Stools") {
      dispatch(setImageCategory(Kitchenislandsinfo));
    } else if (categorytype22 === "Office Chairs") {
      dispatch(setImageCategory(Desksinfo));
    } else if (categorytype22 === "Garden Benches") {
      dispatch(setImageCategory(PatioFurnituresinfo));
    }
  };

onClick={() => {
            if (categorytype22 === "Coffee Tables") {
              dispatch(setImageCategory(Sofasinfo));
            } else if (categorytype22 === "Dressers") {
              dispatch(setImageCategory(Bedsinfo));
            } else if (categorytype22 === "Dining Chairs") {
              dispatch(setImageCategory(Diningtableinfo));
            } else if (categorytype22 === "Bar Stools") {
              dispatch(setImageCategory(Kitchenislandsinfo));
            } else if (categorytype22 === "Office Chairs") {
              dispatch(setImageCategory(Desksinfo));
            } else if (categorytype22 === "Garden Benches") {
              dispatch(setImageCategory(PatioFurnituresinfo));
            }
          }}
*/
