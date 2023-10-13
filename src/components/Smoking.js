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
          <br/>
          <br/>
          <img src="/smoking/smoking_and_lung_cancer.png" alt="smoking_and_lung_cancer"/>
          <br/>
          <br/>
          <p>
              When discussing the correlation between smoking and lung cancer, we delve into a critical
              realm that directly impacts our health and overall well-being. On this project website, we aim
              to delve into the intricate connection between smoking and lung cancer through data
              visualization, offering you an engaging visual synopsis.
          </p>
          <br/>
          <br/>
          <img src="/smoking/stop_smoking.jpg" alt="stop_smoking"/>
          <br/>
          <br/>
          <p>
              Smoking is widely acknowledged as one of the primary contributors to a range of severe health issues,
              with lung cancer standing out as one of its most significant and perilous consequences.
              Through these visualizations, our objective is to provide you with a comprehensive grasp of the association between smoking and lung cancer,
              as well as the substantial implications it holds for our health and society at large. We invite you to explore our website to gain a deeper
              understanding of all facets of this pivotal subject matter.
          </p>
          <br/>
          <p>
              In our visualization, we delve into a critical health issue directly related to smoking and lung cancer.
              Over the years, scientific research has made it abundantly clear that smoking is one of the primary risk factors for
              lung cancer. However, in order to gain a deeper understanding of this relationship, we have aggregated data from various
              academic studies, with a specific focus on the ratio of smokers within the group of individuals who develop lung cancer.
              This focus is driven by existing research that indicates a generally higher proportion of smokers among lung cancer patients,
              suggesting a close connection between smoking and lung cancer.
          </p>
          <br/>
          <p>
              In this visualization, you will encounter a series of bar graphs, where the <span className="blue-word">blue bars</span> represent the <span className="blue-word">lung cancer group</span>,
              and the <span className="green-word">green bars</span> represent the <span className="green-word">non-lung cancer group (Control Group)</span>. Each bar graph represents an academic study,
              arranged by publication Year. By clicking on a specific bar graph, you can access detailed information about that study,
              including the <strong>year of the study, the country</strong> it was conducted in, and the <strong>rate of smokers in both the lung cancer and non-lung cancer groups</strong>.
          </p>
          <br/>
          <p>
              <span className="blue-word"><strong>Cancer Group: Participants who have Lung Cancer</strong></span><br/>
              <span className="green-word"><strong>Control Group: Participants who do not have Lung Cancer</strong></span>
          </p>
          <br/>
          <p>
              Additionally, we have provided a filter(selection bar) in the upper right corner for your convenience. You can use it to highlight data from specific groups.
              For example, you can choose to view data only from the lung cancer group or the non-lung cancer group to gain a clearer understanding of how the relationship
              between smoking and lung cancer is manifested in different studies.
          </p>
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
          <p>
              We hope that this visualization will assist you in delving deeper into the connection between smoking and lung cancer,
              providing you with valuable insights into this crucial health issue.
          </p>

        <br/>
        <br/>
        <p>
            The visualization below focuses on the varying risks of lung cancer among different genders of smokers in academic studies,
            aiming to delve into this crucial health issue. Over the years, research has consistently shown a close association between smoking
            and lung cancer, but our visualization specifically emphasizes the differences in lung cancer risk between different genders of smokers.
            We have organized the studies by their publication dates and used varying thickness of bar graphs to reflect the number of participants in
            each study. Additionally, we have included the average risk of lung cancer for smokers as a reference point to help illustrate the gender disparities.
        </p>
        <br/>
          <img src="/smoking/smoking.jpg" alt="smoking"/>
        <br/>
          <p>
              In this visualization, you will encounter a series of bar graphs, with each bar graph representing an academic study,
              arranged by publication date. The <strong>thickness of the bars</strong> reflects <strong>the number of participants</strong> in the respective studies,
              and the height of each bar indicates <strong>the risk of lung cancer for smokers</strong>. By clicking on specific bar graphs, you can access
              detailed information about each study, including its <strong>publication year, the number of participants, and the corresponding lung cancer risk</strong>.
          </p>
          <br/>
          <p>
              The <span className="blue-word">polyline line</span> in the visualization illustrates how the risk of <span className="blue-word">lung cancer changes over time</span>, and the <span className="orange-word">straight line</span> illustrates the <span className="orange-word">average lung cancer risk</span> in one gender group.
          </p>
          <br/>
          <p>You can use the filter labeled <strong>"Select a View"</strong> at the top to choose <strong>different gender group</strong>.</p>
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
          <p>
              We hope that this visualization will help you gain a deeper understanding of the gender disparities in lung cancer
              risk among smokers and how this critical health issue manifests in different studies.
          </p>
        <br/>
        <br/>
          <p>
              Finally, our visualization aims to display the total number of participants in smoking and lung cancer surveys conducted in different countries.
              Users can interactively click on the world map to gain detailed insights into each country's lung cancer risk among male and female smokers,
              the gender ratio of survey participants, as well as the number of individuals in the Cancer Group and Control Group. The purpose of this visualization
              is to provide a comprehensive understanding of international variations in the relationship between smoking and lung cancer, along with insights into the
              research and survey efforts conducted by different countries.
          </p>
        <br/>
          <p>
              In this visualization, you will encounter a world map with labels indicating the total number of participants in smoking and lung cancer surveys,
              reflecting <strong>the scale of these investigations</strong> in different countries. Through interactive features, you can click on specific countries to access detailed
              information. This information includes <strong>lung cancer risk among male and female smokers</strong> in that country, the <strong>gender ratio of survey participants</strong>, as well as
              <strong>the number of individuals in the Cancer Group and Control Group</strong>. This allows you to delve deeper into the smoking and lung cancer relationship in each country
              and make comparisons between different nations.
          </p>
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

          <br/>
          <br/>
          <p>
              We hope that this visualization will offer you a comprehensive global perspective on the
              connection between smoking and lung cancer, aiding you in gaining a deeper understanding of the
              contributions and disparities among countries regarding this critical health issue.
          </p>
          <br/>
          <br/>
          <img src="/smoking/lung_cancer.jpg" alt="lung_cancer"/>
          <br/>
          <br/>
          <p>
              Through this topic, we have successfully created three visualizations that provide valuable insights into the
              relationship between smoking and lung cancer. Firstly, we showcased the ratio of smokers in the cancer group versus
              the non-cancer group, highlighting the direct link between smoking and lung cancer. Secondly, we examined the lung cancer
              risk among male and female smokers, emphasizing the significant role of gender in this issue. Finally, we explored the differences
              in the number of smokers and lung cancer risk among various countries, revealing international variations and trends.
              <br/>
              <br/>
              However, it's important to note that these visualizations come with certain limitations. Firstly, our dataset is relatively limited,
              consisting of just over 40 data points. This restricts our ability to provide a comprehensive and exhaustive insight. In the future,
              expanding the dataset will allow us to delve deeper into this critical topic. Secondly, we have only considered a subset of factors while
              neglecting other potential influencing variables. Hence, we encourage the inclusion of more variables in future research for a more comprehensive
              understanding.
              <br/>
              <br/>
              Despite these limitations, this project has offered us valuable insights into the relationship between smoking and lung cancer. We hope that these visualizations
              not only inspire further research but also raise awareness among the public about the impact of smoking on health. We look forward to future studies that can expand
              our understanding of this vital subject.
          </p>
          <br/>
          <br/>




      </div>
  );
}

export default Smoking;