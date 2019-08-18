import React from 'react';
import './press_gisa.scss';

class Press_gisa extends React.Component{
    render(){
        const gisas=[
           
            { title : '기사 제목 1' , date : new Date() , press_nm : '중앙일보',link:" https://news.joins.com/article/23483971" },
            { title : '기사 제목 2' , date : new Date() , press_nm : '한국일보',link:"https://www.hankookilbo.com/News/Read/201905301324353886?did=NA&dtype=&dtypecode=&prnewsid="},
            { title : '기사 제목 3' , date : new Date() , press_nm : '파이낸셜투데이',link:"http://www.ftoday.co.kr/news/articleView.html?idxno=108997"},
            { title : '기사 제목 4' , date : new Date() , press_nm : '머니투데이',link:"http://news.mt.co.kr/mtview.php?no=2019052917577495894"},
            { title : '기사 제목 5' , date : new Date() , press_nm : '한국대학신문',link:"http://news.unn.net/news/articleView.html?idxno=213274"},
            { title : '기사 제목 5' , date : new Date() , press_nm : '대학저널',link:"http://www.dhnews.co.kr/news/articleView.html?idxno=103083"},
        ];
        const gisaList=gisas.map(
            (gisa)=>(<li className="gisas"><span className="pressnm">{gisa.press_nm}</span><span className="gisaDate">|{gisa.data}</span><p className="gisaTitle"><a href={gisa.link} target="_blank">{gisa.title}</a></p></li>)
        );
        return(
            <div className="press_sec press_gisa">
                <div className="press_gisa_title"><h3>언론보도</h3></div>
                <ul className="gisaList">
                   {gisaList}
                </ul>
            </div>
        ); 
    }
}

export default Press_gisa;