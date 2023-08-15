import { create } from 'zustand';
const useStore = create((set) => ({
//  counter: 0,
//  increment: () => set((state) => ({ counter: state.counter + 1 })),
//  decrement: () => set((state) => ({ counter: state.counter - 1 })),
    cart:[],
    addToCart: (item) => set((state)=>({ cart:state.cart.concat([item])})),
    removeFromCart: (item) => set((state)=>({ cart:removeOne(state.cart,item)})),
    setCart: (item) => set((state)=>({ cart:item}))
 }));
export default useStore;

const removeOne = (arr,item) => {
  const i=arr.find(el=>el.id===item.id)
    var idx = arr.indexOf(i);
  if (idx > -1) {
    arr.splice(idx, 1);
  }
  return arr;
}