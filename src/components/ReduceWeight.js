import React, { useEffect } from 'react';
import '../smoking.css';

function ReduceWeight() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        document.body.appendChild(script);

        const links = document.querySelectorAll('.sidebar a');

        function highlightCurrentSection() {
            const sections = ['chart1', 'chart2', 'chart3'];
            let currentSection;

            sections.forEach(section => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    currentSection = section;
                }
            });

            links.forEach(link => {
                const li = link.parentElement;
                if (link.getAttribute('href').slice(1) === currentSection) {
                    li.classList.add('selected');
                } else {
                    li.classList.remove('selected');
                }
            });
        }

        window.addEventListener('scroll', highlightCurrentSection);
        document.querySelector('.sidebar').addEventListener('click', highlightCurrentSection);

        // 清理事件监听器
        return () => {
            window.removeEventListener('scroll', highlightCurrentSection);
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.removeEventListener('click', highlightCurrentSection);
            }
        };

    }, []);

    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li><a href="#chart1" data-number="1">Overview</a></li>
                    <li><a href="#chart2" data-number="2">Weight Losing Comparison</a></li>
                    <li><a href="#chart3" data-number="3">BMI Losing Com & Fat Mass Losing Com</a></li>
                </ul>
            </div>
            <h1>Is intermittent fasting available for reducing weight?</h1>
            <p>
                In recent years, 'intermittent fasting,' as a highly regarded weight loss method, has gained increasing recognition and adoption
                among a growing number of individuals. However, the concept it promotes, which emphasizes 'extending fasting periods rather than calorie
                restriction,' has sparked intense debate. Some believe this to be an effective weight loss approach, enabling individuals to shed pounds with
                relative ease while avoiding excessive dietary restrictions. Others, however, approach this idea with skepticism, questioning its practical
                effectiveness in achieving weight loss goals. This issue has become a hot topic in the realms of health and weight management, drawing the attention
                of numerous experts and researchers who are diligently seeking scientific evidence to determine whether 'intermittent fasting' is a viable weight loss strategy
            </p>
            <br/>
            {/*<img src="/ReduceWeight/food.jpg" alt="food"/>*/}
            <br/>
            <p>
                The primary objective of this topic is to integrate a multitude of relevant studies and present, through data visualization, whether the weight loss effects of intermittent
                fasting are indeed significant to users
            </p>
            <br/>
            <p>
                We collected over a dozen studies from various countries around the world, including the United States, China, and Canada. These studies encompassed a diverse group of participants
                and can be categorized into three main groups: the regular intermittent fasting group (ADF group), a control group, and a subset of the time-restricted fasting group (TRF group)
            </p>
            <br/>
            <h2 id="chart1">Overview</h2>
            {/*第1幅图*/}
            <div className='tableauPlaceholder' id='viz1697099438190' style={{ position: 'relative' , width: '100%', height: '100%'}}>
                <noscript>
                    <a href='#'>
                        <img alt='Page1' src='https://public.tableau.com/static/images/57/5703_IFworking/Page1/1_rss.png' style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none', width: '1200px', height: '827px'  }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='5703_IFworking/Page1' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https://public.tableau.com/static/images/57/5703_IFworking/Page1/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                </object>
            </div>

            <br/>
            <br/>
            <p>
                In our study, we placed particular emphasis on tracking changes in participants'
                body weight before and after the experiments. The following graph categorizes the weight
                differences (pre-experiment - post-experiment) of all participants from different groups based on various studies.
            </p>
            <br/>
            <br/>
            {/*第二幅图*/}
            <h2 id="chart2">Weight Losing Comparison</h2>
            <div className='tableauPlaceholder' id='viz1697100031213' style={{ position: 'relative' }}>
                <noscript>
                    <a href='#'>
                        <img alt='Page2' src='https://public.tableau.com/static/images/Pa/Page2_16969298931720/Page2/1_rss.png' style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none' , width: '1200px', height: '827px'}}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Page2_16969298931720/Page2' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https://public.tableau.com/static/images/Pa/Page2_16969298931720/Page2/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                </object>
            </div>
            <br/>
            <br/>
            <p>
                Furthermore, we extracted data on BMI changes and fat content variations for participants across different groups.
                The following graph allows you to view the relevant numerical changes in participants before and after the experiments (pre-experiment - post-experiment).
            </p>
            <br/>
            {/*第3幅图*/}
            <h2 id="chart3">BMI Losing Com & Fat Mass Losing Com</h2>
            <div className='tableauPlaceholder' id='viz1697100584419' style={{ position: 'relative' }}>
                <noscript>
                    <a href='#'>
                        <img alt='Page3' src='https://public.tableau.com/static/images/Pa/Page3_16969299398620/Page3/1_rss.png' style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className='tableauViz' style={{ display: 'none', width: '1200px', height: '827px' }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Page3_16969299398620/Page3' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https://public.tableau.com/static/images/Pa/Page3_16969299398620/Page3/1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en-US' />
                </object>
            </div>
            <br/>
            <br/>
            <p>
                In this study, we focused on analyzing the effects of different fasting methods on participants' body weight, BMI, and fat content.
                By collecting over a dozen studies from around the world, we conducted in-depth investigations into the ADF group (Alternate-Day Fasting group),
                a control group, and a subset of the TRF group (Time-Restricted Fasting group).
                <br/>
                <br/>
                The study results indicated that the ADF group exhibited more significant effects in terms of weight difference before and after the experiments,
                BMI changes, and reductions in fat content. Specifically, participants in the ADF group tended to lose more weight, experience more pronounced reductions in BMI,
                and exhibit more noticeable decreases in fat content by the end of the experiments.
                <br/>
                <br/>
                These findings highlight the potential of intermittent fasting methods in weight management and offer valuable insights for future health and weight-related research.
                However, we also recognize that there are many unanswered questions in the field, and further in-depth research is needed to better understand these effects and determine best practices.
            </p>
            <br/>
            {/*<img src="/ReduceWeight/foodclock.jpeg" alt="foodclock" width="428" height="428"/>*/}
            <br/>
            <h1>Summary</h1>
            <p>
                In conclusion, this study underscores the effectiveness of ADF as a weight loss approach but reminds us to consider individual variations and potential health risks when applying it.
                Future research will continue to advance our understanding in this area and contribute to the development of more precise weight management strategies
            </p>
            <br/>
            <br/>


        </div>
    );
}

export default ReduceWeight;
