import React , {useState}from 'react';
import Modal from 'react-modal'
import "./Skills.css"

const ModalSkills = ({style}) => {
    const [skills, setSkills] = useState(false);
    return (
         <div className="skills__container">
            <div className={style} onClick={()=>{setSkills(!skills)}}> <p  >Skills</p></div>
            <Modal isOpen={skills} onRequestClose={()=> setSkills(!true)}
            style={
                {
                    overlay:{
                        background:'',
                        cursor:'pointer',
                    },

                    content:{
                        marginTop:'200px',
                        border:'none',
                        width: '90%',
                        height:'260px',
                        cursor:'pointer',
                        background:''
                    }
                }
            }
            >
                <div className="skills_button_container">
                        <div className="first_list_skills">
                            <p  className="list_skill">React JS</p>
                            <p  className="list_skill">Javascript ES6</p>
                            <p  className="list_skill">G-Suites</p>
                        </div>
                            <div className="second_list_skills">
                                <p className="list_skill">HTML 5</p>
                                <p className="list_skill">CSS 3</p>
                                <p className="list_skill">SASS</p>
                                <p className="list_skill">Canva</p>
                                <p className="list_skill">Jquery</p>
                                <p className="list_skill">GIT</p>
                            </div>
                            
                            <div className="third_list_skills">
                                <p  className="list_skill">Docker</p>
                                <p  className="list_skill">Node JS</p>
                                <p  className="list_skill">Express</p>
                                <p  className="list_skill">Insomnia</p>
                                <p  className="list_skill">Sendgrid</p>
                                <p  className="list_skill">Mongodb</p>
                            </div>
                    </div>
            </Modal>
        </div>
    );
};

export default ModalSkills;