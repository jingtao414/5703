import React, { useEffect } from 'react';

function AerobicExercise() {
  // Using useEffect hook to append the Tableau script once the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>AerobicExercise will reduce blood pressure</h2>
      <div className="tableauPlaceholder" id="viz1697176835551" style={{ position: 'relative', width: '100%', height: 'auto', margin: '0 auto' }}>
        <noscript>
          <a href="#">
            <img alt="Sheet 2 " src="https://public.tableau.com/static/images/Ne/Nero_1/Sheet2/1_rss.png" style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display:'none', width: '100%', height: '795px', margin: '0 auto' }}>
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

      <h2>second visualization</h2>
      <div className="tableauPlaceholder" id="viz1697177227638" style={{ position: 'relative', width: '100%', height: 'auto', margin: '0 auto' }}>
        <noscript>
          <a href="#">
            <img alt="Sheet 6 " src="https://public.tableau.com/static/images/Ne/Nero_2/Sheet6/1_rss.png" style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display:'none', width: '100%', height: '795px', margin: '0 auto' }}>
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

      <h2>Third visualization</h2>
      <div className="tableauPlaceholder" id="viz1697177565124" style={{ position: 'relative', width: '100%', height: 'auto', margin: '0 auto' }}>
        <noscript>
          <a href="#">
            <img alt="Sheet 3 " src="https://public.tableau.com/static/images/Ne/Nero_3/Sheet3/1_rss.png" style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display:'none', width: '100%', height: '795px', margin: '0 auto' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Nero_3/Sheet3" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="static_image" value="https://public.tableau.com/static/images/Ne/Nero_3/Sheet3/1.png" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="zh-CN" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>

    
    
  );
}

export default AerobicExercise;
