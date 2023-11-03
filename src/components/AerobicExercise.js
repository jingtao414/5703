import React, { useEffect } from 'react';
import '../exercise.css';
// import '../smoking.css';

function AerobicExercise() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
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
      document.body.removeChild(script);
      window.removeEventListener('scroll', highlightCurrentSection);
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.removeEventListener('click', highlightCurrentSection);
      }
    };
  }, []);

  function SplitImageComponent() {
    return (
      <div className="split-image-container">
        <div className="left-image" >
          <img src="/BloodPressure/bloodPressure.jpg" alt="Exercise Image" />
        </div>
        <div className="right-image">
          <img src="/BloodPressure/exercise.jpg" alt="Exercise Image" />
        </div>
        <div className="text-overlay"><span style={{ color: 'red' }}>High blood pressure
        </span > <span style={{ color: '#1D5E46' }}>silently harms millions. However, <span style={{ color: '#01579B' }}>regular aerobic exercises </span>
            offer a powerful shield, effectively lowering blood pressure. Explore how various nations utilize
            this defense against the silent menace</span></div>
      </div>
    );
  }

  return (

    <div>
      <SplitImageComponent />
      <h2>Aerobic Exercise: A Key to Lowering Blood Pressure and Reducing Cardiovascular Disease Risk</h2>
      <div className="sidebar">
        <ul>
          <li><a href="#chart1" data-number="1">Blood Pressure Levels in Different Countries</a></li>
          <li><a href="#chart2" data-number="2">AerobicExercise and Blood Pressure</a></li>
          <li><a href="#chart3" data-number="3">Blood Pressure Reduction in Different Genders</a></li>
        </ul>
      </div>
      <div className='image-container'>
        <h2 id="chart1">AerobicExercise will reduce blood pressure</h2>
        <p>Engaging in aerobic exercise promotes heart health and improves blood circulation. While some may argue that factors other than exercise can influence blood pressure, is there a tangible disparity in blood pressure levels between those who regularly engage in aerobic exercise and those who don't?</p>
        <h3>🔴 Note: Levels above 140mmHg signal high blood pressure - a potential risk!</h3>
        <div className="tableauPlaceholder" id="viz1697176835551" style={{ position: 'relative', width: '100%', height: 'auto', margin: '0 auto' }}>
          <noscript>
            <a href="#">
              <img alt="Sheet 2 " src="https://public.tableau.com/static/images/Ne/Nero_1/Sheet2/1_rss.png" style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: 'none', width: '100%', height: '795px', margin: '0 auto' }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="Nero_1/Sheet2" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Ne/Nero_1/Sheet2/1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
        <div>Dive into the data: Consistent aerobic routines lead to healthier blood pressure levels across nations.
          Make exercise a habit for optimal heart health!</div>
      </div>

      <div className='image-container'>
        <h2 id="chart2">Blood Pressure Levels in Different Countries Post-Aerobic Exercise</h2>
        <p>Worldwide, aerobic exercise trends differ from one nation to another. Let's explore the effects of aerobic exercise on blood pressure levels across various countries. Do some countries showcase more significant benefits than others?</p>
        <div className="tableauPlaceholder" id="viz1698215672327" style={{ position: 'relative' }}>
          <noscript>
            <a href="#">
              <img alt="Dashboard 1 " src="https://public.tableau.com/static/images/DF/DFM5C3SHK/1_rss.png" style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: 'none', width: '100%', height: '795px', margin: '0 auto' }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="path" value="shared/DFM5C3SHK" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/DF/DFM5C3SHK/1.png" />
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


      <div className='image-container'>
        <p id="chart3">🔴Tips: Explore the chart below to see the inverse relationship between blood pressure reduction through aerobic exercise and the risk of cardiovascular diseases.</p>
        <div className="tableauPlaceholder" id="viz1697177227638" style={{ position: 'relative', width: '100%', height: 'auto', margin: '0 auto' }}>
          <noscript>
            <a href="#">
              <img alt="Sheet 6 " src="https://public.tableau.com/static/images/Ne/Nero_2/Sheet6/1_rss.png" style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: 'none', width: '100%', height: '795px', margin: '0 auto' }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="Nero_2/Sheet6" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Ne/Nero_2/Sheet6/1.png" />
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

    </div>



  );
}

export default AerobicExercise;
