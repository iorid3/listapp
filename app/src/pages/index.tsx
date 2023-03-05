import styled from '@emotion/styled'
import  React,{useEffect,useState} from 'react'

import InfiniteScroll  from "react-infinite-scroller"

import ApiCalls from './api/apiCall'
import Card from '../comps/card'
import ModalBase from '../comps/modal'
import ModalCard from '../comps/modalCard'


const Container = styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
})

const Wrapper = styled.div({
  width:'80%',
  height:'80%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
})



const Home=() => {
  const[list, setList] =useState([])
  const[arrangeList, setArrangeList] =useState([])
  const[hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const[count, setCount] = useState(0);
  const[pageSize, setpageSize] = useState(20);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;


  useEffect(() => {
    getAllList()
  }, []);

  const page = 5
  
  const getAllList = async () => {
    if(count<1){
      const listInfo = await ApiCalls().getAllLists(page)
      const dataList:any = listInfo
      setCount(count+1)
      if(dataList){
        setList(dataList)
      }
    }
   }
    
   const loadMore = async () => {
      if(list){
        setArrangeList(list)
        const visibleData = list.slice(startIndex, endIndex);
        if (endIndex <= list.length){
          setArrangeList([...arrangeList, ...visibleData])
          setCurrentPage(currentPage + 1);
         }
      if (!list) {
        setHasMore(false);
        return;
      }
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = (i:any) => {
    setIsOpen(true);
    setSelectedIndex(i);
  };


  const loader =<div className="loader" key={0}>Loading ...</div>;


  const items = (
    <>
    <Container>
        <Wrapper >
          <div>Welcome</div>
        {arrangeList.map((index,i) =>(
          <>
          <Card key = {i} listTitle ={index['title']} 
          listWord = { (index['body'] as string).substring(0, 100)} 
          onclick ={()=>handleOpen(i)} />
          <ModalBase 
            isOpen={isOpen}
            onClose={handleClose}>
          {selectedIndex !== null && (
          <ModalCard
            listUserId={arrangeList[selectedIndex]['userId']}
            listId={arrangeList[selectedIndex]['id']}
            listTitle={arrangeList[selectedIndex]['title']}
            listWord={arrangeList[selectedIndex]['body']}
          />
        )}
          </ModalBase>
          </>
         ))}
        </Wrapper>
    </Container>
    </>
   );


  return (
    <>
       <Container>
      
       <InfiniteScroll
          pageStart={1}
          loadMore={loadMore}  
          hasMore={endIndex <= list.length}        
          loader={loader}>      
            {items}            
        </InfiniteScroll>
        
       </Container>
  
    </>
  )
}

export default Home
