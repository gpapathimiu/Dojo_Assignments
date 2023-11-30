import React, {useState} from 'react'

const Tabs = () => {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

return (
    <div className="container">

        <div className="pick-tabs">
            <div className={toggleState === 1 ? "tabs active-tab" : "tabs"} onClick={() => toggleTab(1)}>Tab 1</div>
            <div className={toggleState === 2 ? "tabs active-tab" : "tabs"}  onClick={() => toggleTab(2)}>Tab 2</div>
            <div className={toggleState === 3 ? "tabs active-tab" : "tabs"}  onClick={() => toggleTab(3)}>Tab 3</div>
        </div>


        <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus consequatur doloremque error, vero quasi assumenda. Porro id rem exercitationem, unde quos qui ducimus consequuntur doloribus iure eum. Ipsa, adipisci!</div>
        <div className={toggleState === 2 ? "content active-content" : "content"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, beatae!</div>
        <div className={toggleState === 3 ? "content active-content" : "content"}>Ea voluptates suscipit, doloribus eligendi animi numquam nobis deserunt unde. Vel eius numquam placeat rerum tenetur amet nihil asperiores quasi?</div>
        </div>





    </div>
    )
}

export default Tabs