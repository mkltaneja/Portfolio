import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import BirdeyeLogo from '../../assets/Birdeye_Logo.png';
import AmazonLogo from '../../assets/Amazon_Logo.png';

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>Work Experience</h2>
        <div className='worksExWrapper'>
            <div className='worksEx'>
                <img src={BirdeyeLogo} alt='BirdEye Logo' className='worksExImg' />
                <div className='worksExText'>
                    <p className='workExDuration'>August 2022 - Present</p>
                    <h3 className='worksExTitle'>Backend Software Developer</h3>
                    <h3 className='worksExCompany'>BirdEye</h3>
                    <ul className='worksExDesc'>
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
            <div className='worksEx'>
                <img src={AmazonLogo} alt='Amazon Logo' className='worksExImg' />
                <div className='worksExText'>
                    <p className='workExDuration'>February 2022 - June 2022</p>
                    <h3 className='worksExTitle'>Software Engineer Intern</h3>
                    <h3 className='worksExCompany'>Åmazon</h3>
                    <ul className='worksExDesc'>
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