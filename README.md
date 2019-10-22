# dop_blockchain


## 멀티캠퍼스 3rd_project 

블록체인 활용 프로젝트

ubuntu에서 


### by heeja

# 서버 올리기

## 잘 따라해보세요.

1. 소스 복사: Git clone https://github.com/Heeja/STAMP.git

2. Hyperledger chaincode는 보내준 폴더(chaincode) 사용.

3. chaincode 이름은 "**missions**"

   1. Hyperledger 구동은 강사님 워드파일 참조.

4. dop_zero/ 에 '**basic_articles**' 붙여넣기

   1. Connection.json에서 Hyperledger 구동중인 ip로 설정

      ```js
      "orderers": {
              "orderer.example.com": {
                  "url": "grpc://IP주소:7050"
              }
          },
          "peers": {
              "peer0.org1.example.com": {
                  "url": "grpc://IP주소:7051"
              }
          },
          "certificateAuthorities": {
              "ca.example.com": {
                  "url": "http://IP주소:7054",
                  "caName": "ca.example.com"
              }
          }
      ```

5. Dop_zero/에 'DBconfig.js', 'DBconfig_2.js'생성

   1. 각자의 ibm cloud DB2 **dsn** 설정해주기.

   2. DBconfig.js

      ```json
      var dsn1 = "본인 dsn 주소";
      
      module.exports = dsn1;
      ```

   3. DBconfig_2.js

      ```json
      var dsn2 = "Mobile App 연결 DB2 dsn 주소";
      
      module.exports = dsn2;
      ```



