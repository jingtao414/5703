import React, { useEffect } from 'react';

function Smoking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);
  }, []);

  return (
      <div>
        <h2>Smoking and Lung Cancer</h2>
        <div className='tableauPlaceholder' id='viz1696393833529' style={{ position: 'relative' }}>
          <noscript>
            <a href='#'>
              <img alt='Male/Female risk' src='https://public.tableau.com/static/images/Ja/Jason_1/MaleFemalerisk/1_rss.png' style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none', width: '1000px', height: '827px' }}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='Jason_1&#47;MaleFemalerisk' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/Ja/Jason_1/MaleFemalerisk/1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='zh-CN' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      </div>
  );
}

export default Smoking;
