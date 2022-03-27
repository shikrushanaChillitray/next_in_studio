import React from 'react'
import "./panel.css"
const Panel = () => {
    const [active, setActive] = React.useState({ panel_four: false, panel_two: false, panel_one: false, panel_three: false, panel_five: false })
    React.useEffect(() => {
        // Get UI elements
        const panels = document.querySelectorAll('.panel');

        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                removeActiveClasses();
                let value=panel.id.replace("-","_");
               if(value==="panel_one")
               setActive({ panel_four: false, panel_two: false, panel_one: true, panel_three: false, panel_five: false })
               else if(value=="panel_two")
               setActive({ panel_four: false, panel_two: true, panel_one: false, panel_three: false, panel_five: false })
               else if(value=="panel_three")
               setActive({ panel_four: false, panel_two: false, panel_one: false, panel_three: true, panel_five: false })
               else if(value=="panel_four")
               setActive({ panel_four: true, panel_two: false, panel_one: false, panel_three: false, panel_five: false })
               else 
               setActive({ panel_four: false, panel_two: false, panel_one: false, panel_three: false, panel_five: true })
                panel.classList.add('active');
            })
        })

        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active');
            })
        }
    }, [])
    return (
        <div><div class="homepanal">
            <h1>Models</h1>
            <div class="container">
                <div class="panel" id="panel-one">
                    <h2>Sword </h2>
                   {active.panel_one&& <iframe class="canvas" src="https://sketchfab.com/models/a14077a1620c43b7ae08ba1f7e5f9874/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
}
                </div>
                <div class="panel" id="panel-two">
                    <h2>Wizard</h2>
                    {active.panel_two&& <iframe class="canvas" src="https://sketchfab.com/models/5c81d8a7610543779d0c7e85f9175fae/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
}
                </div>
                <div class="panel active" id="panel-three">
                    <h2>sorceress</h2>
                   
                </div>
                <div class="panel" id="panel-four">
                    <h2>Magic</h2>
                    {active.panel_four&& <iframe class="canvas" src="https://sketchfab.com/models/cc425a24b07b40d68b354f36eebd9d8e/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
}
                </div>
                <div class="panel" id="panel-five">
                    <h2>Map</h2>
                    {active.panel_five&& <iframe class="canvas" src="https://sketchfab.com/models/66955b63dd0f432e99a376c3fd317208/embed?autospin=0.05&autostart=1&camera=0&ui_infos=0&ui_controls=0&ui_stop=0" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
}
                </div>
            </div>

           
        </div></div>
    )
}

export default Panel