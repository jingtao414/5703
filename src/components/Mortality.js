// src/components/SmokingAndLungCancer.js
import React, { useEffect } from 'react';
import '../smoking.css';

function Mortality() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        document.body.appendChild(script);
    }, []);

    // const links = document.querySelectorAll('.sidebar a');
    //
    // function highlightCurrentSection() {
    //     const sections = ['chart1', 'chart2', 'chart3'];
    //     let currentSection;
    //
    //     sections.forEach(section => {
    //         const element = document.getElementById(section);
    //         const rect = element.getBoundingClientRect();
    //         if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    //             currentSection = section;
    //         }
    //     });
    //
    //     links.forEach(link => {
    //         const li = link.parentElement;
    //         if (link.getAttribute('href').slice(1) === currentSection) {
    //             li.classList.add('selected');
    //         } else {
    //             li.classList.remove('selected');
    //         }
    //     });
    // }
    //
    // window.addEventListener('scroll', highlightCurrentSection);
    // document.querySelector('.sidebar').addEventListener('click', highlightCurrentSection);
    //
    // // 清理事件监听器
    // return () => {
    //     window.removeEventListener('scroll', highlightCurrentSection);
    //     const sidebar = document.querySelector('.sidebar');
    //     if (sidebar) {
    //         sidebar.removeEventListener('click', highlightCurrentSection);
    //     }
    // };


return (
        <div>

            <div className="sidebar">
                <ul>
                    <li><a href="#chart1" data-number="1">The effect of body weight on mortality</a></li>
                    <li><a href="#chart2" data-number="2">HR by Country and Weight Categories</a></li>
                    <li><a href="#chart3" data-number="3">Summary</a></li>
                </ul>
            </div>

            <div className='image-container-smoking'>
                <h1 id="chart1"><strong className={"blue-word"}>The Effect of Body Weight </strong> on Mortality</h1>
                <div className="container">
                    <div className="text-section">
                        <p>
                            In recent years, the global emphasis on health and wellness has brought the topic of body weight to the forefront of many discussions.
                            The relationship between body weight and overall health has always been a topic of intrigue and debate. While it's commonly understood that both extremes of the weight spectrum – underweight and morbid obesity –
                            can pose significant health risks, the implications of the weight ranges in between are less clear-cut. Utilizing a plethora of data gathered from various nations worldwide, we embarked on an analytical journey to
                            decipher the intricate relationship between body weight and its subsequent effect on mortality risk.
                        </p>
                    </div>
                    <div className="image-section">
                        <img src="/BodyWeight/obesity-title-image.jpeg" width="2200" alt="obesity" />
                    </div>
                </div>
            </div>

            <div className='image-container-smoking'>
                <h2 id="chart2">HR by Country and Weight Categories</h2>
                <p>
                    <strong className={"red-word"}>Hazard Ratio (HR)</strong>  is a measure used in survival analysis to describe the relationship between the occurrence of an event (in this case, mortality)
                    and an exposure of interest (such as body weight). It quantifies how much the hazard, or risk, of the event increases or decreases when the exposure variable is present.
                    An HR greater than 1 indicates a higher risk with the exposure, while an HR less than 1 suggests a reduced risk.
                    <br/>
                    <br/>
                    This analytical chart presents a comprehensive view of how body weight influences mortality risk, represented by HR, across a variety of nations. Each data point from a country accentuates
                    the relationship between the average body weight of its citizens and their mortality rate. To elaborate further, this data is segregated into distinct weight categories,
                    illustrating the variance in mortality risk within these brackets.
                </p>
                <br/>
                <div className="tableauPlaceholder" style={{ position: 'relative' }}>
                    <noscript>
                        <a href="#">
                            <img alt="Jiahui_lldyy" src="https://public.tableau.com/static/images/Ji/Jiahui_lldyy/1_rss.png" style={{ border: 'none' }} />
                        </a>
                    </noscript>
                    <object className="tableauViz" style={{ display: 'none', width: '1200px', height: '827px' }}>
                        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param name="name" value="Jiahui_lldyy/1" />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param name="static_image" value="https://public.tableau.com/static/images/Ji/Jiahui_lldyy/1.png" />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                        <param name="filter" value="publish=yes" />
                    </object>
                </div>
                <br/>
                <p>
                    The data distinctly demarcates five pivotal weight categories: underweight (&lt;18.5), normal weight (18.5–24.9), overweight (25–29.9), mild obesity (30–34.9), and morbid obesity (>35).
                    It's observed that those under the underweight bracket seem to be at a heightened risk of mortality in comparison to other categories. Conversely, individuals classified under
                    overweight and mild obesity categories appear to possess a slightly reduced mortality risk than those within the normal weight bracket.
                    On the national front, the data from France is particularly intriguing, with its HR standing at 0.7, markedly lower than
                    the average figures from other nations, spotlighting France in this analysis. Other countries revolve around an HR of 1.2.
                </p>
            </div>

            <div className='image-container-smoking '>
                <h2 id="chart3">Summary</h2>
                <p>
                    This analysis uncovers some rather intriguing phenomena. First and foremost, contrary to prevalent beliefs, being overweight or mildly obese may not always correlate with a higher risk of mortality.
                    On the contrary, being underweight seems to pose a greater threat. Moreover,
                    the mortality risk disparities across different countries might be influenced by their culture, lifestyles, and healthcare systems. Particularly, the conspicuously lower HR value in
                    France compared to other nations beckons further exploration.
                </p>
            </div>



        </div>
    );
}

export default Mortality;
