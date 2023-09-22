/*
    promise: 객체
    객체의 담겨있는 데이터의 상태값을 가지고있는
    pending: 대기
    fullfind: 성공적으로 작업의 수행이 완료된상태
    rejected: 작업의 요청이 거절된상태

    작업시간이 오래걸리는 업무를 수행할떄 프로머스로 반환하면
    해당 작업완료이후 동기적으로 다음작업을 선형화해서 수행 (es5)
*/
fetch('DB/department.json')
    .then((data)=>{
        // 이전 메서드에서 반환된 프로미스가 fullfind 상태일떄 실행
        console.log(data)// json 형태로 parsing 되지 않은 raw data
        const result = data.json() //json 형태로 반환시 promise로 반환
        result.then((json)=>{
            console.log(json)// json로 반환된 데이터를 then으로 확인
        })
    })
    .catch((err)=>{
        // 이전 메서드에서 반환된 프로미스가 rejected 상태일떄 실행
        // 오류가 발생했을 떄 runtime에러가 발생하지 않도록 예외사항을 준비
        console.log(err)
    })