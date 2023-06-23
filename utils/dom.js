/* domType를 받아서, 해당 div , a, li 등 해당하는 element를 만들어 객체로 넘어온 property들을
  하나씩 할당해주고 dom을 return해준다.  */
export const makeDOMwithProperties = (domType, propertyMap) => {
  // TS의 필요성
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

export const appendChildrenList = (target, childrenList) => {
  // childrenList가 배열일 지 아닐 지 모름 -> 타입스크립트 필요
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};

// appendChildrenList(targetNode, [children1, children2, children3]);
