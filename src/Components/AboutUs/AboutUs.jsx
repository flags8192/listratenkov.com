import cx from 'classnames'
import React from 'react'
import {Button} from 'react-bootstrap'
import cv from '../../cv/resume.pdf'
import {myData} from '../../Data/Data'
import img from '../../Image/me.png'
import {ScrollTo} from '../ScrollTo/ScrollTo'
import s from './AboutUs.module.css'

export const AboutUs = () => {
  return (
    <>
      <main id="aboutUs" className={cx(s.about_area, s.home2)}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={s.section_title}>
                <h2>What Me Offer</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className={s.single_about}>
                <div className={s.single_about_thumb}>
                  <div className={s.single_about_thumb_inner}>
                    <img src={img} alt=""/>
                    <div className={s.thumb_img_border}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className={s.single_about}>
                <div className={s.single_about_content}>
                  <div className={s.single_about_content_inner_text}>
                    <p>I am looking for an entry-level position at your company to use my skills in coding, troubleshooting difficult problems and helping to complete projects on time. WEB development is my main hobby. To strengthen my existing knowledge, I would like to gain experience in teamwork and commercial projects. Learning new tools does not scare me, I intuitively know what to look for and where to look. I really want to work in the field of web development and learn new things. Recently I have been actively learning JavaScript, React.js</p>
                  </div>
                  <div className={s.icons_skills}>
                    {myData.skills.map((skills, key) => {
                      return (
                        <i key={key} className={skills.icon} title={skills.name}/>
                      );
                    })}
                  </div>
                  <Button variant="dark">
                    <a href={cv} download="CV">Download CV</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollTo to="xz"/>
      </main>
    </>
)
}
