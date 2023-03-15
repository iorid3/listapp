import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import apiCalls from "./api/apiCall";
import Card from "../comps/card";
import ModalBase from "../comps/modal";
import ModalCard from "../comps/modalCard";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f9e8ff",
});

const Wrapper = styled.div({
  width: "80%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Home = () => {
  const [list, setList] = useState([]);
  const [arrangeList, setArrangeList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setpageSize] = useState(20);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  useEffect(() => {
    getAllList();
  }, []);

  const getAllList = async () => {
    if (count < 1) {
      const listInfo = await apiCalls.getAllLists();
      const dataList: any = listInfo;
      setCount(count + 1);
      if (dataList) {
        setList(dataList);
      }
    }
  };

  const loadMore = async () => {
    if (list) {
      setArrangeList(list);
      const visibleData = list.slice(startIndex, endIndex);
      if (endIndex <= list.length) {
        setArrangeList([...arrangeList, ...visibleData]);
        setCurrentPage(currentPage + 1);
      }
      // if (!list) {
      //   setHasMore(false);
      //   return;
      // }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = (i: any) => {
    setIsOpen(true);
    setSelectedIndex(i);
  };

  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  const items = (
    <>
      <Container>
        <Wrapper>
          <div>REL Technology - FE assignment</div>
          {arrangeList?.map((index, i) => (
            <React.Fragment key = {i}>
              <Card
                listTitle={index["title"]}
                listWord={(index["body"] as string).substring(0, 100)}
                onclick={() => handleOpen(i)}
              />
              <ModalBase isOpen={isOpen} onClose={handleClose}>
                {selectedIndex !== null && (
                  <ModalCard
                    listUserId={arrangeList[selectedIndex]["userId"]}
                    listId={arrangeList[selectedIndex]["id"]}
                    listTitle={arrangeList[selectedIndex]["title"]}
                    listWord={arrangeList[selectedIndex]["body"]}
                  />
                )}
              </ModalBase>
            </React.Fragment>
          ))}
        </Wrapper>
      </Container>
    </>
  );
  if (list) {
    return (
      <>
        <Container>
          <InfiniteScroll
            pageStart={1}
            loadMore={loadMore}
            hasMore={endIndex <= list.length}
            loader={loader}
          >
            {items}
          </InfiniteScroll>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <div>
            Sorry.Something wrong with this page.Please contact to
            example@mail.com
          </div>
        </Container>
      </>
    );
  }
};

export default Home;
