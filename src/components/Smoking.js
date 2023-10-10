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


        <h1>Smoking and Lung Cancer</h1>
        <h2 id="chart1">Smoker Rate by Year among Cancer and Control Groups</h2>

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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h2 id="chart2">Male/Female Lung Cancer Risk by different Paper by Year</h2>


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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h2 id="chart3">Lung Cancer Risk of Smoking by Country</h2>

        {/* First Tableau Visualization */}
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




      </div>
  );
}

export default Smoking;