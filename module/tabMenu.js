// anchor-to-select
// anchor-to-result
// anchor-to-mbti

const selectAnchorMenuDOM = document.getElementById("anchor-to-select");
const resultAnchorMenuDOM = document.getElementById("anchor-to-result");
const mbtiAnchorMenuDOM = document.getElementById("anchor-to-mbti");

const selectSectionDOM = document.getElementById("participate-section");
const resultSectionDOM = document.getElementById("result-section");
const mbtiSectionDOM = document.getElementById("mbti-section");

const setScrollHandler = (anchorDOM, targerDOM) => {
  anchorDOM.onclick = () => {
    const scrollTargetY = targerDOM.offsetTop;
    window.scroll({
      top: scrollTargetY,
      left: 0,
      behavior: "smooth",
    });
  };
};

export const setTabMenu = () => {
  // selectAnchorMenuDOM 클릭 -> selectSectionDOM 으로 스크롤 이동
  // 1) 직접구현
  //1. selectSectionDOM의 element 위치를 받아옴
  //2. window.scrollTo를 이용해서 해당 위치로 이동
  setScrollHandler(selectAnchorMenuDOM, selectSectionDOM);
  setScrollHandler(resultAnchorMenuDOM, resultSectionDOM);
  setScrollHandler(mbtiAnchorMenuDOM, mbtiSectionDOM);
};
