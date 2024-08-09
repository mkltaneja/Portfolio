import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import BirdEyeLogo from '../../assets/Birdeye_Logo.png';
import BirdEyeLogo2 from '../../assets/Birdeye_Logo_2.png';
import AmazonLogo from '../../assets/Amazon_Logo.png';
import PepCodingLogo from '../../assets/PepCoding_Logo.png';

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle title'>Work Experience</h2>
        <div className='workExWrapper'>
            <div className='workEx'>
                <img src={BirdEyeLogo2} alt='BirdEye Logo' className='workExImg' />
                <div className='workExText'>
                    <h2 className='workExTitle heading'>Backend Software Developer</h2>
                    <a href='https://birdeye.com' className='workExCompany yellowText'>BirdEye</a>
                    <p className='workExDuration'>August 2022 - Present</p>
                    <ul className='workExDesc'>
                        <li className='workExDescBullet'>
                            Reduced 60% production errors by building an error alert mechanism using ElasticSearch.
                        </li>
                        <li className='workExDescBullet'>
                            Improved throughput by 10%, successfully migrated Redis from single-threaded Jedis to
                            Lettuce cluster in Spring Boot - Java application.
                        </li>
                        <li className='workExDescBullet'>
                            Migrated 80% database to Snowflake with 100% accuracy and 3X speed using Kafka and NiFi.
                        </li>
                        <li className='workExDescBullet'>
                            Configured Amazon S3 bucket for the QA environment using AWS console and implemented using Java.
                        </li>
                        <li className='workExDescBullet'>
                            Implemented API for billing flow of businesses on Salesforce using Node.Js and Express.Js.
                        </li>
                        <li className='workExDescBullet'>
                            Crafted a variety of Dashboards and data sources through SQL and Tableau, contributing to reporting objectives in collaboration with the Data Analysts.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='workEx'>
                <img src={AmazonLogo} alt='Amazon Logo' className='workExImg' />
                <div className='workExText'>
                    <h2 className='workExTitle heading'>Software Engineer Intern</h2>
                    <a href='https://www.amazon.com' className='workExCompany yellowText'>Amazon</a>
                    <p className='workExDuration'>February 2022 - June 2022</p>
                    <ul className='workExDesc'>
                        <li className='workExDescBullet'>
                            Engineered a user-friendly web application, used by Amazonians for ordering products, automating time-consuming data entry tasks, and enhancing user efficiency.
                        </li>
                        <li className='workExDescBullet'>
                            Created the front page of the application and multiple other components using TypeScript and React.js.
                        </li>
                        <li className='workExDescBullet'>
                            Developed a microservice utilizing Java, AWS Lambda Function, DynamoDB, API Gateway, and GraphQL, enabling automated retrieval of purchase requisitions and bills every 6 hours, streamlining crucial processes.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='workEx'>
                <img src={PepCodingLogo} alt='PepCoding Logo' className='workExImg' />
                <div className='workExText'>
                    <h2 className='workExTitle heading'>DSA Mentor | Teaching Assistant | Web Developer Intern</h2>
                    <a href='https://pepcoding.com' className='workExCompany yellowText'>PepCoding</a>
                    <p className='workExDuration'>January 2019 - September 2021</p>
                    <ul className='workExDesc'>
                        <li className='workExDescBullet'>
                            Mentored 800+ students in Data Structures and Algorithms for C++ and Java courses, providing invaluable guidance and fostering a supportive learning environment.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <p className='worksDesc'></p>
        <div className='worksImgs'>
        <img src={Portfolio1} alt='' className='worksImg'></img>
        <img src={Portfolio2} alt='' className='worksImg'></img>
        <img src={Portfolio3} alt='' className='worksImg'></img>
        <img src={Portfolio4} alt='' className='worksImg'></img>
        <img src={Portfolio5} alt='' className='worksImg'></img>
        <img src={Portfolio6} alt='' className='worksImg'></img>
        </div>
        <button className='worksBtn'>See More</button> */}
    </section>
  )
}

export default works;