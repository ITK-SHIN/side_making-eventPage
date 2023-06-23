//dom : innerHTML 이 갱신될 노드
//target : 목표 숫자
// second : 총 몇 초가 걸릴 지 -> 5
// term : 몇 초마다 함수 실행할 지 -> 15

// countTerm : 한 term에 몇이 증가해야 하는지 -> second, term으로 계산해서 넣어주기

export const countUp = (dom, target, second, term = 15) => {
  if (
    !dom ||
    isNaN(Number(target)) ||
    isNaN(Number(second)) ||
    isNaN(Number(term))
  )
    return;

  const countTerm = Math.floor((target / second) * (term / 1000));
  console.log(countTerm);
  let nowNumber = 0;

  const timerID = setInterval(() => {
    //타이머가 돌아감 -> 자원을 쓰고 있음
    if (nowNumber >= target) {
      nowNumber = target;
      clearInterval(timerID); //타이머 중지
      return;
    }

    nowNumber += countTerm;
    dom.innerHTML = `${nowNumber.toLocaleString()}`;
  }, term); // term초마다 해당 함수 실행
};
