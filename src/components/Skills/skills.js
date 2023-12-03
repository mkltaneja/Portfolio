import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id = 'skills'>
        <span className="skillTitle title">Skills</span>
        <div className="skillBars">

            <div className="skillBar">
                <h2 className="skillType heading">Languages & Libraries</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/C-007396?logo=C&style=for-the-badge' />
                    <img className="skillImg" src='https://img.shields.io/badge/C%2B%2B-00599C?logo=C%2B%2B&style=for-the-badge' />
                    <img className="skillImg" src='https://img.shields.io/badge/Java-E11F26?logo=java&style=for-the-badge&label=%3C%2F%3E&labelColor=E11F26' />
                    <img className="skillImg" src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' />
                    <img className="skillImg" src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/CSS-1572B6?logo=css3&style=for-the-badge' />
                    <img className="skillImg" src='https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=React&logoColor=black' />
                </div>
            </div>
            
            <div className="skillBar">
                <h2 className="skillType heading">Computer Science Fundamentals</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/Data%20Structures%20and%20Algorithms-E11F26?style=for-the-badge&logoColor=white&label=%3C%2F%3E&labelColor=E11F26' />
                    <img className="skillImg" src='https://img.shields.io/badge/Object%20Oriented%20Programming-191970?style=for-the-badge&logoColor=white&label=%3C%2F%3E&labelColor=191970' />
                    <img className="skillImg" src='https://img.shields.io/badge/System%20Design-007396?style=for-the-badge&logo=materialdesignicons&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/SQL-E11F26?style=for-the-badge&logoColor=white&label=%3C%2F%3E&labelColor=E11F26' />
                    <img className="skillImg" src='https://img.shields.io/badge/DBMS-007DB8?style=for-the-badge&logoColor=white&label=%3C%2F%3E&labelColor=007DB8' />
                </div>
            </div>

            <div className="skillBar">
                <h2 className="skillType heading">Backend & API</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/Kafka-0078D7?style=for-the-badge&logo=apachekafka&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Spring%20Boot-%236DB33F?style=for-the-badge&logo=springboot&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/REST%20API-009688?style=for-the-badge&logo=framework&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/SOAP%20API-009688?style=for-the-badge&logo=framework&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Node.Js-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white' />
                </div>
            </div>

            <div className="skillBar">
                <h2 className="skillType heading">Databases</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/Redis-D82C20?style=for-the-badge&logo=redis&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/elasticsearch-005571?style=for-the-badge&logo=elastic&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Amazon%20S3-%23FF9900?style=for-the-badge&logo=amazons3&logoColor=white' />
                </div>
            </div>
            
            <div className="skillBar">
                <h2 className="skillType heading">Tools</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/Web%20Scraping%20and%20automation-4CAF50?style=for-the-badge' />
                    <img className="skillImg" src='https://img.shields.io/badge/jUnit%20and%20Mockito-E11F26?style=for-the-badge&logo=junit5&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/bash-F05032?style=for-the-badge&logo=gnubash&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Jenkins-E11F26?style=for-the-badge&logo=jenkins&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Linux-4EAA25?style=for-the-badge&logo=Linux&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Maven-E11F26?style=for-the-badge&logo=apachemaven&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Apache%20Tomcat-E11F26?style=for-the-badge&logo=apachetomcat&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Snowflake-38B9F2?style=for-the-badge&logo=snowflake&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white' />
                </div>
            </div>

            <div className="skillBar">
                <h2 className="skillType heading">Analytics & Visualization</h2>
                <div className="skillImgs">
                    <img className="skillImg" src='https://img.shields.io/badge/Sigma-38B9F2?style=for-the-badge&logo=googleanalytics&logoColor=white' />
                    <img className="skillImg" src='https://img.shields.io/badge/Tableau-38B9F2?style=for-the-badge&logo=Tableau&logoColor=white' />
                </div>
            </div>

            {/* <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. This is a demo text. </p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default skills