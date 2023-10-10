import React, { useEffect } from 'react';

function ReduceWeight() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <h2>Reduce weight</h2>
            <div className="tableauPlaceholder" id="viz1696409206876" style={{ position: 'relative' }}>
                <noscript>
                    <a href="https://www.tableau.com">
                        <img
                            alt="IF & Wieght Losing Story"
                            src="https://public.tableau.com/static/images/JH/JH6GSBDMZ/1_rss.png"
                            style={{ border: 'none' }}
                        />
                    </a>
                </noscript>
                <object className="tableauViz" style={{ display: 'none', width: '1916px', height: '1191px' }}>
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="path" value="shared/JH6GSBDMZ" />
                    <param name="toolbar" value="yes" />
                    <param name="static_image" value="https://public.tableau.com/static/images/JH/JH6GSBDMZ/1.png" />
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

export default ReduceWeight;
