const getWishlist = () => {
  const storedWishList = localStorage.getItem("wishList");

  if (storedWishList) {
    const storedWishListData = JSON.parse(storedWishList);
    return storedWishListData;
  } else {
    return [];
  }
};

const addToWishlist = (id) => {
  //console.log(id);

  const storedWishListData = getWishlist();
  if (storedWishListData.includes(parseInt(id))) {
    console.log("already included to your wishlist");
  } else {
    storedWishListData.push(id);
    const data = JSON.stringify(storedWishListData);
    localStorage.setItem("wishList", data);
  }
};

const getMarkedlist = () => {
  const storedMarkedList = localStorage.getItem("markedList");

  if (storedMarkedList) {
    const storedMarkedListData = JSON.parse(storedMarkedList);
    return storedMarkedListData;
  } else {
    return [];
  }
};

const addToMarkedList = (id) => {
  //console.log(id);

  const storedMarkedListData = getMarkedlist();
  if (storedMarkedListData.includes(parseInt(id))) {
    console.log("already included to your marked list");
  } else {
    storedMarkedListData.push(id);
    const data = JSON.stringify(storedMarkedListData);
    localStorage.setItem("markedList", data);
  }
};

export { addToMarkedList, getWishlist, getMarkedlist, addToWishlist };
