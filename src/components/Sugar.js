import React, { useEffect, useRef } from 'react';

function Sugar() {
  const vizContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);

    script.onload = () => {
      const vizElement = vizContainer.current.getElementsByTagName('object')[0];
      if (vizContainer.current.offsetWidth > 800) {
        vizElement.style.width = '1366px';
        vizElement.style.height = '795px';
      } else if (vizContainer.current.offsetWidth > 500) {
        vizElement.style.width = '1366px';
        vizElement.style.height = '795px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '1327px';
      }
    }
  }, []);

  return (
    <div>
      <h2>Sugar</h2>
      <div className='tableauPlaceholder' id='viz1696420180536' ref={vizContainer} style={{ position: 'relative' }}>
        <noscript>
          <a href='#'>
            <img alt='Dashboard 1' src='https://public.tableau.com/static/images/zh/zhfu0008_1/Dashboard1/1_rss.png' style={{ border: 'none' }} />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display:'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
          <param name='embed_code_version' value='3' /> 
          <param name='site_root' value='' />
          <param name='name' value='zhfu0008_1&#47;Dashboard1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;zh&#47;zhfu0008_1&#47;Dashboard1&#47;1.png' /> 
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
          <param name='filter' value='publish=yes' />
        </object>
      </div>
    </div>
  );
}

export default Sugar;
