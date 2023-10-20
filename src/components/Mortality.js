// src/components/SmokingAndLungCancer.js
import React, { useEffect } from 'react';

function Mortality() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <h2>Mortality</h2>

            <div className="tableauPlaceholder" style={{ position: 'relative' }}>
                <noscript>
                    <a href="#">
                        <img alt="Sheet 1" src="https://public.tableau.com/static/images/Ji/Jiahui_1/Sheet1/1_rss.png" style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className="tableauViz" style={{ display: 'none', width: '1200px', height: '827px' }}>
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param name="name" value="Jiahui_1/Sheet1" />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    <param name="static_image" value="https://public.tableau.com/static/images/Ji/Jiahui_1/Sheet1/1.png" />
                    <param name="animate_transition" value="yes" />
                    <param name="display_static_image" value="yes" />
                    <param name="display_spinner" value="yes" />
                    <param name="display_overlay" value="yes" />
                    <param name="display_count" value="yes" />
                    <param name="language" value="en-US" />
                    <param name="filter" value="publish=yes" />
                </object>
            </div>


            <div className="tableauPlaceholder" style={{ position: 'relative' }}>
                <noscript>
                    <a href="#">
                        <img alt="Sheet 2" src="https://public.tableau.com/static/images/QY/QY2WQJB4H/1_rss.png" style={{ border: 'none' }} />
                    </a>
                </noscript>
                <object className="tableauViz" style={{ display: 'none', width: '1200px', height: '827px' }}>
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="path" value="shared/QY2WQJB4H" />
                    <param name="toolbar" value="yes" />
                    <param name="static_image" value="https://public.tableau.com/static/images/QY/QY2WQJB4H/1.png" />
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

export default Mortality;
