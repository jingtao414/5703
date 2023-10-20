import React, { useEffect } from 'react';
import '../smoking.css';


function Smoking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);

    // 下面是新添加的代码部分
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
            <li><a href="#chart1" data-number="1">Smoker Rate by Year</a></li>
            <li><a href="#chart2" data-number="2">Male/Female Lung Cancer Risk</a></li>
            <li><a href="#chart3" data-number="3">Lung Cancer Risk by Country</a></li>
          </ul>
        </div>


          <div className='image-container-smoking'>
              <div className='smoking-image-container'>
                  <h1><strong className={"blue-word"}> Smoking lead to </strong> Lung Cancer</h1>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/><br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/><br/><br/><br/><br/>



                  {/*<br/>*/}
                  {/*<br/>*/}
                  {/*<img src="/smoking/stop_smoking.jpg" alt="stop_smoking"/>*/}
                  <br/>
              </div>
              <p>
                  Smoking is widely acknowledged as one of the primary contributors to a range of severe health issues,
                  with lung cancer standing out as one of its most significant and perilous consequences. Through these visualizations,
                  our objective is to provide you with a comprehensive grasp of the association between smoking and lung cancer.
              </p>
          </div>

          <div className='image-container-smoking'>
              <h2 id="chart1"><u>Smoker Rate among Lung Cancer and non-Lung Cancer Groups</u></h2>
              <p>
                  The compounds found in cigarettes have the potential to harm lung tissues, resulting in inflammation.
                  Some people claim that even non-smokers also have possibility to get Lung Cancer, But are there significant differences in smoking rates between people who develop lung cancer and those who do not?
              </p>
              <br/>
              {/* New Tableau Visualization */}
              {/* New Tableau Visualization */}
              <div className="tableauPlaceholder" id="viz1696732442520" style={{ position: 'relative' }}>
                  <noscript>
                      <a href="#">
                      </a>
                  </noscript>
                  <object className="tableauViz" style={{ display: 'none', width: '100%', height: '827px' }}>
                      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param name="name" value="SmokerRate/ofsmokeofcancerandcontrolgroup" />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param name="static_image" value="https://public.tableau.com/static/images/Sm/SmokerRate/ofsmokeofcancerandcontrolgroup/1.png" />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                  </object>
              </div>
              <br/>
              <br/>
              <p>
                  We have aggregated data from various academic studies, with a specific focus on the ratio of smokers among lung cancer and non-lung cancer patient groups.
                  This focus is driven by existing research that indicates a generally higher proportion of smokers among lung cancer patients, suggesting a close connection between smoking and lung cancer.
              </p>
          </div>
          <div className='image-container-smoking'>
            <h2 id="chart2"><u>Lung Cancer Risk among Male and Female smokers</u></h2>
              <p>
                  Nearly a quarter of the world's adults smoke. But there are big differences between men and women. More than one-third of the world's men smoke. Less than 1 in 10 women do this, so now,
                  let's take a closer look at the risk of lung cancer for male and female smokers. Are men and women equally susceptible to the adverse effects of smoking when it comes to this deadly disease, or are there gender factors at play?
              </p>
              <h2><strong>Difference in Lung Cancer Risk among different gender smokers</strong></h2>
            {/* Updated Tableau Visualization - Male/Female risk */}
            <div className="tableauPlaceholder" id="viz1696661486801" style={{ position: 'relative', width: '100%', height: '827px' }}>
              <noscript>
                <a href="#">
                  <img alt="Male/Female risk" src="https://public.tableau.com/static/images/Ma/MaleFemaleRiskbyYear/MaleFemalerisk/1_rss.png" style={{ border: 'none' }} />
                </a>
              </noscript>
              <object className="tableauViz" style={{ display: 'none', width: '1100px', height: '827px' }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value="MaleFemaleRiskbyYear&#47;MaleFemalerisk" />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param name="static_image" value="https://public.tableau.com/static/images/Ma/MaleFemaleRiskbyYear/MaleFemalerisk/1.png" />
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
                  Through an analysis of academic research, it has been observed that the risk of lung cancer is higher in males than in females. This difference
                  in incidence can largely be attributed to variations in smoking rates, smoking frequency, and the types of tobacco products used, with males having significantly higher smoking rates than females.
              </p>
            <br/>
          </div>
          <div className='image-container-smoking'>
              <h2 id="chart3"><u>Different Countries situation of Lung Cancer Risk</u></h2>
              <p>
                  Across the globe, smoking patterns exhibit also significant variations from one country to another.
                  Now, let's delve into the diverse landscape of lung cancer risk in different countries. Are there noticeable disparities in lung cancer prevalence among nations?
              </p>
            {/* First Tableau Visualization */}
              <h2><strong>Lung Cancer Risk among different country smokers</strong></h2>
            <div className="tableauPlaceholder" id="viz1696661743306" style={{ position: 'relative', width: '100%', height: '1477px' }}>
              <noscript>
                <a href="#">
                  <img alt="Country" src="https://public.tableau.com/static/images/Ri/RiskbyCountry/Country/1_rss.png" style={{ border: 'none' }} />
                </a>
              </noscript>
              <object className="tableauViz" style={{ display: 'none', width: '1200px', height: '827px' }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value="RiskbyCountry&#47;Country" />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param name="static_image" value="https://public.tableau.com/static/images/Ri/RiskbyCountry/Country/1.png" />
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
              <br/>
              <p>
                  From the figure above, there are significant differences in the incidence of lung cancer across countries. The risk of lung cancer in some countries is significantly higher.
                  This may be related to geographical location, culture, policies and health care systems. Therefore, reducing the risk of lung cancer requires a comprehensive consideration of these various factors.
              </p>
              <br/>
          </div>
          <div className='image-container-smoking '>
              <p>
                  It's important to note that these visualizations come with certain limitations. Firstly, our dataset is relatively limited, consisting of just over 40 data points.
                  This restricts our ability to provide a comprehensive and exhaustive insight. In the future, expanding the dataset will allow us to delve deeper into this critical topic.
              </p>
          </div>


      </div>
  );
}

export default Smoking;