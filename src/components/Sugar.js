
import React, { useEffect } from 'react';
import '../suagr.css'
function Sugar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(script);

    // 设置可视化图表大小
    const divElement = document.getElementById('viz1697599799522');
    const vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '1366px';
      vizElement.style.height = '795px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '1366px';
      vizElement.style.height = '795px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1327px';
    }

  }, []);

  return (
    <div className="sugar-page" >
    <div className="main-container" >
      <div className='banner'>
        <img src='/Sugar/sugar1.jpg' alt='sugar drink image' />
        <p>Are you aware of the hidden health impacts lurking within your favorite beverages?
          Join us on a journey to uncover the truths about sugar-sweetened drinks. In this interactive experience,
          we'll delve into the health effects of three main categories: Sugar-Sweetened Beverages (SSB), Artificially Sweetened Beverages (ASB), and Fruit Juices (FJ).
        </p>
      </div>
      <div className>
        <h2 id='secondTitle'>What Are These Beverages?</h2>
        <img id="sugar-img" src='/Sugar/sugar3.png' alt='sugar drink image2' />
        <p class='centerdtext'>
          Through interactive visualizations and insightful information, 
          we aim to provide you with a clear understanding of how these beverages can impact
           your health. Whether it's the increased risk of developing type 2 diabetes or other 
           health consequences, our goal is to empower you with <br/>knowledge to make informed choices. 
           Let's dive in and discover the real story behind your favorite drinks.
        </p>
      </div>
        <br/>
        <br/>
        <br/>

        <p class='centerdtext'>
          In the visual chart below, you will see a world map with some countries highlighted in different colors, 
          and the depth of this color represents the average prevalence of sugary beverage consumption-related 
          diseases. By clicking on your own country or the region to which you belong,
           you can learn about the probability of suffering from sugary beverage-related diseases. After clicking, it will provide the gender distribution and the probability of suffering from different types of diseases, allowing you to obtain more detailed information.
        </p>
        <div className='tableauPlaceholder' id='viz1697599799522' style={{ position: 'relative' }}>
          <noscript>
            <a href='#'>
              <img alt='Dashboard 1' src='https://public.tableau.com/static/images/zh/zhfu0008/Dashboard1/1_rss.png' style={{ border: 'none' }} />
            </a>
          </noscript>
          <object className='tableauViz' style={{ display: 'none' }}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='zhfu0008/Dashboard1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/zh/zhfu0008/Dashboard1/1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='zh-CN' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
        <img src='/Sugar/sugar3.jpg' alt='sugar drink image3' />
    
    </div>
    </div>
  );
}

export default Sugar;
