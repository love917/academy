#주석처리 (--뒤에 한 칸 띄움)
-- 주석처리

-- 1.데이터베이스 만들기
create database member;

-- 데이터베이스 사용하기
use member;

-- 데이터베이스 지우기
drop database pink;

-- 2.테이블 만들기
create table member_table(
seq int not null auto_increment, -- 정수, 비워두지 말기, 자동으로 1씩 증가
mb_id varchar(20) not null unique, -- 비워두지 말기, 유일한 이름
mb_pw varchar(50) not null, -- 비워두지 말기
mb_name varchar(10) not null,
address varchar(100),
phone1 varchar(3),
phone2 varchar(10),
height int,
salary int,
month int,
primary key(seq)
);
-- 테이블 삭제
drop table member_table;

select * from member_table;
select mb_name,address from member_table;

-- where 조건문
select * from member_table where height<=165;
select * from member_table where height<=165 and height <= 180;
select * from member_table where salary<=4000000;
select * from member_table where month>=12;
select * from member_table where mb_name like "김%"; -- 김씨만 검색 
select * from member_table where mb_name like "김%" or "박%";

-- 데이터 입력
insert into member.member_table values(null,"240510_1","12345","hyun","부산시 진구 부전동 221-1","051","11111111",165,2000000,3);
insert into member.member_table values(null,"240510_2","53532","dory","부산시 진구 부전동 221-2","031","22222211",168,4500000,24);

insert into member.member_table values(null,"240510_1","12345","hyun","부산시 진구 부전동 221-1","051","11111111",165,2000000,3),
										(null,"220729_1","12345","박일자","부산시 진구 부전동 221-1","051","11111111",163,3200000,7),
										(null,"220729_2","22145","김하자","경상북도 영주시 부석면 영부로120번길 59","054","22222222",175,4500000,2),
										(null,"220729_3","78521","강꾸준","강원도 인제군 남면 신남로58번길 28","033","33333333",180,4000000,9),
										(null,"220729_4","98745","정열심","경상북도 청송군 파천면 중평병부길 128","054","44444444",164,3000000,6),
										(null,"220729_5","45216","이합격","전라북도 정읍시 수성1로 32(수성동) ","063","55555555",183,2750000,13),
										(null,"220729_6","78522","배밀자","전라남도 고흥군 도화면 구암로 3","061","66666666",165,3200000,5),
										(null,"220729_7","78954","도민규","경상남도 진주시 수곡면 원창길 82",null,null,177,3000000,3),
										(null,"220729_8","22145","민윤기","경상남도 진주시 집현면 불너머길 74","055","88888888",185,4000000,8),
										(null,"220729_9","78541","박지민","경상북도 포항시 북구 죽장면 죽장로 1577-30","054","99999999",182,2700000,16),
										(null,"220729_10","41253","김태형","강원도 강릉시 왕산면 방터길 53-70 ","033","12345678",175,3200000,9),
										(null,"220729_11","45871","김석진","충청남도 서천군 화양면 화한로61번길 21","041","11223344",165,4000000,10),
										(null,"220729_12","78541","박이자","충청북도 옥천군 청산면 청산관기로 549-2","043","99887766",165,3100000,3);

-- insert into 테이블 (열이름1, 열이름2...) values(값1,값2...)
insert into member.member_table (mb_id,mb_pw,mb_name) values("220729_13","788424","이동희");

-- 별칭사용하기
select mb_name "이름" from member_table WHERE month >=12;
select * from member_table WHERE mb_name like "박%자"; -- 박자와 일자 사이에 글자 갯수가 많아도 선택이 됨
select * from member_table WHERE mb_name like "박_자"; -- 박자와 일자 사이에 갯수가 하나 선택(언더바 갯수에 따라, 두개선택 가능)
select * from member_table WHERE mb_name IN("강꾸준", "이합격"); -- OR 와 비슷함 포함된걸 선택해라.
select * from member_table WHERE height order by height DESC; -- DESC : 내림차순
select * from member_table WHERE height order by height ASC; -- ASC : 오름차순
DESC member_table; -- DESC를 앞에다 쓰면 구조를 보는 용도이다.

-- 월급이 350이상인 사람의 mb_id, mb_name,salary (월급기준)내림차순
select mb_id, mb_name,salary from member_table WHERE salary>=3500000 order by mb_name ASC;

-- 수정하기(error 뜰때 : Edit -> Preferences -> SQL editor -> safe updates 체크를 해제 -> 껏다키기)
update member_table set address = "전라북도 정읍시 수상 22로 102번길(수정동)" WHERE mb_name = "이합격";
update member_table set height = "174" WHERE mb_name = "정열심";

-- 월급이 2백오십이상 3백오십이하인 행을 선택하시오    
select * from member_table where salary >=2500000 and salary <=3500000 order by salary DESC;

-- 지역이 경상북도 또는 충청북도인 행을 선택하시오
select * from member_table where address like "경상북도%"or address like "충청남도%";

-- 이름이 강꾸준 또는 박일자 행을 선택하시오
select * from member_table where mb_name in("강꾸준","박일자");

-- 전체임금의 평균보다 높은 행을 모두 찾으시오
select avg(salary) from member_table;
select * from member_table where salary > (select avg(salary) from member_table);

-- 임금이 가장 높은 사람과 가장 낮은 사람의 차는 얼마인가
select max(salary) from member_table;
select min(salary) from member_table;
select max(salary) - min(salary)from member_table;

select * from member_table where mb_name like "강꾸준";
delete from member_table where mb_name like "강꾸준";

-- 테이블 삭제하기 :select * from member_table
drop table member_table;

-- 데이터베이스 삭제하기
drop database member