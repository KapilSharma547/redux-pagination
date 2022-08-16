import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination/Pagination';
import { createContext, useCallback, useMemo } from 'react';
import Notification from './pagination/notification';
import { useDispatch, useSelector } from 'react-redux'
import { ApiData } from './store/actions/DataAction';


let data = createContext();
let data1 = createContext();
function App() {
  // --------------

  const dispatch = useDispatch();
  const product = useSelector((state) => state.getData.product)
  // console.log(product)

  // -------



  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [postperPage, setpostperPage] = useState(5);
  const [input, setInput] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let url = "https://jsonplaceholder.typicode.com/posts";
  //     setLoding(true);
  //     const res = await fetch(url);
  //     const result = await res.json();

  //     setPosts(result);
  //     if (result.length > 0) {
  //       setLoding(false);
  //     }
  //   }
  //   fetchData();
  // }, []);
  let [p, setP] = useState(false)


  useEffect(() => {
    dispatch(ApiData())
    setPosts(product);
    // console.log(product)
    if (product.length > 0) {
      setLoding(false);
    }
  }, [product])









  let memo = useMemo(() => {
    if (input == "") {
      return posts;
    }
    return posts.filter((cur) => {
      let data = cur.title.includes(input);
      return data;
    })
  }, [input, posts])
  // console.log(memo);

  // let m
  const lastpost = useCallback(() => {
    return currentPage * postperPage
  }, [currentPage])

  const firstpost = useCallback(() => {
    return lastpost() - postperPage
  }, [currentPage])



  const currentpost = useCallback(() => {
    return memo.slice(firstpost(), lastpost())
  })
  // console.log(currentpost());




  let name = "Kapil Sharma";
  let age = 24;
  let place = "Nfl Vijaypur";

  return (
    <div className="App">
      <data.Provider value={{
        posts: posts,
        setposts: setPosts,
        loding: loding,
        setLoding: setLoding,
        currentPage: currentPage,
        setCurrentpage: setCurrentpage,
        postperPage: postperPage,
        setpostperPage: setpostperPage,
        input: input,
        setInput: setInput,
        currentpost: currentpost,
      }}>
        <data1.Provider value={{
          // first: posts,
          // firstset: setPosts,
        }}>
          <Notification />
          <Pagination />
        </data1.Provider>
      </data.Provider  >


    </div >
  );
}
export { data, data1 }
export default App;
